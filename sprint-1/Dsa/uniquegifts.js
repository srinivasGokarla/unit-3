function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0])
    var line = 1;
    for( var i = 0; i < testcases; i++) {
    var str = input[line++].trim().split("");
      var Q = [[str[0],1]];
      var first = 0;
      var res = str[0];
      for(var j = 1; j <str.length; j++) {
          var k = 0;
          var  flag = 1;
          while(k < Q.length) {
              if(str[j] === Q[k][0]){
                  flag = 0;
                  Q[k][1] = Q[k][1] + 1;
                  break;
              }
              k++;
          } if(flag){
              Q.push([str[j],1])
          }

          while(first < Q.length && Q[first][1] > 1) {
              first++;
          }
          if(first === Q.length){
             res = res + "#";
          } else {
             res = res +  Q[first][0];
          }
      }
      console.log(res)
     
    }
   
}

if (process.env.USERNAME === "USER") {
  runProgram(`2
  abadbc
  abcabc`);
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