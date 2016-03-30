'use babel'
import React from 'react'
import markdown from 'ssb-markdown'
import mlib from 'ssb-msgs'
import ssbref from 'ssb-ref'

export class Block extends React.Component {
  static contextTypes = {
    toUrl: React.PropTypes.func
  }
  render() {
    // extract mention names
    var mentionNames = {}
    if (this.props.msg) {
      mlib.links(this.props.msg.value.content.mentions, 'feed').forEach(link =>{
        if (link.name && typeof link.name == 'string') {
          var name = (link.name.charAt(0) == '@') ? link.name : '@'+link.name
          mentionNames[name] = link.link
        }
      })
    }

    const toUrlOpts = { mentionNames: mentionNames }
    var html = markdown.block(this.props.md, { toUrl: ref => this.context.toUrl(ref, toUrlOpts) })
    return <div className="markdown markdown-block" dangerouslySetInnerHTML={{__html: html}} />
  }
}
export class Inline extends React.Component {
  render() {
    return <span className="markdown markdown-inline" dangerouslySetInnerHTML={{__html: markdown.inline(this.props.md)}} />
  }
}
