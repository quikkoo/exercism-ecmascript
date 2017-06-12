'use strict'

const expect = require('chai').expect
const WordCount = require('../src/word-count')

describe('WordCount', () => {

  it('should count one word', () => {
    const phrase = 'word'
    const counts = { word: 1 }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should count one of each', () => {
    const phrase = 'one of each'
    const counts = {
      one: 1,
      of: 1,
      each: 1
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should count multiple occurrences', () => {
    const phrase = 'one fish two fish red fish blue fish'
    const counts = {
      one: 1,
      fish: 4,
      two: 1,
      red: 1,
      blue: 1
      
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should count everything just once', () => {
    const phrase = 'all the kings horses and all the kings men'
    const counts = {
      all: 2,
      the: 2,
      kings: 2,
      horses: 1,
      and: 1,
      men: 1
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should ignore punctuation', () => {
    const phrase = 'car : carpet as java : javascript!!&@$%^&'
    const counts = {
      car: 1,
      carpet: 1,
      as: 1,
      java: 1,
      javascript: 1
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should handles cramped lists', () => {
    const phrase = 'one,two,three'
    const counts = {
      one: 1,
      two: 1,
      three: 1
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should includes numbers', () => {
    const phrase = 'testing 1 2 testing'
    const counts = {
      testing: 2,
      1: 1,
      2: 1
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should normalizes to lowercase', () => {
    const phrase = 'go Go GO'
    const counts = { go: 3 }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should allow apostrophes', () => {
    const phrase = 'First: don\'t laugh. Then: don\'t cry.'
    const counts = {
      'first': 1,
      'don\'t': 2,
      'laugh': 1,
      'then': 1,
      'cry': 1,
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should treat symbols as separators', () => {
    const phrase = 'hey,my_spacebar_is_broken.'
    const counts = {
      hey: 1,
      my: 1,
      spacebar: 1,
      is: 1,
      broken: 1,
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should counts words with quotations', () => {
    const phrase = 'Joe can\'t tell between \'large\' and large.'
    const counts = {
      'joe': 1,
      'can\'t': 1,
      'tell': 1,
      'between': 1,
      'large': 2,
      'and': 1
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })

  it('should handles properties that exist on object\'s prototype', () => {
    const phrase = 'Reserved words like constructor and toString ok?'
    const counts = {
      reserved: 1,
      words: 1,
      like: 1,
      constructor: 1,
      and: 1,
      tostring: 1,
      ok: 1
    }

    expect(WordCount.calculate(phrase)).to.be.eql(counts)
  })
})
