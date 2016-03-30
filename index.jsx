import React from 'react'
import CT from './contexttypes'

export default class PatchKit extends React.Component {
  constructor(props) {
    super(props)
  }
  static childContextTypes = CT
  static propTypes = CT
  getChildContext() {
    return {
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