// closure : the combination of a function and the lexical environment whitin wich that function was declared.

function outerFunc() {
  var x = 10;
  var innerFunc = function() {
    console.log(x);
  }
  innerFunc();
}

outerFunc(); //10

function closureFunc() {
  var x = 10;
  var innerClosure = function () {
    console.log(x);
  };
  return innerClosure;
}

var inner = closureFunc();
inner(); //10

