
var todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

// var todoId = todos.map (function(todo, i, arr) {
//   return todo.id;
// })

// console.log(todoId);

function getID() {
  return todos.map (function(todo, i, arr) {
    return todo.id;
  })
};

getID();



// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3

var arr = getID();

function getMax() {
  return Math.max.apply(null, arr);
}

getMax();



// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// var pulsTodo = todos.concat({ id: 4, content: 'Test', completed: false });

// console.log(pulsTodo);

function plusTodo () {
	return [{id: 4, content: 'Anguelar', completes: false}].concat(todos);}

todos = plusTodo();


// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];


// filter 값으로 고민해보기

// var result = todos.filter(function(todo){ return todo.id !== 4;});

// console.log(result);

function getFilter () {
  return todos.filter(function(todo){
    return todo.id !== 4;
  });
}

todos = getFilter();


// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

//map
//object.assign => 3항 연산자 사용

function conversionState(){
	return todos.map(function(todo){
		return todo.id === 3 ? Object.assign({}, todo, {completed: !todo.completed}) : todo})}

todos = conversionState();

//distructuring(ES6)

// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ];

function convert() {
  return todos.map(function(todo){
    return Object.assign({}, todo, {completed: true});
  })
}

todos = convert();


// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라

// 필터값 이용 . length 

function getDone() {
  return todos.filter(function(todo){
    return todo.completed === true;
  })
  var todoDone = todos.length;
}

getDone();



