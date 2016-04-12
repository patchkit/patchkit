import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import EventEmitter from 'events'
import ssbref from 'ssb-ref'
import muxmock from 'muxrpc-mock'
import PatchKit from '../index'
import runTests from './tests'
import SSB_MANIFEST from './ssb-manifest'

import RainbowTextDemo from 'patchkit-rainbow-text/demo'
import LinksDemo from 'patchkit-links/demo'
import NiceDateDemo from 'patchkit-nicedate/demo'
import HoverShifterDemo from 'patchkit-hover-shifter/demo'
import TabsDemo from 'patchkit-tabs/demo'
import DropdownDemo from 'patchkit-dropdown/demo'
import TokensInputDemo from 'patchkit-tokens-input/demo'
import ChannelListDemo from 'patchkit-channel-list/demo'
import SearchPaletteDemo from 'patchkit-search-palette/demo'
import MDLSpinnerDemo from 'patchkit-mdl-spinner/demo'

import VerticalFilledDemo from 'patchkit-vertical-filled/demo'
import SimpleInfiniteDemo from 'patchkit-simple-infinite/demo'
import LocalStoragePersistedDemo from 'patchkit-ls-persisted/demo'

import NiceRawDemo from 'patchkit-niceraw/demo'
import MarkdownDemo from 'patchkit-markdown/demo'
import MsgContentDemo from 'patchkit-msg-content/demo'

import SteppedProgressBarDemo from 'patchkit-stepped-progress-bar/demo'
import ModalDemo from 'patchkit-modal/demo'
import ImageUploaderDemo from 'patchkit-image-uploader/demo'
import SelectorDemo from 'patchkit-selector/demo'
import RadiosDemo from 'patchkit-radios/demo'
import FormPromptDemo from 'patchkit-form-prompt/demo'
import FormFlagMsgDemo from 'patchkit-form-flag-msg/demo'
import FormProfileNameDemo from 'patchkit-form-profile-name/demo'
import FormProfileImageDemo from 'patchkit-form-profile-image/demo'
import SetupFlowDemo from 'patchkit-setup-flow/demo'

import user from 'patchkit-fixtures/user'
import users from 'patchkit-fixtures/users'

const ssb = muxmock(SSB_MANIFEST, {
  onAsync:  console.log.bind(console, 'async'),
  onSource: console.log.bind(console, 'source'),
  onSink:   console.log.bind(console, 'sink')
})

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
        <option value="rainbow-text">patchkit-rainbow-text</option>
        <option value="links">patchkit-links</option>
        <option value="nicedate">patchkit-nicedate</option>
        <option value="hover-shifter">patchkit-hover-shifter</option>
        <option value="tabs">patchkit-tabs</option>
        <option value="dropdown">patchkit-dropdown</option>
        <option value="tokens-input">patchkit-tokens-input</option>
        <option value="channel-list">patchkit-channel-list</option>
        <option value="search-palette">patchkit-search-palette</option>
        <option value="mdl-spinner">patchkit-mdl-spinner</option>
        <option value="vertical-filled">patchkit-vertical-filled</option>
        <option value="simple-infinite">patchkit-simple-infinite</option>
        <option value="ls-persisted">patchkit-ls-persisted</option>
        <option value="niceraw">patchkit-niceraw</option>
        <option value="markdown">patchkit-markdown</option>
        <option value="msg-content">patchkit-msg-content</option>
        <option value="stepped-progress-bar">patchkit-stepped-progress-bar</option>
        <option value="modal">patchkit-modal</option>
        <option value="image-uploader">patchkit-image-uploader</option>
        <option value="selector">patchkit-selector</option>
        <option value="radios">patchkit-radios</option>
        <option value="form-prompt">patchkit-form-prompt</option>
        <option value="form-flag-msg">patchkit-form-flag-msg</option>
        <option value="form-profile-name">patchkit-form-profile-name</option>
        <option value="form-profile-image">patchkit-form-profile-image</option>
        <option value="setup-flow">patchkit-setup-flow</option>
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
    this.events = new EventEmitter()
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
    return <PatchKit user={user} users={users} toUrl={this.toUrl} events={this.events} ssb={ssb}>
      <Router>
        <Route path="/" component={DemoContainer}>
          <IndexRoute component={RainbowTextDemo} />
          <Route path="rainbow-text" component={RainbowTextDemo} />
          <Route path="links" component={LinksDemo} />
          <Route path="nicedate" component={NiceDateDemo} />
          <Route path="hover-shifter" component={HoverShifterDemo} />
          <Route path="tabs" component={TabsDemo} />
          <Route path="dropdown" component={DropdownDemo} />
          <Route path="tokens-input" component={TokensInputDemo} />
          <Route path="channel-list" component={ChannelListDemo} />
          <Route path="search-palette" component={SearchPaletteDemo} />
          <Route path="mdl-spinner" component={MDLSpinnerDemo} />
          <Route path="vertical-filled" component={VerticalFilledDemo} />
          <Route path="ls-persisted" component={LocalStoragePersistedDemo} />
          <Route path="simple-infinite" component={SimpleInfiniteDemo} />
          <Route path="niceraw" component={NiceRawDemo} />
          <Route path="markdown" component={MarkdownDemo} />
          <Route path="msg-content" component={MsgContentDemo} />
          <Route path="stepped-progress-bar" component={SteppedProgressBarDemo} />
          <Route path="modal" component={ModalDemo} />
          <Route path="image-uploader" component={ImageUploaderDemo} />
          <Route path="selector" component={SelectorDemo} />
          <Route path="radios" component={RadiosDemo} />
          <Route path="form-prompt" component={FormPromptDemo} />
          <Route path="form-flag-msg" component={FormFlagMsgDemo} />
          <Route path="form-profile-name" component={FormProfileNameDemo} />
          <Route path="form-profile-image" component={FormProfileImageDemo} />
          <Route path="setup-flow" component={SetupFlowDemo} />
        </Route>
      </Router>
    </PatchKit>
  }
}

ReactDOM.render(<PatchKitDemo/>, document.getElementById('app'))