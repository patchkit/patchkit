import React from 'react'
import { shallow } from 'enzyme'
import * as Common from '../common.jsx'

import users from '../fixtures/users'
const userIds = Object.keys(users.profiles)
const sopts = { context: { users: users } }

describe('User Links', function() {
  it('Renders a Link', function() {
    var link = shallow(<Common.UserLink id={userIds[0]} />, sopts)
    expect(link.is('Link')).toBe(true)
    expect(link.hasClass('user-link')).toBe(true)
  })
})
