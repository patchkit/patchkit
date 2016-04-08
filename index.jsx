import React from 'react'
import ssbref from 'ssb-ref'

const TYPES = {
  ssb: React.PropTypes.object,
  events:  React.PropTypes.shape({
    emit: React.PropTypes.func,
    on: React.PropTypes.func,
    removeListener: React.PropTypes.func
  }),
  toUrl: React.PropTypes.func,
  user: React.PropTypes.shape({
    id: React.PropTypes.string,
    profile: React.PropTypes.object
  }),
  users: React.PropTypes.shape({
    names: React.PropTypes.object,
    profiles: React.PropTypes.object
  })
}

export default class PatchKit extends React.Component {
  constructor(props) {
    super(props)
  }
  static childContextTypes = TYPES
  static propTypes = TYPES
  getChildContext() {
    return {
      events: this.props.events,
      ssb: this.props.ssb,
      toUrl: this.props.toUrl || this.toUrl.bind(this),
      user: this.props.user,
      users: this.props.users
    }
  }

  // default toUrl() definition
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
        return '/'+ref
      return '/img/fallback.png'
    }
    return ''
  }

  render() {
    return <div id="patchkit-app">
      {this.props.children}
    </div>
  }
}