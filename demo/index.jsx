import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import PatchKit from '../index'
import runTests from './tests'

import CommonView from './common'

import user from '../fixtures/user'
import users from '../fixtures/users'

function TodoView () {
  return <div>Todo</div>
}

function DemoContainer (props) {
  const onChange = e => {
    window.location.hash = '#/'+e.target.value
  }
  return <div>
    <p>
      <select onChange={onChange}>
        <option value="common">Common Elements</option>
        <option value="profile">Profile Elements</option>
      </select>
      {' '}<button onClick={runTests}>Run tests</button>
    </p>
    { props.children }
  </div>
}

class PatchKitDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: user,
      users: users
    }
  }

  render() {
    return <PatchKit user={user} users={users}>
      <Router>
        <Route path="/" component={DemoContainer}>
          <IndexRoute component={CommonView} />
          <Route path="common" component={CommonView} />
          <Route path="profile" component={TodoView} />
          <Route path="profile/:id" component={TodoView} />
          <Route path="msg/:id" component={TodoView} />
        </Route>
      </Router>
    </PatchKit>
  }
}

ReactDOM.render(<PatchKitDemo/>, document.getElementById('app'))