/* Code Sandboxing */
function construct(constructor, args) {
  function F() {
      return constructor.apply(this, args);
  }
  F.prototype = constructor.prototype;
  return new F();
}
// Sanboxer
function sandboxcode(string, inject) {
  "use strict";
  var globals = [];
  for (var i in global) {
    // <--REMOVE THIS CONDITION
    if (i != "console")
    // REMOVE THIS CONDITION -->
    globals.push(i);
  }
  globals.push('"use strict";\n'+string);
  return construct(Function, globals).apply(inject ? inject : {});
}

/* AsciiScript executor */
var AsciiScript = {
        exec: function(code, callback) {
                var result = "";
                var int = 0;
                var tokens = code.split('-');
            
                tokens.forEach(function(entry) {
                    int = int + 1;
                    var character = String.fromCharCode(parseInt(entry));
                    result = result + character;
                    if (int == tokens.length) {
                        sandboxcode(result);
                    }
            })
        }
}

AsciiScript.exec('99-111-110-115-111-108-101-46-108-111-103-40-39-121-101-115-39-41', function(a){
  console.log(a);
})
