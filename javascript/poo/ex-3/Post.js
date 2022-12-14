const Comment = require("./Comment.js")

class Post {
    constructor(title, body, author){
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }

    addComment(username, write){
        this.comments.push(new Comment(username, write))
    }
}

module.exports = Post