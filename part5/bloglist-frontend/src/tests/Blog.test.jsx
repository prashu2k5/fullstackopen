import { render, screen } from '@testing-library/react'
import Blog from '../components/Blog'
import userEvent from '@testing-library/user-event'

test('renders blog title and author', () => {
  const blog = {
    title: 'React Patterns',
    author: 'Michael Chan',
    url: 'test.com',
    likes: 5,
    user: { username: 'sumit', name: 'Sumit' }
  }

  render(
    <Blog
      blog={blog}
      user={blog.user}
      handleLike={() => {}}
      handleDelete={() => {}}
    />
  )

  const element = screen.getByText('React Patterns Michael Chan')
  expect(element).toBeDefined()
})

test('shows url and likes when view button clicked', async () => {
  const blog = {
    title: 'React Patterns',
    author: 'Michael Chan',
    url: 'test.com',
    likes: 5,
    user: { username: 'sumit', name: 'Sumit' }
  }

  const { container } = render(
    <Blog
      blog={blog}
      user={blog.user}
      handleLike={() => {}}
      handleDelete={() => {}}
    />
  )

  const button = screen.getByText('view')
  await button.click()

  const url = container.querySelector('div div')
  expect(url).toBeDefined()
})

test('clicking like twice calls event handler twice', async () => {
  const blog = {
    title: 'React Patterns',
    author: 'Michael Chan',
    url: 'test.com',
    likes: 5,
    user: { username: 'sumit', name: 'Sumit' }
  }

  const mockHandler = vi.fn()

  render(
    <Blog
      blog={blog}
      user={blog.user}
      handleLike={mockHandler}
      handleDelete={() => {}}
    />
  )

  const user = userEvent.setup()

  const viewButton = screen.getByText('view')
  await user.click(viewButton)

  const likeButton = screen.getByText('like')

  await user.click(likeButton)
  await user.click(likeButton)

  expect(mockHandler.mock.calls).toHaveLength(2)
})