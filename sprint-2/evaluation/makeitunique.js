function runProgram(input) {
  input = input.trim().split("\n")
  var str = input[0].trim().split("")
 // console.log(str)
  var obj = {}
  for(var i = 0; i < str.length; i++) {
      obj[str[i]] = undefined;
      obj[str[i]] = str[i];
}
var out = Object.keys(obj)
var mat = []
for(var i = 0; i < out.length; i++) {
    if(out[i] == "") {

    } else {
        mat.push(out[i])
    }
}
console.log(mat.join(""))
}


if (process.env.USERNAME === "USER") {
  runProgram(`aaaabbbbbcccccdddd`);
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
