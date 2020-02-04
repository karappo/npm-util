import test from 'ava'
import { JSDOM } from "jsdom"
import { isValidColor } from '../index'

test.beforeEach(() => {
  global.document = new JSDOM().window.document
})

// Valid
const valids = ['red', '#ff0000', 'rgb(123, 0, 100)', 'rgba(123, 0, 125, 0.4)']
valids.forEach( val => test(val, t => t.true(isValidColor(val))))

// Invalid
const invalids = ['nijiiro', 'rgb(123, 0)', 'rgba(-10, 0, 0, 0.4)', 'rgba(1000, 0, 0, 0.4, 0)']
invalids.forEach( val => test(val, t => t.false(isValidColor(val))))
