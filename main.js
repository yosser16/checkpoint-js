// QUESTION 1 : Reverse a String: Write a function that reverses a given string.

// function reverseString(str) {
  //  let newst = "";
  //  for (let i= str.length -1; i >= 0; i--) {
  //  newst += str[i];
  //  }
  //  return newst; }
  //  console.log(reverseString("rim")); 



 // QUESTION 2 : Count Characters: Create a function that counts the number of characters in a string.
   
//  function compter(str){
   // counter=0; 
   // for ( let i=0 ; i < str.length ; i++) {
      //  counter += 1 ; }
      //  return counter ; }
    
//console.log(compter("yoser")) 


  // QUESTION 3 : Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

 // function capital_letter(str) {
   // str = str.split(" ");

   // for (let i = 0,  x = str.length; i < x; i++) {
   //     str[i] = str[i][0].toUpperCase () + str[i].substr(1);
   // }

   // return str.join(" ");}

  
 // console.log(capital_letter("go my code "));
  

   // QUESTION 4 : Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.


    // function findmimax ( numbers ){ 
    //   let  max = numbers[0]; 
     //  let min = numbers [0];
  
     //  for ( i=1; i< numbers.length; i++){ 
    
      //  if ( numbers[i]>max){
        //    max =numbers[i] ; 
       // }
       // else if  (numbers[i]<min)  {
       //    min =numbers[i] ;  }}
    // return {max,min} ; }
  // console.log( findmimax ( [400,3,0,10,7,-1]))



   // QUESTION 5 :  Sum of Array: Create a function that calculates the sum of all elements in an array. 

   //function somme ( arr){
   // sum =0 ; 
    //for ( i=0; i< arr.length; i++){
     //   sum += arr[i] ; 
   // }
   // return sum ; }
// console.log(somme([100,50])); 

// QUESTION 6 : Filter Array: Implement a function that filters out elements from an array based on a given condition.



//function filtre (arr){  
  //  f= [] ; 
  //  for (i=0; i< arr.length ; i++){
  //      if (arr[i] !== null && arr[i]!== undefined  ){
  //      f= f+ arr[i] +'/'   ;  }
  //  } 
  //  return f ; 
 //}
//console.log(filtre ([10,undefined,20,74,null,null,103]))

// QUESTION 7 :Factorial: Write a function to calculate the factorial of a given number.

    // function factorial(n){
      //   let answer = 1;
      //   if (n == 0 || n == 1){
      //     return answer;
     //    }
      //   else if(n > 1){
      //     for(var i = n; i >= 1; i--){
      //       answer = answer * i;
       //    }
      //     return answer;
      //   }
      //   else{
      //     return "number has to be positive."
      //   }  
     //  }
     //  let n = 5;
     //  answer = factorial(n)
     //  console.log("Factorial of " + n + " : " + answer);

     // QUESTION 8 : Prime Number Check: Create a function to check if a number is prime or not.
 

      //function prime ( num ){ 
       //  if (num <= 1) return false;
       //   if (num === 2) return true; 
       //   for (let i= 2; i < num; i++) { 
       //      if (num % i === 0) {
        //         return false;
        //          }
       //          }
       //          return true;
        //        }
      //console.log (prime (307))

      // QUESTION 9 : Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

       //function fibonacci(num) {
       //  let num1 = 0;
       //  let num2 = 1;
        // let sum;
        // let i = 0;
        // for (i = 0; i < num; i++) {
        //     sum = num1 + num2;
       //      num1 = num2;
       //      num2 = sum;
       //  }
       //  return num2; }
    // console.log( fibonacci(5)) : 