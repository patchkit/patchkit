import React from 'react'
import ssbref from 'ssb-ref'
import CT from './contexttypes'

export default class PatchKit extends React.Component {
  constructor(props) {
    super(props)
  }
  static childContextTypes = CT
  static propTypes = CT
  getChildContext() {
    return {
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