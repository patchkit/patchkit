import React from 'react'
import ssbref from 'ssb-ref'
import { UserLink, MsgLink, BlobLink } from './common'

class TableRow extends React.Component {
  render() {
    var value = this.props.value
    if (ssbref.isLink(value)) {
      if (ssbref.isMsg(value))
        value = <MsgLink id={value} name={this.props.name} />
      else if (ssbref.isBlob(value))
        value = <BlobLink id={value} name={this.props.name} />
      else if (ssbref.isFeed(value))
        value = <UserLink id={value} />
    }
    else if (typeof value == 'boolean')
      value = (value) ? 'true' : 'false'
    return <tr><td>{this.props.path}</td><td>{value}</td></tr>
  }
}

function elements(path, obj, Com) {
  var els = []
  path = (path) ? path + '.' : ''

  for (var k in obj) {
    if (obj[k] && typeof obj[k] == 'object')
      els = els.concat(elements(path+k, obj[k], Com))
    else
      els.push(<Com key={path+k} path={path+k} value={obj[k]} name={obj.name} />)
  }
  return els
}

export class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = { obj: null }
  }
  componentDidMount() {
    var obj = this.props.obj
    this.setState({ obj: obj })
  }
  render() {
    if (!this.state.obj)
    if (typeof this.state.obj == 'string')
      return <table className="pretty-raw"><tbody><tr><td>{this.state.obj}</td></tr></tbody></table>
    return <table className="pretty-raw"><tbody>{elements(false, this.state.obj, TableRow)}</tbody></table>
  }
}

class DivElem extends React.Component {
  render() {
    var value = this.props.value
    if (ssbref.isLink(value)) {
      if (ssbref.isMsg(value))
        value = <MsgLink id={value} name={this.props.name} />
      else if (ssbref.isBlob(value))
        value = <BlobLink id={value} name={this.props.name} />
      else if (ssbref.isFeed(value))
        value = <UserLink id={value} />
    }
    else if (typeof value == 'boolean')
      value = (value) ? 'true' : 'false'
    return <div><small>{this.props.path}</small> {value}</div>
  }
}

export class Div extends Table {
  render() {
    if (!this.state.obj || typeof this.state.obj == 'string')
      return <div className="pretty-raw"><i className="fa fa-lock" /></div>
    return <div className="pretty-raw">{elements(false, this.state.obj, DivElem)}</div>
  }
}
