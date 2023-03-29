# Spelling Bee Hints userscript

This userscript replaces the hint panel in NY Times Spelling Bee puzzle with a more informative
version.  

<img width="1107" alt="Spelling Bee Screenshot" src="https://user-images.githubusercontent.com/33412/228452631-5a1515d3-3415-42d0-bb49-44b380f6bb05.png">

# Install

This has been tested with Tampermonkey — tested in Firefox and Chrome on 15 Mar 2023.

To install, click this link: https://github.com/cdaddr/spelling-bee-hints/raw/main/spelling-bee-hints.user.js and Tampermonkey should prompt you to install the user script.  That's all.  The next time you visit Spelling Bee in browser, it should replace the hint box with my custom version.  (This is the "Raw" link Github provides for `spelling-bee-hints.user.js` in this repo.)

# Features

* Displays most of the hint info you'd normally see on SB's "Today's Hints" page, without having to click back and forth between the hints page and puzzle, or having to count words manually to see what's left.
* Displays cute bee emoji once you've won 🐝

Changes by NYT to the HTML/JS of Spelling Bee are highly likely to break this script at some time in the future if I stop maintaining it.
