'use strict'

const expect = require('chai').expect
const Anagram = require('../src/anagram')

describe('Anagram', () => {

  it('should detect no matches', () => {
    const detector = new Anagram('diaper')
    const anagrams = detector.matches(['hello', 'world', 'zombies', 'pants'])

    expect(anagrams).to.be.empty
  })

  it('should detect simple anagram', () => {
    const detector = new Anagram('ant')
    const anagrams = detector.matches(['tan', 'stand', 'at'])

    expect(anagrams).to.be.eql(['tan'])
  })

  it('should detect multiple anagrams', () => {
    const detector = new Anagram('master')
    const anagrams = detector.matches(['stream', 'pigeon', 'maters'])

    expect(anagrams).to.be.eql(['stream', 'maters'])
  })

  it('should not confuse different duplicates', () => {
    const detector = new Anagram('galea')
    const anagrams = detector.matches(['eagle'])

    expect(anagrams).to.be.empty
  })

  it('should not include identical words', () => {
    const detector = new Anagram('corn')
    const anagrams = detector.matches(['corn', 'dark', 'Corn', 'rank', 'CORN', 'cron', 'park'])

    expect(anagrams).to.be.eql(['cron'])
  })

  it('should eliminate anagram subsets', () => {
    const detector = new Anagram('good')
    const anagrams = detector.matches(['dog', 'goody'])

    expect(anagrams).to.be.empty
  })

  it('should eliminate anagrams with same checksum', () => {
    const detector = new Anagram('mass')
    const anagrams = detector.matches(['last'])

    expect(anagrams).to.be.empty
  })

  it('should detect anagram', () => {
    const detector = new Anagram('listen')
    const anagrams = detector.matches(['enlists', 'google', 'inlets', 'banana'])

    expect(anagrams).to.be.eql(['inlets'])
  })

  it('should detect more multiple anagrams', () => {
    const detector = new Anagram('allergy')
    const anagrams = detector.matches(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading'])

    expect(anagrams).to.be.eql(['gallery', 'regally', 'largely'])
  })

  it('should treat subject anagrams as case insensitive', () => {
    const detector = new Anagram('Orchestra')
    const anagrams = detector.matches(['cashregister', 'carthorse', 'radishes'])

    expect(anagrams).to.be.eql(['carthorse'])
  })

  it('should treat candidates anagrams as case insensitive', () => {
    const detector = new Anagram('Orchestra')
    const anagrams = detector.matches(['Cashregister', 'Carthorse', 'Radishes'])

    expect(anagrams).to.be.eql(['Carthorse'])
  })
})
