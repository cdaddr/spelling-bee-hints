// ==UserScript==
// @name         Spelling Bee Hints
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add hints to NYTimes Spelling Bee
// @author       Brian Carper
// @match        https://www.nytimes.com/puzzles/spelling-bee*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nytimes.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

// window.gameData is provided by SB's JS

(function() {
    'use strict';
    window.addEventListener("load", (e) => {
        const controls = document.getElementsByClassName('sb-controls-box')[0];
        const hints = document.createElement('div');
        const hintLetters = document.createElement('div');
        const progressBox = document.getElementsByClassName('sb-progress-box')[0];
        hints.style = 'column-count: 3; font-family: monospace; padding-left: 2rem; padding-right: 2rem;';
        hintLetters.style = 'font-family: monospace; background: #f7da21; padding: 1rem; font-weight: bold; border-radius: 1rem;';

        document.getElementById('pz-game-root').prepend(progressBox);
        progressBox.style.setProperty('display', 'relative');
        document.getElementsByClassName('sb-status-box')[0].style = 'display: none';

        const pangrams = new Set(window.gameData.today.pangrams.map(a => a.toUpperCase()));
        const uppercaseWords = window.gameData.today.answers.map(a => a.toUpperCase())

        controls.appendChild(hints);
        controls.appendChild(hintLetters);
        controls.style.setProperty('padding-top', '60px');

        let updateHints = function(hints) {
            hints.innerHTML = null;
            hintLetters.innerHTML = '';
            let starts = {};

            const alreadyKnown = new Set([...document.getElementsByClassName('sb-anagram')].map(e => e.innerHTML.toUpperCase()));
            const sortedWords = [...uppercaseWords.filter(a => alreadyKnown.has(a)),
                                 ...uppercaseWords.filter(a => !alreadyKnown.has(a)).sort((a,b) => a[0].localeCompare(b[0]) || (a.length - b.length))]
            sortedWords.forEach(a => {
                let el = document.createElement('span');
                el.style.setProperty('white-space', 'nowrap');
                el.style.setProperty('line-height', '1.2rem');
                hints.appendChild(el);
                if (alreadyKnown.has(a)) {
                    el.innerHTML += a + '<br>';
                    if (pangrams.has(a)) {
                        el.style.setProperty('color', 'green');
                    } else {
                        el.style.setProperty('color', 'gray');
                    }
                } else {
                    el.innerHTML += a[0] + '*'.repeat(a.length-1) + ' (' + a.length + ')<br>';
                    el.style.setProperty('color', 'black');
                    starts[a.slice(0,2)] ||= 0;
                    starts[a.slice(0,2)] += 1;
                }
            });
            hintLetters.innerHTML += '<div style="padding-bottom: 1rem">Words found: ' + alreadyKnown.size + ' of ' + window.gameData.today.answers.length + '</div>';
            hintLetters.innerHTML += '<div style="padding-bottom: 1rem"> ' + window.gameData.today.pangrams.length + ' pangrams<br></div>';

            hintLetters.innerHTML += Object.keys(starts).sort().map(k => '<div style="white-space: nowrap">' + k + ': ' + starts[k] + '</div>').join('');
            if(alreadyKnown.size === window.gameData.today.answers.length) {
                hintLetters.innerHTML += '<span style="font-size: 2.5rem;">👑🐝 ❤️</span>';
            }
        }

        document.addEventListener("keyup", function(e) {
            updateHints(hints);
        });
        updateHints(hints);
    }, false);
})();
