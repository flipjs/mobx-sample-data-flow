export default class Post {
  store
  id
  @observable title
  @observable body

  constructor (store, post) {
    Object.assign(this, {store}, {...post})
  }

  toJS () {
    return {
      title: this.title,
      body: this.body
    }
  }

  static fromJS (post) {
    return new Post(store, post)
  }
}
