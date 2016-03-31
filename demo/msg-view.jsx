import React from 'react'
import * as Content from '../msg-view/content'
import * as msgs from 'patchkit-fixtures/msgs'

export default class MsgViewView extends React.Component {
  render() {
    const postMsg = msgs.posts[0]
    const contactMsg = msgs.contacts[0]
    return <div>
      <h1>patchkit/msg-view/content</h1>
      <section className="msg-view-content-block-post">
        <header>&lt;Block msg="..."&gt; (post)</header>
        <div className="content">
          <div className="example"><Content.Block msg={postMsg} /></div>
        </div>
      </section>
      <section className="msg-view-content-inline-post">
        <header>&lt;Inline msg="..."&gt; (post)</header>
        <div className="content">
          <div className="example"><Content.Inline msg={postMsg} /></div>
        </div>
      </section>
      <section className="msg-view-content-block-post-raw">
        <header>&lt;Block msg="..." forceRaw&gt; (post)</header>
        <div className="content">
          <div className="example"><Content.Block msg={postMsg} forceRaw /></div>
        </div>
      </section>
      <section className="msg-view-content-inline-post-raw">
        <header>&lt;Inline msg="..." forceRaw&gt; (post)</header>
        <div className="content">
          <div className="example"><Content.Inline msg={postMsg} forceRaw /></div>
        </div>
      </section>
      <section className="msg-view-content-block-contact">
        <header>&lt;Block msg="..."&gt; (contact)</header>
        <div className="content">
          <div className="example"><Content.Block msg={contactMsg} /></div>
        </div>
      </section>
      <section className="msg-view-content-inline-contact">
        <header>&lt;Inline msg="..."&gt; (contact)</header>
        <div className="content">
          <div className="example"><Content.Inline msg={contactMsg} /></div>
        </div>
      </section>
      <section className="msg-view-content-block-contact">
        <header>&lt;Block msg="..." forceRaw&gt; (contact)</header>
        <div className="content">
          <div className="example"><Content.Block msg={contactMsg} forceRaw /></div>
        </div>
      </section>
      <section className="msg-view-content-inline-contact">
        <header>&lt;Inline msg="..." forceRaw&gt; (contact)</header>
        <div className="content">
          <div className="example"><Content.Inline msg={contactMsg} forceRaw /></div>
        </div>
      </section>
    </div>
  }
}