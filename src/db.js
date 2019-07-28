// 5 Scalar types (store single value) - String, Boolean, Int, Float, ID
// Demo user data

let users = [{
  id: '1',
  name: 'Kevin',
  email: 'kevin@example.com',
  age: 37
}, {
  id: '2',
  name: 'Sara',
  email: 'sara@example.com'
}, {
  id: '3',
  name: 'Mike',
  email: 'mike@example.com',
  age: 28
}]

let posts = [{
  id: '11',
  title: 'My Title 1',
  body: 'Lorem Body 1',
  published: true,
  author: '1'
}, {
  id: '12',
  title: 'My Title 2',
  body: 'Ipsum Body PQR',
  published: false,
  author: '2'
}, {
  id: '13',
  title: 'My Title 3',
  body: 'TTT VVV 3',
  published: true,
  author: '3'
}]

let comments = [{
  id: '1',
  text: 'Lorem ipsum 123 etc...',
  author: '1',
  post: '13'
}, {
  id: '2',
  text: 'Lorem ipsum 456 etc...',
  author: '1',
  post: '12'
}, {
  id: '3',
  text: 'Lorem ipsum 789 etc...',
  author: '3',
  post: '12'
}, {
  id: '4',
  text: 'Lorem ipsum 000 etc...',
  author: '2',
  post: '11'
}]

const db = {
  users,
  posts,
  comments
}

export default db;