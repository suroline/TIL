// Math property: static property & method

/*
1. Math Property
 */

 // 1-1. Math.PI

 Math.PI; // 3.141592653589793

 /*
 2. Math Method
 */

 // 2-1. Math.abs(x: number): number => return absolute value

 Math.abs(-1); //1
 Math.abs('-1'); //1
 Math.abs(''); //0
 Math.abs([]); //0
 Math.abs(null); //0

 Math.abs(undefined); //NaN
 Math.abs({}); //NaN
 Math.abs('string'); //NaN
 Math.abs(); //NaN

 // 2-2. Math.round(x: number): number 

 Math.round(10.49); //10
 Math.round(10.5); //11
 Math.round(-10.5); //-10
 Math.round(-10.6); //-11

 // 2-3. Math.sqrt(x: number): number => return square root value

 Math.sqrt(9); //3
 Math.sqrt(-9); //NaN
 Math.sqrt(2); //1.4142135623730951
 Math.sqrt(1); //1
 Math.sqrt(0); //0

 // 2-4. Math.ceil(x: number): number

 Math.ceil(1.4); //2
 Math.ceil(-1.4); //-1

 // 2-5. Math.floor(x: number): number

 Math.floor(1.9); //1
 Math.floor(-9.1); //-10

 //2-6. Math.random(): number

 console.log(Math.random()); 

 var random = Math.floor((Math.random() * 10)+1);
 console.log(random);

 var random01 = Math.ceil(Math.random()*10);
 console.log(random01);

 //2-7. Math.max(...vaules: number[]): number

 Math.max(1,2,3); //3

 var arr = [1,2,3];
 var max = Math.max.apply(null, arr); //3

 var max = Math.max(...arr); //3

 //2-8. Math.min(...vaules: number[]): number

 Math.min(1, 2, 3); //1

 var min = Math.min.apply(null, arr); //1
 var min = Math.min(...arr); //1

 