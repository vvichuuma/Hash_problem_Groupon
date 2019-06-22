//Given an array of unsorted integers, find the largest two numbers. First try to solve the problem by sorting the array. Then try to solve the problem without sorting the array. (This is a tough problem!)

var array = [4,5,6,99,10,120,1,89,3]; 

var arr = []

for(let j = 0; j < 2; j++){
  var c = 0; 

  for(let i = 0; i < array.length; i++){

    if(c < array[i]){
      c = array[i];
    }

  }

  arr.push(c); 

  array.splice(array.indexOf(c),1);
}

console.log(arr);