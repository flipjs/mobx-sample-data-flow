import * as api from 'api-posts'
import Posts from 'Posts'
import ui from './ui'

const posts = new Posts(api, ui)

export default posts

