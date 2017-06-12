'use strict'

class ETL {

  static transform(data) {
    return Object.keys(data).reduce((acc, key) => {
      return data[key].reduce((acc, value) => {
        acc[value.toLowerCase()] = Number.parseInt(key)
        return acc
      }, acc)
    }, {})
  }
}

module.exports = ETL
