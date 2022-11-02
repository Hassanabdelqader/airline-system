const io = require("socket.io-client");
const server = process.env.HOST || "http://localhost:9560/";

poiltConnection = io.connect(server);

function handlenew_flight(params) {

   let flag1 = true;
   setInterval(() => {
      if(flag1){
          flag1 = false
         console.log('\x1b[36m%s\x1b[0m',`Pilot: flight with ID ‘${params.uuid}’ took-off`)
          poiltConnection.emit("took-off",params)
          }
   }, 4000);
   let flag2 = true;
   setInterval(() => {
          if(flag2){
        console.log('\x1b[35m%s\x1b[0m',`Pilot: flight with ID ‘${params.uuid}’ has arrived\n\n`)

          flag2 = false
          poiltConnection.emit("arrived",params)
      }
   }, 7000);

}

poiltConnection.on("new-flight",handlenew_flight);
