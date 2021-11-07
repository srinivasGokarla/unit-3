function runProgram(input) {
  input = input.trim().split("\n")
  var N = Number(input[0])
  var arr = input[1].trim().split(" ").map(Number)
  console.log(N,arr)
  console.log(oddSubset(N, arr))
}
function oddSubset(N, arr) {
    var result = 0;
   for(var i = 0; i < N; i++) {
       var valu  = 0; 
       for(var j = i; j < N; j++) {
           valu = valu + arr[j]
           if(valu % 2 != 0 ) {
           result++;
           }
       }

   }
   return result
}

if (process.env.USERNAME === "USER") {
  runProgram(`2
  2 4`);
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
