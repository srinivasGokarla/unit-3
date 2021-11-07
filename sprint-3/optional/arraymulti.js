function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var j = 0; j < testcases; j++) {
        var N = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
    var arr1 = []
    for(var i = 0; i < arr.length; i++) {
        arr1.push(arr[i] + 1)
      
    }
    console.log(arr1.join(" "))
  }
  
}
  if (process.env.USERNAME === "USER") {
    runProgram(`2
    5
    1 2 3 4 5
    4
    1 2 3 4`);
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
  