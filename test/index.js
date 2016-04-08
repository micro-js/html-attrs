/**
 * Imports
 */

var htmlAttrs = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(htmlAttrs.abbr)
  t.equal(htmlAttrs.asdf, undefined)

  t.end()
})
