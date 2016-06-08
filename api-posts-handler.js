import Post from 'Post'
import posts from 'posts-store'

export function fetchAllHandler (promise) {
  return promise
    .then(response => {
      const {data} = response
      data.records = data.records.map(post => Post.fromJS(posts, post))
      return Promise.resolve(data)
    })
    .catch(response => {
      return Promise.reject(response.data.error)
    })
}

