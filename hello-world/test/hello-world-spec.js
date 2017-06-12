'use strict'

const expect = require('chai').expect
const HelloWorld = require('../src/hello-world')

suite('HelloWorld', () => {

  test('without name', () => {
    expect(HelloWorld.greet()).to.be.equal('Hello, World!')
  })

  test('with empty name', () => {
    expect(HelloWorld.greet('')).to.be.equal('Hello, World!')
  })

  test('with name Ecmascript', () => {
    expect(HelloWorld.greet('Ecmascript')).to.be.equal('Hello, Ecmascript!')
  })

  test('with name Exercism', () => {
    expect(HelloWorld.greet('Exercism')).to.be.equal('Hello, Exercism!')
  })

  test('with null name', () => {
    expect(() => {
      HelloWorld.greet(null)
    }).to.throw(Error)
  })
})
