module.exports = class Transfer {
    constructor(senderUser, receiveUser, value){
        this.senderUser = senderUser
        this.receiveUser = receiveUser
        this.value = value
        this.createDate = new Date()
    }
}