'use strict'

function isSame(lhs, rhs) {
  return lhs == rhs
}

function hasSameSize(lhs, rhs) {
  return lhs.length == rhs.length
}

function hasSameElements(lhs, rhs) {
  let result = true
  for (let i = 0; result && i < lhs.length; i++) {
    result = lhs[i] == rhs[i]
  }

  return result
}

class Anagram {

  constructor(subject) {
    this.subject = subject
  }

  matches(candidates) {
    const lsub = this.subject.toLowerCase()
    const ssub = lsub.split('').sort()

    return candidates.filter((candidate) => {
      const lcan = candidate.toLowerCase()
      const scan = lcan.split('').sort()

      return hasSameSize(lsub, lcan) && !isSame(lsub, lcan) && hasSameElements(ssub, scan)
    })
  }
}

module.exports = Anagram
