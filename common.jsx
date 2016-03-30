'use babel'
import React from 'react'
import { Link } from 'react-router'
import * as u from './util'

export class UserLink extends React.Component {
  static contextTypes = {
    users: React.PropTypes.object,
    toUrl: React.PropTypes.func
  }
  render() {
    const name = this.context.users.names[this.props.id] || u.shortString(this.props.id, 6)
    const label = (this.props.shorten) ? name.slice(0, 3) : name
    return <a href={this.context.toUrl(this.props.id)} className="user-link" title={name}>{label}</a>
  }
}

export class MsgLink extends React.Component {
  static contextTypes = {
    toUrl: React.PropTypes.func
  }
  render() {
    return <a href={this.context.toUrl(this.props.id)}>{this.props.children||this.props.name||this.props.id}</a>
  }
}

export class BlobLink extends React.Component {
  static contextTypes = {
    toUrl: React.PropTypes.func
  }
  render() {
    return <a href={this.context.toUrl(this.props.id)}>{this.props.children||this.props.name||this.props.id}</a>
  }
}

export class UserLinks extends React.Component {
  static contextTypes = {
    users: React.PropTypes.object
  }
  render() {
    let ids = this.props.ids
    let n = this.props.ids.length

    // apply limit
    const limit = this.props.limit
    let overLimitNames = false
    let nOver = 0
    if (n > limit) {
      overLimitNames = ids.slice(limit).map(id => u.getName(this.context.users, id)).join(', ')
      nOver = n - limit
      ids = ids.slice(0, limit)
      n = limit
    }

    return <span>
      {ids.map((id, i) => {
        let isLast = (i === n-1)
        return <span key={id} ><UserLink id={id} shorten={this.props.shorten} />{isLast ? '' : ', '}</span>
      })}
      {overLimitNames
        ? <span className="hint--top" data-hint={overLimitNames}> and {nOver} other{u.plural(nOver)}</span>
        : '' }
    </span>
  }
}

export class UserPic extends React.Component {
  static contextTypes = {
    users: React.PropTypes.object,
    toUrl: React.PropTypes.func
  }
  render() {
    const name = this.context.users.names[this.props.id] || u.shortString(this.props.id, 6)
    return <a href={this.context.toUrl(this.props.id)} className="user-pic hint--top" data-hint={name}>
      <img src={u.getProfilePicUrl(this.context.users, this.props.id, this.context.toUrl)} />
    </a>
  }
}

export class UserPics extends React.Component {
  static contextTypes = {
    users: React.PropTypes.object
  }
  render() {
    let ids = this.props.ids
    let n = this.props.ids.length

    // apply limit
    const limit = this.props.limit
    let overLimitNames = false
    let nOver = 0
    if (n > limit) {
      overLimitNames = ids.slice(limit).map(id => u.getName(this.context.users, id)).join(', ')
      nOver = n - limit
      ids = ids.slice(0, limit)
      n = limit
    }

    return <span>
      {ids.map((id, i) => <UserPic id={id} key={`pic-${i}`} hovertips={this.props.hovertips} />)}
      {overLimitNames
        ? <span className="hint--top" data-hint={overLimitNames}> and {nOver} other{u.plural(nOver)}</span>
        : '' }
    </span>
  }
}

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