function runProgram(input) {
  input = input.trim().split("\n")
  var n = Number(input[0]);
  
  var line = 1;
  for(var i = 0; i < n; i++){
      var str = input[line++].trim().split("")
     // console.log(str)
      againclassical(str);
  }
 }

function againclassical(str){
  var count = 0;
  var count1 = 0;
    var count2 = 0;
  for(var i = 0; i < str.length; i++){
      if(str[i] =='{' ||str[i] =='}'){
          count++;
      }
      else if(str[i]==']'|| str[i]=='['){
          count1++;
      }
      else{
          count2++;
      }
  }
  
  if(count % 2 == 0 && count1 % 2 == 0 && count2 % 2 == 0){
      console.log("balanced");
  }else{
      console.log("not balanced")
  }
  }
 
    if (process.env.USERNAME === "USER") {
      runProgram(`3
      {([])}
      ()
      ([]`);
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