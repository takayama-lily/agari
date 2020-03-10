'use strict'
const assert = require('assert')
const agari = require('./index')
const testCases = [
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

assert.deepStrictEqual(agari.check(testCases[0]), false)
assert.deepStrictEqual(agari.check(testCases[1]), false)
assert.deepStrictEqual(agari.check(testCases[2]), true)
assert.deepStrictEqual(agari.check(testCases[3]), true)

assert.deepStrictEqual(agari.check7(testCases[0]), true)
assert.deepStrictEqual(agari.check7(testCases[1]), false)
assert.deepStrictEqual(agari.check7(testCases[2]), false)
assert.deepStrictEqual(agari.check7(testCases[3]), true)

assert.deepStrictEqual(agari.check13(testCases[0]), false)
assert.deepStrictEqual(agari.check13(testCases[1]), true)
assert.deepStrictEqual(agari.check13(testCases[0]), false)
assert.deepStrictEqual(agari.check13(testCases[1]), true)

assert.deepStrictEqual(agari.checkAll(testCases[0]), true)
assert.deepStrictEqual(agari.checkAll(testCases[1]), true)
assert.deepStrictEqual(agari.checkAll(testCases[0]), true)
assert.deepStrictEqual(agari.checkAll(testCases[1]), true)

assert.deepStrictEqual(agari(testCases[0]), [])
assert.deepStrictEqual(agari(testCases[1]), [])
assert.deepStrictEqual(agari(testCases[2]), [ [ '3s',
[ '6m', '7m', '8m' ],
[ '6m', '7m', '8m' ],
[ '6z' ],
[ '7p', '8p', '9p' ] ] ])

assert.deepStrictEqual(agari(testCases[3]), [ [ '1m',
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
