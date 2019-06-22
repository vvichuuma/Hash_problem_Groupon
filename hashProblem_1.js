

var meals = [["breakfast", "pancakes with maple syrup"], ["lunch", "BLT"], ["dinner", "salmon with lemon rice"]];

//console.log(meals);

var h = {};

for(let i = 0; i < meals.length; i ++){
   
   for(let j = 0; j < ((meals[i].length) / 2); j++){
     
       h[meals[i][j]] = meals[i][j+1];
   }
  
}

console.log(h);