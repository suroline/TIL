// DOM : Document Object Model _ Browser operate DOM after loading  and parsing HTML, XML, SVG 

// DOM Query

/*
1. choose one element node
1-1. document.getElementById(id)
*/

var elem = document.getElementById('one');
elem.className = 'blue';

/*
1-2. document.querySelector(cssSelector) 
*/

var elem = document.querySelector('li.red');
elem.className = 'blue';

/*
2. choose multiple element node
2-1. document.getElementsByName(class) / document.getElementsByTagName(tagName) : returen HTMLCollection (live)
*/

var elems = document.getElementsByClassName('red');

for (var i = 0; i < elems.length; i++) {
  elems[i].className = 'blue';
}

var elems = document.getElementsByClassName('red');

for (var i = elems.length - 1; i >= 0; i--) {
  elems[i].className = 'blue';
}

var elems = document.getElementsByClassName('red');

var arr = [].slice.call(elems);
console.log(arr);

for (var i = 0; arr.length > 0; i ++) {
  arr[i].className = 'blue';
}

/*
2-2. dpcument.querySelectorAll(cssSelector)
*/

var elems = document.querySelectorAll('.red');
for (var i = 0; i < elems.length; i++) {
  elems[i].className = 'blue';
}


/*
DOM Traversing
*/

/*
3-1. parentNode
*/

var elem = document.querySelector('#two');

var parentNode = elem.parentNode;
parentNode.className = 'blue';

/*
3-2. hasChildNodes, childNodes
*/

var elems = document.querySelector('ul');

console.log(elems); // ul

if(elems.hasChildNodes()){
  console.log(elems.childNoes); // NodeList(9) [text, li#one.red, text, li#two.red, text, li#three.red, text, li#four, text] 
}

elems.childNoes[1].className = 'blue';

/*
3-3. firstChild, lastChild, nextSibling, previousSibling
*/

elems.firstChild.nextSibling.className = 'blue';
elems.lastChild.previousSibling.className = 'blue';


/*
DOM Manipulation
*/

/*
4-1. text Node access & modify
- nodeName
- nodeType
- nodeValue
*/

var one = document.getElementById('one');
console.log(one) // HTML LI Element: li#one.red
console.log(one.nodeName); // LI
console.log(one.nodeType); // 1: Element node

var textNode = one.firstChild;
console.log(textNode.nodeName); // #Text
console.log(textNode.nodeType); // 3: text node
console.log(textNode.nodeValue); // Seoul

textNode.nodeValue = 'Pusan'; 
console.log(textNode.nodeValue); // Pusan


/*
4-2. attribute Node access & modify
- className
- id
- hasAttribute
- getAttribute
- setAttribute
- removeAttribute
*/

var elems = document.querySelectorAll('li');

for (var i = o; i < elems.length; i++) {
  if (elems[i].className === 'red') {
    elems[i].className = 'blue';
  }
}

var heading = document.querySelector('h1');
console.dir(heading); //HTMLHeadingElement: h1
console.log(heading.firstChild.nodeValue); // Cities

heading.id = 'heading';
console.log(heading.id); //heading

var four = document.getElementById('four');

if (!four.hasAttribute('class')) {
  four.setAttribute('class', 'blue');
} else {
  four.className += ' blue';
}
console.log (four.getAttribute('class')); //blue

four.removeAttribute('class');
console.log(four.hasAttribute('class')); //flase

/*
4-3. HTML contents manipulation
- textContent
- innerHTML
- insertAdjacentHTML(position, string)
*/

var ul = document.getElementById('ul');
console.log(ul.textContent); // Seoul, London, NY, Tokyo

var one = document.getElementById('one');
console.log(one.textContent); // Seoul

one.textContent += ', Korea';
console.log(one.textContent); // Seoul, Korea

var ul = document.getElementById('ul');
console.log(ul.innerHTML); // Seoul, London, NY, Tokyo

var one = document.getElementById('one');
console.log('one'); // Seoul

one.innerHTML += '<em class="blue">, Korea</em>';
console.log(one.innerHTML); // Seoul <em class="blue">, Korea</em>

var one = document.getElementById('one');
one.insertAdjacentHTML('beforeend', '<em class="blue">, Korea</em>');

/*
style
- inline style create
*/

var four = document.getElementById('four');
four.style.color = 'blue';
four.style.fontSize = '2em';
