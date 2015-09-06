'use strict'

var assertIn = require('assert-in')
var Observ = require('observ')

module.exports = Enum

function Enum (values) {
  var assertEnumerated = assertIn(values)

  return ObservEnum

  function ObservEnum (initial) {
    assertAllowed(initial)

    var observable = Observ(initial)
    var _set = observable.set
    observable.set = set

    return observable

    function set (value) {
      assertAllowed(value)
      _set(value)
    }
  }

  function assertAllowed (value) {
    if (value != null) assertEnumerated(value)
  }
}
