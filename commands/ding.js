module.exports = {
    name: 'ding',
    description: "this is a ding command!",
    execute(message, args){
        message.channel.send('dong!');
    }
}