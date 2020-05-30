'use strict'
const assert = require('assert')
const agari = require('./index')
const test_cases = [
    [
        [2,2,0,2,0,0,2,2,2],
        [0,0,2,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
    ],
    [
        [1,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,1],
        [1,2,1,1,1,1,1]
    ],
    [
        [0,0,0,0,0,2,2,2,0],
        [0,0,0,0,0,0,1,1,1],
        [0,0,2,0,0,0,0,0,0],
        [0,0,0,0,0,3,0]
    ],
    [
        [2,2,2,2,0,0,2,2,2],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
    ]
]

assert.deepStrictEqual(agari.check(test_cases[0]), false)
assert.deepStrictEqual(agari.check(test_cases[1]), false)
assert.deepStrictEqual(agari.check(test_cases[2]), true)
assert.deepStrictEqual(agari.check(test_cases[3]), true)

assert.deepStrictEqual(agari.check7(test_cases[0]), true)
assert.deepStrictEqual(agari.check7(test_cases[1]), false)
assert.deepStrictEqual(agari.check7(test_cases[2]), false)
assert.deepStrictEqual(agari.check7(test_cases[3]), true)

assert.deepStrictEqual(agari.check13(test_cases[0]), false)
assert.deepStrictEqual(agari.check13(test_cases[1]), true)
assert.deepStrictEqual(agari.check13(test_cases[0]), false)
assert.deepStrictEqual(agari.check13(test_cases[1]), true)

assert.deepStrictEqual(agari.checkAll(test_cases[0]), true)
assert.deepStrictEqual(agari.checkAll(test_cases[1]), true)
assert.deepStrictEqual(agari.checkAll(test_cases[0]), true)
assert.deepStrictEqual(agari.checkAll(test_cases[1]), true)

assert.deepStrictEqual(agari(test_cases[0]), [])
assert.deepStrictEqual(agari(test_cases[1]), [])
assert.deepStrictEqual(agari(test_cases[2]), [ [ '3s',
[ '6m', '7m', '8m' ],
[ '6m', '7m', '8m' ],
[ '6z' ],
[ '7p', '8p', '9p' ] ] ])

assert.deepStrictEqual(agari(test_cases[3]), [ [ '1m',
[ '2m', '3m', '4m' ],
[ '2m', '3m', '4m' ],
[ '7m', '8m', '9m' ],
[ '7m', '8m', '9m' ] ],
[ [ '1m', '2m', '3m' ],
[ '1m', '2m', '3m' ],
'4m',
[ '7m', '8m', '9m' ],
[ '7m', '8m', '9m' ] ] ])

assert.deepStrictEqual(agari([
    [0,0,0,0,0,2,2,2,2],
    [0,0,0,0,0,0,1,1,1],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,3,0]
]), [ [ '6m',
[ '6z' ],
[ '7m', '8m', '9m' ],
[ '7m', '8m', '9m' ],
[ '7p', '8p', '9p' ] ],
[ [ '6m', '7m', '8m' ],
[ '6m', '7m', '8m' ],
[ '6z' ],
[ '7p', '8p', '9p' ],
'9m' ] ])

assert.deepStrictEqual(agari([
    [4,4,4,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]), [ [ '1m',
[ '1m', '2m', '3m' ],
[ '1m', '2m', '3m' ],
[ '2m', '3m', '4m' ],
[ '2m', '3m', '4m' ] ],
[ [ '1m' ], [ '1m', '2m', '3m' ], [ '2m' ], [ '3m' ], '4m' ],
[ [ '1m', '2m', '3m' ],
[ '1m', '2m', '3m' ],
[ '1m', '2m', '3m' ],
[ '1m', '2m', '3m' ],
'4m' ] ])

assert.deepStrictEqual(agari([
    [3,1,1,3,0,0,0,0,0],
    [3,0,0,0,0,0,0,0,0],
    [3,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]), [ [ '1m', [ '1m', '2m', '3m' ], [ '1p' ], [ '1s' ], [ '4m' ] ],
[ [ '1m' ], [ '1p' ], [ '1s' ], [ '2m', '3m', '4m' ], '4m' ] ])

assert.deepStrictEqual(agari([
    [0,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]), [ [ '2m',
[ '3m', '4m', '5m' ],
[ '3m', '4m', '5m' ],
[ '6m', '7m', '8m' ],
[ '6m', '7m', '8m' ] ],
[ [ '2m', '3m', '4m' ],
[ '2m', '3m', '4m' ],
'5m',
[ '6m', '7m', '8m' ],
[ '6m', '7m', '8m' ] ],
[ [ '2m', '3m', '4m' ],
[ '2m', '3m', '4m' ],
[ '5m', '6m', '7m' ],
[ '5m', '6m', '7m' ],
'8m' ] ])

console.log('Test OK!')
