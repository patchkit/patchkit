import React from 'react'
import u from 'patchkit-util'

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
      toUrl: this.props.toUrl || u.toUrl,
      user: this.props.user,
      users: this.props.users
    }
  }

  render() {
    return <div id="patchkit-app">
      {this.props.children}
    </div>
  }
}