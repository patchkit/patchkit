import React from 'react'
import { shallow } from 'enzyme'
import * as Common from '../common.jsx'

import users from '../fixtures/users'
const userIds = Object.keys(users.profiles)
const sopts = { context: { users: users } }

// the user with an overridden name
const dominicId = '@EMovhfIrFk4NihAKnRNhrfRaqIhBv1Wj8pTxJNgvCCY=.ed25519'

describe('User Links', function() {
  it('Renders a Link', function() {
    var link = shallow(<Common.UserLink id={userIds[0]} />, sopts)
    expect(link.is('Link')).toBe(true)
    expect(link.hasClass('user-link')).toBe(true)
  })
  it('Use the self-assigned name', function() {
    var el = shallow(<Common.UserLink id={userIds[0]} />, sopts).render()
    expect(el.text()).toBe('paul')
  })
  it('Use the local-user override name', function() {
    var el = shallow(<Common.UserLink id={dominicId} />, sopts).render()
    expect(el.text()).toBe('dominic')
  })
})
