var lang = require('./index')
  , is_forloop = lang('for')
  , is_while = lang('while + do-while')
  , is_ident = lang('id:contains(y)') 
  , results = {}

var find_test = lang('for > .test')
var generic_id_test = lang("#id");
var function_id_test = lang("function#id");

var falafel = require('falafel')

function test() {
  function id() {
    var variable = "derp";
  }

  id();

  this.that = "derp";

  var y = 3
    , z

  for(var i = 0; i < len; ++i) {
    
  }

  for(;0;);

  while(0);

  do { } while(0);
}


falafel(test+'', function(node) {
  if(is_forloop(node)) {
    (results.is_forloop = results.is_forloop || []).push(node.source())
  }
  if(is_while(node)) {
    (results.is_while = results.is_while || []).push(node.source())
  }
  if(is_ident(node)) {
    (results.is_ident = results.is_ident || []).push(node.source())
  }
  if(find_test(node)) {
    console.log(node, '---!')
  }

  if(generic_id_test(node)) {
    console.log("gerneric id");
  }
  if(function_id_test(node)) {
    console.log("function id");
  }
  if(lang("#variable")(node)) {
    console.log("generic variable");
  }

  if(lang("call#id")(node)) {
    console.log("call to function id");
  }

  if(lang("lookup#that")(node)) {
    console.log("accessing propery that");
  }

  if(lang("for #i")(node)) {
    console.log("variable i in for-loop");
  }

  if(lang("#id #variable")(node)) {
    console.log("variable in function");
  }
})

console.log(results)
