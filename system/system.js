

const PORT = process.env.PORT || 9560 ; 

const io = require("socket.io")(PORT)

io.on("connection" , (socket)=>{
    console.log("Connected with Socket.id", socket.id);

    socket.on("new-flight" ,handlenew_flight); 
    socket.on("took-off" , handletook_off); 
    socket.on("arrived" ,handlearrived); 

    
    socket.on("disconnect", () => {
        console.log("DisConnected **********", socket.id);
  });
})


function  handletook_off(params) {

 console.log('\x1b[36m%s\x1b[0m',`
    Flight {
        event: 'took_off',
        time: ${new Date().toLocaleString()}
        Details: {
        airLine: 'Royal Jordanian Airlines',
        flightID: '${params.uuid}',
        pilot: '${params.poilt}',
        destination: ‘${params.destination}’
     }
    }`)
        
    console.log("\n")
    console.log("\n")
   
}


function  handlearrived(params) {


console.log('\x1b[35m%s\x1b[0m', `
    Flight {
        event: 'arrived',
        time: ${new Date().toLocaleString()}
        Details: {
        airLine: 'Royal Jordanian Airlines',
        flightID: '${params.uuid}',
        pilot: '${params.poilt}',
        destination: ‘${params.destination}’
     }
    }`)
    io.emit("finished",params)
    console.log("\n")
    console.log("\n")

  
}

function  handlenew_flight(params) {
    
    console.log('\x1b[34m%s\x1b[0m',`
    Flight {
        event: 'new-flight',
        time: ${new Date().toLocaleString()}
        Details: {
        airLine: 'Royal Jordanian Airlines',
        flightID: '${params.uuid}',
        pilot: '${params.poilt}',
        destination: ‘${params.destination}’
     }
    }`)
    io.emit("new-flight",params)

    console.log("\n")
    console.log("\n")
   
}



