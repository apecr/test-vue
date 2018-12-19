/* global describe, it */
import mutations from '@/store/mutations.js'
import { expect } from 'chai'

describe('SET_POST', () => {
  it('adds a post to the state', () => {
    const post = { id: 1, title: 'Post' }
    const state = {
      postIds: [],
      posts: {}
    }

    mutations.SET_POST(state, { post })

    expect(state).to.be.deep.equal({
      postIds: [1],
      posts: { '1': post }
    })
  })
})
