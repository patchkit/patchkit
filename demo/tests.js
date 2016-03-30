import common from '../tests/common'

var tests = {
  common: common
}

// iterate the `tests`, go to the page signified by the key, and run the test function
// do this till we run out of items
export default function () {
  var testsTodo = Object.keys(tests)
  runNext()

  function runNext () {
    var next = testsTodo.shift()
    if (!next)
      return console.log('Done')
    window.location.hash = '#/'+next
    tests[next](runNext)
  }
}