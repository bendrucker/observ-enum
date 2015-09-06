'use strict'

var test = require('tape')
var Enum = require('./')

test(function (t) {
  var Team = Enum(['Yankees'])

  t.throws(Team.bind(null, 'Red Sox'))
  t.doesNotThrow(Team.bind(null, 'Yankees'))

  var team = Team()
  t.notOk(team())
  t.doesNotThrow(team.set.bind(null, 'Yankees'))
  t.equal(team(), 'Yankees')
  t.throws(team.set.bind(null, 'Red Sox'))

  t.end()
})
