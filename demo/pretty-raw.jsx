import React from 'react'
import * as PrettyRaw from '../pretty-raw'
import { posts } from '../fixtures/msgs'

export default class PrettyRawView extends React.Component {
  render() {
    return <div>
      <section className="prettyraw-table">
        <header>&lt;PrettyRaw.Table&gt;</header>
        <div className="content">
          <div className="example"><PrettyRaw.Table obj={posts[0]} /></div>
        </div>
      </section>
      <section className="prettyraw-div">
        <header>&lt;PrettyRaw.Div&gt;</header>
        <div className="content">
          <div className="example"><PrettyRaw.Div obj={posts[0]} /></div>
        </div>
      </section>
    </div>
  }
}