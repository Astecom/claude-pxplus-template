#!/usr/bin/env python3
"""
Bring docs/ up to date from the online PxPlus manual (https://manual.pvxplus.com/PXPLUS/).

Give one or more pages, usually the release notes of a new version; the script fetches each and the pages it links
to (one level), converts them to Markdown the way the existing docs/ were made (html2text) and writes them to
docs/<the same path>.md. A page whose text is the same is left alone. Then run: npm run build-docs-index

    python3 -m venv /tmp/docs-venv && /tmp/docs-venv/bin/pip install html2text
    /tmp/docs-venv/bin/python scripts/fetchDocs.py pxplus/vers2300.htm

It asks the site for one page at a time with a pause in between, and names itself in the User-Agent.
"""

import argparse
import html.parser
import re
import os
import sys
import time
import urllib.parse
import urllib.request

import html2text

BASE = 'https://manual.pvxplus.com/PXPLUS/'
DOCS = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'docs')
AGENT = 'claude-pxplus-template docs update (https://github.com/Astecom/claude-pxplus-template)'


class Links(html.parser.HTMLParser):
    """The href of every link on a page"""

    def __init__(self):
        super().__init__()
        self.hrefs = []

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            href = dict(attrs).get('href')
            if href:
                self.hrefs.append(href)


def fetch(url):
    request = urllib.request.Request(url, headers={'User-Agent': AGENT})
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read().decode('latin1')


def page_of(url):
    """A manual URL as its page path ("directives/remove.htm"), or None for anything outside the manual"""
    url = urllib.parse.urldefrag(url)[0]
    if not url.startswith(BASE) or not url.lower().endswith('.htm'):
        return None
    return urllib.parse.unquote(url[len(BASE):])


def markdown_of(text):
    converter = html2text.HTML2Text()
    converter.body_width = 0
    # As in the existing docs: a link to a page becomes its .md; a link to an anchor in a page stays .htm
    return re.sub(r'\]\(([^)#\s]+)\.htm\)', r'](\1.md)', converter.handle(text))


def main():
    parser = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    parser.add_argument('pages', nargs='+', help='page paths below PXPLUS/, e.g. pxplus/vers2300.htm')
    parser.add_argument('--pause', type=float, default=0.6, help='seconds between two requests (default 0.6)')
    parser.add_argument('--no-follow', action='store_true', help='only the pages given, not the pages they link to')
    args = parser.parse_args()

    todo = [p.lstrip('/') for p in args.pages]
    seen = set()
    counts = {'new': 0, 'changed': 0, 'same': 0, 'failed': 0}
    first = True
    while todo:
        page = todo.pop(0)
        if page in seen:
            continue
        seen.add(page)
        if not first:
            time.sleep(args.pause)
        first = False
        url = BASE + urllib.parse.quote(page)
        try:
            text = fetch(url)
        except Exception as error:
            counts['failed'] += 1
            print(f'failed   {page}: {error}', file=sys.stderr)
            continue

        target = os.path.normpath(os.path.join(DOCS, page[:-4] + '.md'))
        markdown = markdown_of(text)
        old = None
        if os.path.exists(target):
            with open(target, encoding='utf-8') as existing:
                old = existing.read()
        # Only whitespace differs (another html2text version): the page counts as the same
        if old is not None and ' '.join(old.split()) == ' '.join(markdown.split()):
            counts['same'] += 1
        else:
            os.makedirs(os.path.dirname(target), exist_ok=True)
            with open(target, 'w', encoding='utf-8') as out:
                out.write(markdown)
            state = 'new' if old is None else 'changed'
            counts[state] += 1
            print(f'{state:8} {page}')

        # The pages a given page links to (one level)
        if not args.no_follow and page in [p.lstrip('/') for p in args.pages]:
            links = Links()
            links.feed(text)
            for href in links.hrefs:
                linked = page_of(urllib.parse.urljoin(url, href))
                if linked and linked not in seen:
                    todo.append(linked)

    print(f"\n{counts['new']} new, {counts['changed']} changed, {counts['same']} the same, {counts['failed']} failed")


if __name__ == '__main__':
    main()
