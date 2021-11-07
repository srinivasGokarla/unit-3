function runProgram(input) {
  input = input.trim().split("\n")
  var[N,M] = input[0].trim().split(" ").map(Number)
  var line = 1
  var mat = []
  for(var i = 0; i < N; i++) {
      mat.push(input[line++].trim().split(" ").map(Number))

  }
  //console.log(N,M,mat)
  
  for(var r = 0; r < N; r++) {
    var mat1 =[]
      for(var cl = 0; cl < M; cl++) {
        
          if(r % 2 == 0) {
     
            mat1.push(mat[r][cl])
          }
          
         
        }
       
        console.log(mat1)
  }
}  
if (process.env.USERNAME === "USER") {
  runProgram(`3 3
  1 2 3 
  4 5 6
  7 8 9`);
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
