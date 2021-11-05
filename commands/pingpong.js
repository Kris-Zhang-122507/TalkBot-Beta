module.exports = {
    name: 'pingpong',
    description: "this is a pingpong command!",
    execute(message, args){
        message.channel.send('dingdong!');
    }
}