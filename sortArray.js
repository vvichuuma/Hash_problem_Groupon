

//Sorting an array in JAVASCRIPT : 


function array(ar){

	var ascending = ar.sort(function(a,b) {return(a-b)})
	var descending  = ar.sort(function(a,b) {return (b-a)})

	console.log(ascending); 
	console.log(descending);

	//If you console log - It is gonna have the same output because , IT is changing the value - which is refrencing the array (ar) , which is passed in as argument.

}


array([2,3,4,10,12,14])