function runProgram(input) {
    input = input.trim().split("\n");
    let [K,N] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let max = -Infinity
    let min = Infinity
   
    MasaiMovers(K,0,0)
   
    function MasaiMovers(K,way,count){
       if(K < way){
           return;
       }
       if(K == way){
         max = Math.max(max,count)
          min = Math.min(min,count)
       }
       for(let i = 0; i < N; i++){
           MasaiMovers(K, way + arr[i], count+1)
       }
   
     } if(max!= -Infinity||min!=Infinity){
       console.log(min,max)  
   } else {
       console.log("-1")
   }
   }
   
   if (process.env.USERNAME === "USER") {
     runProgram(`3 3
     1 2 3`);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }