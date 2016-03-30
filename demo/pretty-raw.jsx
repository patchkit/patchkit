import React from 'react'
import * as PrettyRaw from '../pretty-raw'
import msgs from '../fixtures/msgs'

console.log(msgs)

export default class PrettyRawView extends React.Component {
  render() {
    return <div>
      <section className="prettyraw-table">
        <header>&lt;PrettyRaw.Table&gt;</header>
        <div className="content">
          <div className="example"><PrettyRaw.Table obj={msgs[0]} /></div>
        </div>
      </section>
      <section className="prettyraw-div">
        <header>&lt;PrettyRaw.Div&gt;</header>
        <div className="content">
          <div className="example"><PrettyRaw.Div obj={msgs[0]} /></div>
        </div>
      </section>
    </div>
  }
}