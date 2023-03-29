# Spelling Bee Hints userscript

This userscript replaces the hint panel in NY Times Spelling Bee puzzle with a more informative
version.  

<img width="1107" alt="Spelling Bee Screenshot" src="https://user-images.githubusercontent.com/33412/228452631-5a1515d3-3415-42d0-bb49-44b380f6bb05.png">

# Install

This userscript only works on the browser-based Spelling Bee, not the mobile app.  I've tested it in current versions of Chrome and Firefox on 28 Mar 2023.

This script requires [Tampermonkey](https://www.tampermonkey.net/) or an equivalent userscript installer/runner.

To install, click this link: https://github.com/cdaddr/spelling-bee-hints/raw/main/spelling-bee-hints.user.js and Tampermonkey should provide an `Install` button.  Click it.  That's all.  (This is the "Raw" link Github provides for `spelling-bee-hints.user.js` in this repo.)

The next time you visit Spelling Bee in browser, it should replace the usual hint box with my custom version.  

# Features

* Hints are hidden by default.  Click the `Hints` button to toggle them on and off.
* Displays most of the hint info you'd normally see on SB's "Today's Hints" page, without having to click back and forth between the hints page and puzzle.
    * This saves you from having to click back and forth between the hints page and the puzzle, or having to count up how many words of each length and/or prefix are remaining.
* Displays a cute bee emoji once you've won 🐝

Changes by NYT to the HTML/JS of Spelling Bee are highly likely to break this script at some time in the future if I stop maintaining it.
