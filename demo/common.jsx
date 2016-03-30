import React from 'react'
import * as Common from '../common'
import users from '../fixtures/users'

const unknownId = '@sbfmaA2g/MgGYwSZqnlH8xNOnevTjWsbmelNnB706zA=.ed25519'

export default class CommonView extends React.Component {
  render() {
    const userIds = Object.keys(users.profiles).concat([unknownId])
    return <div>
      <section className="userlink">
        <header>&lt;UserLink&gt;</header>
        <div className="content">
          { userIds.map(id => {
            return <div key={id}><Common.UserLink id={id} /></div>
          }) }
        </div>
      </section>
      <section className="userlinks">
        <header>&lt;UserLinks&gt;</header>
        <div className="content">
          <p className="example">No limit:<br/><Common.UserLinks ids={userIds} /></p>
          <p className="example">Limited to 2:<br/><Common.UserLinks ids={userIds} limit={2} /></p>
        </div>
      </section>
    </div>
  }
}