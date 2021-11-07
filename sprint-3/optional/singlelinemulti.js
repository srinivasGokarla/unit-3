function runProgram(input) {
  input = input.trim().split("\n")
  var arr = input[0].trim().split(" ").map(Number)

  for(var i = 0; i < arr.length; i++) {
      console.log(arr[i] + 1)
  }
}


if (process.env.USERNAME === "USER") {
  runProgram(`1 2 3 4`);
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
