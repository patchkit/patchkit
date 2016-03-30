import React from 'react'
import * as Common from '../common'
import users from '../fixtures/users'

export default class CommonView extends React.Component {
  render() {
    return <div>
      <section>
        <header>User Links</header>
        <div className="content">
          { Object.keys(users.profiles).map(id => {
            return <div key={id}><Common.UserLink id={id} /></div>
          }) }
        </div>
      </section>
    </div>
  }
}