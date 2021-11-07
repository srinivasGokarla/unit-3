function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1
  for(var i = 0; i < testcases; i++) {
      var N = Number(input[line++])
      var arr = input[line++].trim().split(" ").map(Number)
     // console.log(testcases,N,arr)
      exceptone(N,arr)
  }
}
function exceptone(N,arr) {
    var obj = {}
    for(var i = 0; i < N; i++) {
        var char = arr[i]
        if(obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    }
    var output;
    for(key in obj) {
        if(obj[key] == 1) {
            output = key;
        }
    }
    console.log(output)
}


if (process.env.USERNAME === "USER") {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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
