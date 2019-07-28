const Query = {
  users(parent, args, {db}, info) {
    if (!args.query) {
      return db.users
    }
    if (args.query) {
      return db.users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()))
    }
  },
  me() {
    return {
      id: '123abc',
      name: 'Mike',
      email: 'mike@example.com'
    }
  },
  posts(parent, args, {db}, info) {
    if (!args.query) {
      return db.posts
    }
    if (args.query) {
      return db.posts.filter((post) => {
        return (post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase()))
      })
    }
  },
  comments(parents, args, {db}, info) {
    if (!args.query) {
      return db.comments
    }

    if (args.query) {
      return db.comments.filter((comment) => {
        return comment.text.toLowerCase().includes(args.query.toLowerCase())
      })
    }
  }
}

export default Query