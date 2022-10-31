

const {myEvent} = require('./events')
const { faker } =require('@faker-js/faker');
require("./manager")
require("./system")





setInterval(() => {
    let data = {
        uuid : faker.datatype.uuid(),
        destination : faker.address.cityName(),
        poilt : faker.name.fullName(),

    }
    myEvent.emit("new-flight" , data)
}, 10000);

function  handelfinished(params) {

    console.log(`*************Amazing flight ****************, ${params.uuid} \n \n`);
}


myEvent.on("finished" , handelfinished); 