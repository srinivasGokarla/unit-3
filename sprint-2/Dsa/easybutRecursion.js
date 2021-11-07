function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i <testcases; i++){
        var N = Number(input[line++])
        var arr =  input[line++].trim().split(" ").map(Number);
        easyButRecursion(arr,N,j = 0,sum = 0)
    }

   }
   
function easyButRecursion(arr,N,j,sum){
    if(j == N){
        console.log(sum);
        return;
    }
      sum = sum + arr[j]
        easyButRecursion(arr,N,j+1,sum)
}

if (process.env.USERNAME === "USER") {
  runProgram(`3
  5
  6 3 8 2 -4
  5
  -10 -7 10 2 -2
  5
  -4 -5 6 -3 9`);
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