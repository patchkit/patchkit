import React from 'react'
import SteppedProgressBar from 'patchkit-stepped-progress-bar'

class SPB extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }
  render() {
    const n = this.props.num || this.props.labels.length
    const onNext = e => {
      this.state.current++
      if (this.state.current >= n)
        this.state.current = 0
      this.setState({ current: this.state.current })
    }
    const onGotoStep = step => {
      if (step < this.state.current)
        this.setState({ current: step })
    }
    return <div>
      <SteppedProgressBar current={this.state.current} onClick={onGotoStep} {...this.props} /><br/>
      <button onClick={onNext}>Move Forward</button>
    </div>
  }
}

export default class SteppedProgressBarView extends React.Component {
  render() {
    return <div>
      <h1>patchkit/stepped-progress-bar</h1>
      <section className="stepped-progress-bar-num3">
        <header>&lt;SteppedProgressBar num="3"&gt;</header>
        <div className="content"><SPB num={3}/></div>
      </section>
      <section className="stepped-progress-bar-num3-cangoback">
        <header>&lt;SteppedProgressBar num="3" canGoBack&gt;</header>
        <div className="content"><SPB num={3} canGoBack /></div>
      </section>
      <section className="stepped-progress-bar-num4">
        <header>&lt;SteppedProgressBar num="4"&gt;</header>
        <div className="content"><SPB num={4} /></div>
      </section>
      <section className="stepped-progress-bar-num5">
        <header>&lt;SteppedProgressBar num="5"&gt;</header>
        <div className="content"><SPB num={5} /></div>
      </section>
      <section className="stepped-progress-bar-labels">
        <header>&lt;SteppedProgressBar labels="..."&gt;</header>
        <div className="content"><SPB labels={['first', 'second', 'third', 'fourth']} /></div>
      </section>
    </div>
  }
}