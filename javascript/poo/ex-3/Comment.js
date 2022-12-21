class Comment {
    constructor(username, write){
        this.username = username
        this.write = write
        this.createdAt = new Date()
    }
}

module.exports = Comment