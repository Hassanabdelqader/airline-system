
const { faker } =require('@faker-js/faker');
const io = require("socket.io-client")
const server = process.env.HOST || "http://localhost:9560/" ;

managerConnection = io.connect(server)

setInterval(() => {
    let data = {
        uuid : faker.datatype.uuid(),
        destination : faker.address.cityName(),
        poilt : faker.name.fullName(),

    }
    console.log('\x1b[35m%s\x1b[0m',`Manager: new flight with ID ‘${data.uuid}’ have been scheduled`)
    managerConnection.emit("new-flight" , data)
}, 10000);



function  handelfinished(params) {


    console.log('\x1b[36m%s\x1b[0m',`Manager: we’re greatly thankful for the amazing flight, ${params.poilt}, ${params.uuid} \n \n`);
}


managerConnection.on("finished" , handelfinished); 