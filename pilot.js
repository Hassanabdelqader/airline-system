const {myEvent} = require('./events')
require("./manager")
require("./system")


function handlenew_flight(params) {

    console.log(`Manager: new flight with ID ${params.uuid} have been scheduled\n Flight { 
     event: 'new-flight',
     time: ${new Date().toLocaleString()}\n
     Details: { 
        airLine: 'Royal Jordanian Airlines',
        flightID: ${params.uuid},
        pilot: '${params.poilt}',\n
        destination: ‘${params.destination} City ‘ }
     }\n`)

     let flag1 = true;
     setInterval(() => {
        if(flag1){
            flag1 = false
            myEvent.emit("took-off",params)
            }
     }, 4000);

     
     let flag2 = true;
     setInterval(() => {
        if(flag2){
            flag2 = false
            myEvent.emit("arrived",params)
        }
     }, 7000);

     let flag3 = true;
    setInterval(() => {
        if(flag3){
            flag3 = false
            myEvent.emit("finished",params)
            }
     }, 9000);

}

myEvent.on("new-flight" ,handlenew_flight); 
