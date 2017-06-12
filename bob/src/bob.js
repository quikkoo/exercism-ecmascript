'use strict'

const XRegExp = require('xregexp')

const fine = XRegExp('^[\\s\\v\\u00A0\\u2002]*$')
const whoa = XRegExp('^[^\\p{Ll}]*[A-Z][^\\p{Ll}]*$')
const sure = XRegExp('^.*\\?[\\s\\v]*$')

class Bob {

  hey(question) {
    if (fine.test(question)) {
      return 'Fine. Be that way!'
    }
    if (whoa.test(question)) {
      return 'Whoa, chill out!'
    }
    if (sure.test(question)) {
      return 'Sure.'
    }
    return 'Whatever.'
  }
}

module.exports = Bob
