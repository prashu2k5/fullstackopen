const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'First blog',
    author: 'Sumit',
    url: 'example.com',
    likes: 5
  },
  {
    title: 'Second blog',
    author: 'John',
    url: 'example2.com',
    likes: 10
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb
}