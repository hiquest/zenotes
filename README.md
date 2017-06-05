# zenotes

Clean, distraction-free notes for Chrome. [Install it here](https://chrome.google.com/webstore/detail/zenotes/fphoofpcklpbccekhlcmhagpbddbkfdp?authuser=1).

![Zenotes](https://www.dropbox.com/s/pjdvyxuagpd47u7/zenotes-screen.png?dl=1)

## What is that?

This is a simple Chrome extension I made to be able to store my notes somewhere. Is is heavily inspired by apps like [Simplenote](https://simplenote.com/).

## What it's made of

- Built with [Vue.js](https://vuejs.org/)
- It is using `chrome.storage.sync` API to store data (which means the data is synced between all devices)
- [Milligram](https://milligram.github.io/) for basic styling
- [sparksuite/simplemde-markdown-editor](https://github.com/sparksuite/simplemde-markdown-editor) for Markdown support

## How to Build?

```bash
  yarn start
```
