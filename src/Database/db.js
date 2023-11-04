const data = [
    {
        username:"smaran",
        password:"12345678"
    },
    {
        username:"ashrith",
        password:"12345678"
    }
];

function addData(props){
    for (let index = 0; index < data.length; index++) {
        console.log(data[index]);
        if(data[index].username === props.username ){
            return false;
        }
    }
    data.push({
        username: props.username,
        password: props.password
    })
    console.log(data);
    return true;
}

function verify(props){
    for (let index = 0; index < data.length; index++) {
        if(data[index].username === props.username && data[index].password === props.password)
            return true;
    }
    return false;
}

module.exports = {
    addData: addData,
    verify: verify
};