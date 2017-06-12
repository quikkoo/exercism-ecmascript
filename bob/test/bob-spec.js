'use strict'

const expect = require('chai').expect
const Bob = require('../src/bob')

describe('Bob', () => {

  const bob = new Bob()

  it('should respond to a statement', () => {
    const response = bob.hey('Tom-ay-to, tom-aaaah-to.')
    expect(response).to.be.equal('Whatever.')
  })

  it('should respond to shouting', () => {
    const response = bob.hey('WATCH OUT!')
    expect(response).to.be.equal('Whoa, chill out!')
  })

  it('should respond to questions', () => {
    const response = bob.hey('Does this cryogenic chamber make me look fat?')
    expect(response).to.be.equal('Sure.')
  })

  it('should respond to questions ending with numbers', () => {
    const response = bob.hey('You are, what, like 15?')
    expect(response).to.be.equal('Sure.')
  })

  it('should respond to forceful talking', () => {
    const response = bob.hey("Let's go make out behind the gym!")
    expect(response).to.be.equal('Whatever.')
  })

  it('should respond to acronyms in regular speech', () => {
    const response = bob.hey("It's OK if you don't want to go to the DMV.")
    expect(response).to.be.equal('Whatever.')
  })

  it('should respond to forceful questions as shouting', () => {
    const response = bob.hey('WHAT THE HELL WERE YOU THINKING?')
    expect(response).to.be.equal('Whoa, chill out!')
  })

  it('should respond to shouting with special characters', () => {
    const response = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!')
    expect(response).to.be.equal('Whoa, chill out!')
  })

  it('should respond to numbers when shouting', () => {
    const response = bob.hey('1, 2, 3 GO!')
    expect(response).to.be.equal('Whoa, chill out!')
  })

  it('should respond to numbers as speech', () => {
    const response = bob.hey('1, 2, 3')
    expect(response).to.be.equal('Whatever.')
  })

  it('should respond to questions with only numbers', () => {
    const response = bob.hey('4?')
    expect(response).to.be.equal('Sure.')
  })

  it('should respond to shouting with no exclamation mark', () => {
    const response = bob.hey('I HATE YOU')
    expect(response).to.be.equal('Whoa, chill out!')
  })

  it('should respond to statement containing question mark', () => {
    const response = bob.hey('Ending with a ? means a question.')
    expect(response).to.be.equal('Whatever.')
  })

  it('should respond to prattling on', () => {
    const response = bob.hey('Wait! Hang on.  Are you going to be OK?')
    expect(response).to.be.equal('Sure.')
  })

  it('should respond to silence', () => {
    const response = bob.hey('')
    expect(response).to.be.equal('Fine. Be that way!')
  })

   it('should respond to prolonged silence', () => {
    const response = bob.hey('          ')
    expect(response).to.be.equal('Fine. Be that way!')
  })

   it('should respond to others blank characters', () => {
    const response = bob.hey('\n\r \t\v\u00A0\u2002')
    expect(response).to.be.equal('Fine. Be that way!')
  })

  it('should respond to multiple line questions', () => {
    const response = bob.hey('\nDoes this cryogenic chamber make me look fat?\nno')
    expect(response).to.be.equal('Whatever.')
  })

  it('should respond to non-letters with question', () => {
    const response = bob.hey(':) ?')
    expect(response).to.be.equal('Sure.')
  })
})
