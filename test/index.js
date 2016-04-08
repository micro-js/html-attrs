/**
 * Imports
 */

var htmlAttrs = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(t.abbr)
  t.notOk(t.asdf)

  t.end()
})
