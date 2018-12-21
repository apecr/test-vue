/* global describe, it, jest, expect, afterEach */
import actions from '@/store/actions'

describe('authenticate', () => {
  it('authenticated a user', async () => {
    const commit = jest.fn()
    const username = 'alice'
    const password = 'password'

    await actions.authenticate({ commit }, { username, password })

    console.log(require('axios').setMockError)

    expect(commit).toHaveBeenCalledWith(
      'SET_AUTHENTICATED', true)
  })
  it('catches an error', async () => {
    require('axios').setMockError(true)

    await expect(actions.authenticate({ commit: jest.fn() }, {}))
      .rejects.toThrow('API Error occurred.')
  })
  afterEach(() => {
    require('axios').setMockError(false)
  })
})
