import { observable } from 'mobx'

export class Posts {
  api = {}
  ui = {}
  @observable records = []

  constructor (api, ui) {
    Object.assign(this, {api}, {ui})
  }

  toJS () {
    return {
      records: this.records.map(post => post.toJS())
    }
  }
}

