import { fetchAllHandler } from 'api-posts-handler'
import httpClient from 'http-client'

export function fetchAll () {
  const promise = httpClient().get('/api/v1/posts')
  return fetchAllHandler(promise)
}

