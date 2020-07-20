const { exec, spawn } = require('child_process');

//const exec = require('child_process').exec;

exec('ls -la', (e, stdout) => {
    (e) ?
        console.log(e) :
        console.log(stdout)
});

let process = spawn("ls", ["-la"]);
process.stdout.on("data", data => console.log(data.toString()));
process.on("exit", () =>
  console.log("process end; process.killed:", process.killed)
);