


// Write a method called `split_array`, with two parameters, the first being an array, and the second being an integer. The method will then create an array of other arrays, each one being the size of the indicated by the second parameter. 
// ```
// p split_array([0, 1, 2, 3, 4, 5], 2)  #=> [[0, 1], [2, 3], [4, 5]]
// p split_array([0, 1, 2, 3, 4, 5], 3)  #=> [[0, 1, 2], [3, 4, 5]]



function splice(a,b){

   
  var len = a.length; 
  var time = len / b;
  var e = [];

  for (let i = 0; i < time; i++ ){
      
      var arr = a.splice(b);
      e.push(a);
       //console.log(e);
       //console.log(arr);
       a = arr;
  }


}

splice([1,2,3,4,5,6] , 3)




