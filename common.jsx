'use babel'
import React from 'react'
import { Link } from 'react-router'
import * as u from 'patchkit-util'

export class NiceDate extends React.Component {
  render() {
    return <span>{u.niceDate(this.props.ts, this.props.ago)}</span>
  }
}

export class HoverShifter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isHovering: false }
  }
  render() {
    const child = this.props.children && this.props.children[+this.state.isHovering]
    return <span onMouseEnter={()=>this.setState({isHovering: true})} onMouseLeave={()=>this.setState({isHovering: false})}>{child}</span>
  }
}