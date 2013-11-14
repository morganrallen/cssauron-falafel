/* jshint asi: true, laxcomma: true, expr: true */
require("colors")
var tests = {}
var lang = require('./index')

function addTest(selector, expectance) {
  tests[selector] = expectance;
}

addTest('for', 2);
addTest('while + do-while', 1)
addTest('id:contains(y)', 1) 
addTest('for > .test', 2)

var falafel = require('falafel')

function test() {
  var y = 3
    , z

  for(var i = 0; i < len; ++i) {
    
  }

  for(;0;);

  while(0);

  do { } while(0);
}


falafel(''+test, function(node) {
  for(var selector in tests) {
    if(lang(selector)(node)) tests[selector]--;
  }
})

var fail = false;

for(var selector in tests) {
  if(tests[selector] > 0) {
    fail = true;
    console.log("%s failed %s tests", selector.red, tests[selector]);
  } else if(tests[selector] < 0) {
    fail = true;
    console.log("%s passed %s too many times", selector.red, -tests[selector]);
  }
}

if(!fail) console.log("All tests passed");
