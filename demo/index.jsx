import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import ssbref from 'ssb-ref'
import PatchKit from '../index'
import runTests from './tests'

import CommonView from './common'
import PrettyRawView from './pretty-raw'

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
        <option value="pretty-raw">PrettyRaw</option>
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

  toUrl(ref, opts) {
    // @-mentions
    if (opts && opts.mentionNames && ref in opts.mentionNames)
      return '#/profile/'+encodeURIComponent(opts.mentionNames[ref])

    // standard ssb-refs
    if (ssbref.isFeedId(ref))
      return '#/profile/'+encodeURIComponent(ref)
    else if (ssbref.isMsgId(ref))
      return '#/msg/'+encodeURIComponent(ref)
    else if (ssbref.isBlobId(ref))
      return '/'+encodeURIComponent(ref)
    else if (opts && opts.isProfilePic) {
      if (ref)
        return '/img/'+ref
      return '/img/fallback.png'
    }
    return ''
  }

  render() {
    return <PatchKit user={user} users={users} toUrl={this.toUrl}>
      <Router>
        <Route path="/" component={DemoContainer}>
          <IndexRoute component={CommonView} />
          <Route path="common" component={CommonView} />
          <Route path="pretty-raw" component={PrettyRawView} />
          <Route path="profile" component={TodoView} />
          <Route path="profile/:id" component={TodoView} />
          <Route path="msg/:id" component={TodoView} />
        </Route>
      </Router>
    </PatchKit>
  }
}

ReactDOM.render(<PatchKitDemo/>, document.getElementById('app'))