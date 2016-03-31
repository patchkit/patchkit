import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import ssbref from 'ssb-ref'
import PatchKit from '../index'
import runTests from './tests'

import CommonView from './common'
import LinksDemo from 'patchkit-links/demo'
import NiceDateDemo from 'patchkit-nicedate/demo'
import PrettyRawView from './pretty-raw'
import MarkdownView from './markdown'
import MsgViewView from './msg-view'
import SteppedProgressBarDemo from 'patchkit-stepped-progress-bar/demo'

import user from 'patchkit-fixtures/user'
import users from 'patchkit-fixtures/users'

function TodoView () {
  return <div>Todo</div>
}

function DemoContainer (props) {
  const location = /[#\/]*([^?]*)/.exec(window.location.hash)[1]
  const onChange = e => {
    window.location.hash = '#/'+e.target.value
  }

  return <div>
    <p>
      <select onChange={onChange} value={location}>
        <option value="common">Common Elements</option>
        <option value="links">patchkit-links</option>
        <option value="nicedate">patchkit-nicedate</option>
        <option value="pretty-raw">PrettyRaw</option>
        <option value="markdown">Markdown</option>
        <option value="msg-view">MsgView</option>
        <option value="stepped-progress-bar">patchkit-stepped-progress-bar</option>
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
      return '/'+(ref)
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
          <Route path="links" component={LinksDemo} />
          <Route path="nicedate" component={NiceDateDemo} />
          <Route path="pretty-raw" component={PrettyRawView} />
          <Route path="markdown" component={MarkdownView} />
          <Route path="msg-view" component={MsgViewView} />
          <Route path="stepped-progress-bar" component={SteppedProgressBarDemo} />
        </Route>
      </Router>
    </PatchKit>
  }
}

ReactDOM.render(<PatchKitDemo/>, document.getElementById('app'))