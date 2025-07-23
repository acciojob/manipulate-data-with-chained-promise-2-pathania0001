//your JS code here. If required.
const output = document.getElementById("output")

const  printArray  = (arr) => {
	return new Promise((resolve,reject)=>{
		console.log("in promise")
		setTimeout(()=>{
		resolve(arr)
		},3000)
		
	})
}
    printArray([1,2,3,4,5,6])
	.then((arr)=>{
		 const res = arr.filter( x => x % 2 === 0 )
		 setTimeout(()=>{
		  output.append(res);	 
		 },1000)
		return (res);
	}).then((arr)=>{
		  const final = arr.map( x => x*2 )
		setTimeout(()=>{
          output.innerText = "";
		  output.append(final);
		},2000)
	}).catch((error)=>{
		console.log(error)
	})



	
