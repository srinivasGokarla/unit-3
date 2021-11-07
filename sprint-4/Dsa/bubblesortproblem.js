function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    console.log(BubbleRecursion(arr,0))

  }
  function solve(N,arr){
    if(N == 1) 
       return;
       for(var i = 0; i < arr.length - 1; i++){
           for(var j = 0; j < arr.length - i - 1; j++){
               if(arr[j] > arr[j+1]){
                   var temp = arr[j];
                   arr[j] = arr[j+1];
                   arr[j+1] = temp;
               }
           }
       }
       console.log(arr.join(" "))
}

if (process.env.USERNAME === "USER") {
    runProgram(`5
    3 5 0 9 8`);
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
  