---
title: Introducting the First Release Candidate
description: >-
  The first Decap CMS release candidate is available for testing. It ships with updated Slate, Webpack, Cypress, and Typescript, while React 18 is still in the works.
date: 2023-07-28T08:00:00.000Z
author: Anže Demšar
twitter_image: /img/preview-link-published.png
---
The RC is available at [](). Please test a lot and report any new issues you find, and comment on the issues that are solved with this release.

The efforts to bring the project up to date are stable are ready to be tested by the community. From now on we are comfortable with merging all open and new pull requests.

## Done with this release

Tests are updated, working, and passing.

Dependency updates:
- Slate 0.47 → 0.91
- Webpack 4 → 5
- add Tostify
- Cypress 9 → 12
- Typescript 3 → 4

## Updates planned for next releases

There is still a lot of work left to be done and some work that was actually done, but is not included at this point due to instability that React 18 brings to the whole project (some more context below). These changes will be graduatly introduced as separate PRs so they can be included and tested step by step.

### react 16 → 18

For the most part, the project is stable on React 18, but there are some new bugs and caveats that made us decide to postpone this. There will be a draft PR containing the changes, but it might not be stable until some other PRs are resolved.

### react-sortable-hoc → @dnd-kit/sortable

With react 18, the sortable library introduces some bugs that makes it unusable. Also the library is unmaintained (clauderic/react-sortable-hoc#838). Transition to dnd-kit is already done for galleries, but might be more problematic in relation widget where it is tightly connected to react-select.

### lerna 4 → 6

Lerna 6 now uses nx task runner and a lot of scripts for running, building and testing the project have to be adapted. This is already functioning and will become a PR, but needs some testing and consideration. Maybe we could move away from lerna and let yarn do all the work (or most of it).

### uuid 3 → 8

This is not really trivial but still fairly simple. We did this along the way so there is no point in throwing it away, but can easily be it’s own PR. Requires changes in a lot of files and some mocks.

### release pipeline

The legacy release pipeline is fairly complicated and possibly outdated, so for now we are deploying to NPM manually.
