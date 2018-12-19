/* global describe, it */

import FormSubmitter from '@/components/FormSubmitter.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import flushPromises from 'flush-promises'

describe('FormSubmitter.vue', () => {
  let url = ''
  let data = ''
  const getMock = withError => {
    return ({
      get: (_url, _data) => {
        return new Promise((resolve, reject) => {
          url = _url
          data = _data
          console.log(url, data, withError)
          withError === true ? reject(new Error('Test error')) : resolve()
        })
      }
    })
  }
  it('Should reveal a notification when submitted', async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: getMock(false)
      }
    })
    const name = 'alice'
    wrapper.find('[data-username]').setValue(name)
    wrapper.find('form').trigger('submit.prevent')

    await flushPromises()

    expect(wrapper.find('.message').text()).to.be.equal(`Thank you for your submission, ${name}.`)
  })
  it('Should not reveal a notification when submitted', async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: getMock(true)
      }
    })
    const name = 'john'
    wrapper.find('[data-username]').setValue(name)
    wrapper.find('form').trigger('submit.prevent')

    await flushPromises()

    expect(wrapper.find('.message').exists()).to.be.equal(false)
  })
})
