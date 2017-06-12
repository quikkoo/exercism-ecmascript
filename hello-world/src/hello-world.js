'use strict'

class HelloWorld {

  static greet(name = 'World') {
    if (name == null) {
      throw new Error()
    }
    name = name || 'World'

    return `Hello, ${name}!`
  }
}

module.exports = HelloWorld
