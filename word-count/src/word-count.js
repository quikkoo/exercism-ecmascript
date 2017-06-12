'use strict'

const XRegExp = require('xregexp')

const PATTERN = XRegExp('[\']?[^\'a-zA-Z0-9]+[\']?')

function getCount(result, word) {
  return Number.isInteger(result[word]) && result[word] || 0
}

class WordCount {

  static calculate(phrase) {
    return XRegExp.split(phrase.toLowerCase(), PATTERN)
      .reduce((acc, word) => {
        if (word != '') {
          let count = getCount(acc, word) + 1
          acc[word] = count
        }

        return acc
      }, {})
  }
}

module.exports = WordCount
