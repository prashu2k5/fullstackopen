const { totalLikes } = require('../utils/list_helper')

test('total likes of empty list is zero', () => {
  expect(totalLikes([])).toBe(0)
})

test('total likes of one blog equals its likes', () => {
  const blogs = [
    { title: "Test", author: "A", url: "url", likes: 5 }
  ]
  expect(totalLikes(blogs)).toBe(5)
})

test('total likes of many blogs', () => {
  const blogs = [
    { title: "One", likes: 5 },
    { title: "Two", likes: 10 },
    { title: "Three", likes: 3 }
  ]
  expect(totalLikes(blogs)).toBe(18)
})

const { favoriteBlog } = require('../utils/list_helper')

test('favorite blog is the one with most likes', () => {
  const blogs = [
    { title: "One", author: "A", likes: 5 },
    { title: "Two", author: "B", likes: 10 },
    { title: "Three", author: "C", likes: 3 }
  ]

  const result = favoriteBlog(blogs)

  expect(result).toEqual({
    title: "Two",
    author: "B",
    likes: 10
  })
})