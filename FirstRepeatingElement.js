
// Given an array of integers, find the first repeating element in it. For example if given array is [10, 5, 3, 4, 3, 5, 6] then your program should return 3. (This is a tough problem!)

var array = [10,7,1,2,5,3,7,4,3,5,6]; 

console.log(array);

var h = {}; 

for(let i = 0 ; i < array.length; i++){

    if(h[array[i]]){
      h[array[i]]++;
    }else{
      h[array[i]] = 1;
    }

}

console.log(h);

var a = []

for(let i = 0; i < array.length; i++){
   
   if(h[array[i]] > 1){
      a.push(array[i]);
   }

}

console.log(a[0]);