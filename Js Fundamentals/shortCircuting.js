function printName(name){
    name = name || "Default"



    // if(name == null){
    //     name = "Default"
    // }



}



const person = {
    name: "Soba",
//     adress: "Seattle"
    }



if(person != null && person.address != null){
    console.log(person.address.street)
}


console.log(person && person.address && person.address.street)
