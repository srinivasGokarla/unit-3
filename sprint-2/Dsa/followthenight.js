function runProgram(input) {
    var [i, j, N] = input.split(" ").map(Number)
    FollowTheKnight(i -1,j-1,N)
    let count = 0;
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(chessboard[i][j] === 1){
                count++
            }
        }
        
    }
    console.log(count)
  }
  let chessboard = new Array(10).fill(0).map(arr=>arr=(new Array(10).fill(0)))

function FollowTheKnight( i, j, N ){
    if(i < 0 || j < 0 || i > 9 || j > 9) {
        return false;
    }if(N === 0){
        chessboard[i][j] = 1
        return;
    }
    
     FollowTheKnight(i-2,j+1,N-1)
     FollowTheKnight(i-2,j-1,N-1)
     FollowTheKnight(i+1,j+2,N-1)
     FollowTheKnight(i-1,j-2,N-1)
     FollowTheKnight(i+2,j+1,N-1)
     FollowTheKnight(i+2,j-1,N-1)
     FollowTheKnight(i+1,j-2,N-1)
     FollowTheKnight(i-1,j+2,N-1)
}
   
  if (process.env.USERNAME === "USER") {
    runProgram(`3 3 1`);
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
  