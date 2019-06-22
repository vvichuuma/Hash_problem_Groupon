var people = [
  {name: "Saron", age: 34},
  {name: "Majora", age: 28},
  {name: "Danilo", age: 45}
]

var ans = people.sort(function(a,b) {return(a.age - b.age)} );

console.log(ans);