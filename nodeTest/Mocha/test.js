/*
 * @Author: your name
 * @Date: 2020-04-25 15:27:14
 * @LastEditTime: 2020-04-25 15:44:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeTest\Mocha\test.js
 */
var lib = require('./index')
var should = require('should')
// var assert = require('assert')

describe('Math add', function() {
    describe('#add()', function() {
        it('should return 10', function() {
            // assert.equal('10', lib.add(5,5))
            lib.add(5,5).should.be.equal(10)
            should(lib.add(5,5)).be.a.Number()
        })
        // it('should return 11', function() {
        //     assert.equal('11', lib.add(5,5))
        // })
    })
})