import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import ssbref from 'ssb-ref'
import PatchKit from '../index'
import runTests from './tests'

import LinksDemo from 'patchkit-links/demo'
import NiceDateDemo from 'patchkit-nicedate/demo'
import HoverShifterDemo from 'patchkit-hover-shifter/demo'
import NiceRawDemo from 'patchkit-niceraw/demo'
import MarkdownDemo from 'patchkit-markdown/demo'
import MsgContentDemo from 'patchkit-msg-content/demo'
import SteppedProgressBarDemo from 'patchkit-stepped-progress-bar/demo'
import ModalDemo from 'patchkit-modal/demo'
import ImageUploaderDemo from 'patchkit-image-uploader/demo'
import SelectorDemo from 'patchkit-selector/demo'
import RadiosDemo from 'patchkit-radios/demo'
import FormFlagMsgDemo from 'patchkit-form-flag-msg/demo'
import FormProfileNameDemo from 'patchkit-form-profile-name/demo'

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
        <option value="links">patchkit-links</option>
        <option value="nicedate">patchkit-nicedate</option>
        <option value="hover-shifter">patchkit-hover-shifter</option>
        <option value="niceraw">patchkit-niceraw</option>
        <option value="markdown">patchkit-markdown</option>
        <option value="msg-content">patchkit-msg-content</option>
        <option value="stepped-progress-bar">patchkit-stepped-progress-bar</option>
        <option value="modal">patchkit-modal</option>
        <option value="image-uploader">patchkit-image-uploader</option>
        <option value="selector">patchkit-selector</option>
        <option value="radios">patchkit-radios</option>
        <option value="form-flag-msg">patchkit-form-flag-msg</option>
        <option value="form-profile-name">patchkit-form-profile-name</option>
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

  emit(event, data) {
    console.log('emit', event, data)
  }

  render() {  
    return <PatchKit user={user} users={users} toUrl={this.toUrl} emit={this.emit}>
      <Router>
        <Route path="/" component={DemoContainer}>
          <IndexRoute component={LinksDemo} />
          <Route path="links" component={LinksDemo} />
          <Route path="nicedate" component={NiceDateDemo} />
          <Route path="hover-shifter" component={HoverShifterDemo} />
          <Route path="niceraw" component={NiceRawDemo} />
          <Route path="markdown" component={MarkdownDemo} />
          <Route path="msg-content" component={MsgContentDemo} />
          <Route path="stepped-progress-bar" component={SteppedProgressBarDemo} />
          <Route path="modal" component={ModalDemo} />
          <Route path="image-uploader" component={ImageUploaderDemo} />
          <Route path="selector" component={SelectorDemo} />
          <Route path="radios" component={RadiosDemo} />
          <Route path="form-flag-msg" component={FormFlagMsgDemo} />
          <Route path="form-profile-name" component={FormProfileNameDemo} />
        </Route>
      </Router>
    </PatchKit>
  }
}

ReactDOM.render(<PatchKitDemo/>, document.getElementById('app'))