import React from 'react'
import * as Markdown from '../markdown'
import * as msgs from '../fixtures/msgs'

export default class MarkdownView extends React.Component {
  render() {
    const msg = msgs.posts[0]
    return <div>
      <section className="markdown-block">
        <header>&lt;Markdown.Block&gt;</header>
        <div className="content">
          <div className="example"><Markdown.Block md={msg.value.content.text} msg={msg} /></div>
        </div>
      </section>
      <section className="markdown-inline">
        <header>&lt;Markdown.Inline&gt;</header>
        <div className="content">
          <div className="example"><Markdown.Inline md={msg.value.content.text} /></div>
        </div>
      </section>
    </div>
  }
}