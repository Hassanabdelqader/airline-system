const {myEvent} = require('./events')
require( './manager.js' );
require( './pilot.js' );


function  handletook_off(params) {

    console.log(`Pilot: flight with ID ‘${params.uuid}’ took-off Flight { 
    event: 'took_off',
    time: ${new Date().toLocaleString()}
    Details: {
         airLine: 'Royal Jordanian Airlines', 
         flightID: '${params.uuid}',
         pilot: '${params.poilt}', 
         destination: ‘${params.destination}’ } 
        }`)
    console.log("\n")
    console.log("\n")
   
}


function  handlearrived(params) {

    console.log(`Pilot: flight with ID '${params.uuid}' has arrived Flight { 
    event: 'arrived', 
    time: ${new Date().toLocaleString()}
    Details: {
         airLine: 'Royal Jordanian Airlines',
         flightID: '${params.uuid}, 
         pilot: '${params.poilt}', 
         destination: ‘${params.destination}’ }
         } `)
         
    console.log("\n")
    console.log("\n")

  
}

function  handlenew_flight(params) {

    console.log(`Flight: flight with ID ‘${params.uuid}’`)
    console.log("\n")
    console.log("\n")
   
}


myEvent.on("new-flight" ,handlenew_flight); 
myEvent.on("took-off" , handletook_off); 
myEvent.on("arrived" ,handlearrived); 
