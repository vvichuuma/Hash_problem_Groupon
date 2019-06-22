var run = ["Code" , "programmer", "Code", "hacker", "hacker", "engine", "engine", "inventor", "inventor", "rockstar"]; 
console.log(run);

var h = {}; 

for(let i = 0; i < run.length; i++){
    
    if(h[run[i]]){
      h[run[i]]++
    }else{
      h[run[i]] = 1;
    }
   
}

console.log(h);

var arr = [];

for(let i = 0; i < run.length; i++){
   
   if(h[run[i]] === 1 ){
     arr.push(run[i]);
   }

}

console.log(arr);
