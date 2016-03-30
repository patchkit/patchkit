import React from 'react'
import tape from 'tape'
import user from '../fixtures/user'
import users from '../fixtures/users'
const userIds = Object.keys(users.profiles)
const sopts = { context: { user: user, users: users } }

export default function (cb) {
  tape('UserLink', function(t) {
    var section = $('section.userlink')
    var linkEls = $$('.user-link', section)
    t.test('Renders an anchor', function(t) {
      t.equal(linkEls[0].tagName, 'A')
      t.end()
    })
    t.test('Use the self-assigned name', function(t) {
      t.equal(linkEls[0].getAttribute('title'), 'paul')
      t.equal(linkEls[0].innerText, 'paul')
      t.end()
    })
    t.test('Use the local-user override name', function(t) {
      t.equal(linkEls[3].getAttribute('title'), 'dominic')
      t.equal(linkEls[3].innerText, 'dominic')
      t.end()
    })
    t.test('Use a shortened ID if name is unknown', function(t) {
      t.equal(linkEls[4].getAttribute('title'), '@sbfma...')
      t.equal(linkEls[4].innerText, '@sbfma...')
      t.end()
    })
  })

  tape('UserLinks', function(t) {
    var section = $('section.userlinks')
    var linksEls = $$('.example', section)
    t.test('Renders all Link components', function(t) {
      t.equal($$('.user-link', linksEls[0]).length, 5)
      t.end()
    })
    t.test('Respects the limit', function(t) {
      t.equal($$('.user-link', linksEls[1]).length, 2)
      t.end()
    })
  })

  tape.onFinish(cb)
}
