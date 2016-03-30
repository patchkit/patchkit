import React from 'react'
import * as PrettyRaw from '../pretty-raw'
import { posts } from '../fixtures/msgs'

export default class PrettyRawView extends React.Component {
  render() {
    return <div>
      <h1>patchkit/pretty-raw</h1>
      <section className="prettyraw-table">
        <header>&lt;Table obj="..."&gt;</header>
        <div className="content">
          <div className="example"><PrettyRaw.Table obj={posts[0]} /></div>
        </div>
      </section>
      <section className="prettyraw-div">
        <header>&lt;Div obj="..."&gt;</header>
        <div className="content">
          <div className="example"><PrettyRaw.Div obj={posts[0]} /></div>
        </div>
      </section>
    </div>
  }
}