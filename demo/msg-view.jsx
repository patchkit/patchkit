import React from 'react'
import * as Content from '../msg-view/content'
import * as msgs from '../fixtures/msgs'

export default class MsgViewView extends React.Component {
  render() {
    const postMsg = msgs.posts[0]
    const contactMsg = msgs.contacts[0]
    return <div>
      <section className="msg-view-content-block-post">
        <header>&lt;msg-view/Content.Block&gt; (post)</header>
        <div className="content">
          <div className="example"><Content.Block msg={postMsg} /></div>
        </div>
      </section>
      <section className="msg-view-content-inline-post">
        <header>&lt;msg-view/Content.Inline&gt; (post)</header>
        <div className="content">
          <div className="example"><Content.Inline msg={postMsg} /></div>
        </div>
      </section>
      <section className="msg-view-content-block-post-raw">
        <header>&lt;msg-view/Content.Block&gt; (post raw)</header>
        <div className="content">
          <div className="example"><Content.Block msg={postMsg} forceRaw /></div>
        </div>
      </section>
      <section className="msg-view-content-inline-post-raw">
        <header>&lt;msg-view/Content.Inline&gt; (post raw)</header>
        <div className="content">
          <div className="example"><Content.Inline msg={postMsg} forceRaw /></div>
        </div>
      </section>
      <section className="msg-view-content-block-contact">
        <header>&lt;msg-view/Content.Block&gt; (contact)</header>
        <div className="content">
          <div className="example"><Content.Block msg={contactMsg} /></div>
        </div>
      </section>
      <section className="msg-view-content-inline-contact">
        <header>&lt;msg-view/Content.Inline&gt; (contact)</header>
        <div className="content">
          <div className="example"><Content.Inline msg={contactMsg} /></div>
        </div>
      </section>
      <section className="msg-view-content-block-contact">
        <header>&lt;msg-view/Content.Block&gt; (contact raw)</header>
        <div className="content">
          <div className="example"><Content.Block msg={contactMsg} forceRaw /></div>
        </div>
      </section>
      <section className="msg-view-content-inline-contact">
        <header>&lt;msg-view/Content.Inline&gt; (contact raw)</header>
        <div className="content">
          <div className="example"><Content.Inline msg={contactMsg} forceRaw /></div>
        </div>
      </section>
    </div>
  }
}