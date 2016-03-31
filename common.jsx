'use babel'
import React from 'react'

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