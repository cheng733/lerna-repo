const sharedMessage = require('shared')
function mobileMessage(){
    console.log('mobileMessage ~~')
}
mobileMessage()
sharedMessage()
module.exports = mobileMessage