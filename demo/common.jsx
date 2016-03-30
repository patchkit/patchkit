import React from 'react'
import * as Common from '../common'
import users from '../fixtures/users'

const msgId = '%MjdKnMFvD4Kgt04zNZFpo36FTsDomc2UE5gHrvsqeIM=.sha256'
const unknownUserId = '@sbfmaA2g/MgGYwSZqnlH8xNOnevTjWsbmelNnB706zA=.ed25519'
const blobId = '&/hEw0FIbP0XioJGQ5DZpWEbBNnlDsi2AqLhLfZ+icjM=.sha256'

export default class CommonView extends React.Component {
  render() {
    const userIds = Object.keys(users.profiles).concat([unknownUserId])
    return <div>
      <h1>patchkit/common</h1>
      <section className="common-msglink">
        <header>&lt;MsgLink id="..."&gt;</header>
        <div className="content"><Common.MsgLink id={msgId} /></div>
      </section>
      <section className="common-msglink-children">
        <header>&lt;MsgLink id="..."&gt;Message 1&lt;/MsgLink&gt;</header>
        <div className="content"><Common.MsgLink id={msgId}>Message 1</Common.MsgLink></div>
      </section>
      <section className="common-msglink-name">
        <header>&lt;MsgLink id="..." name="Message 2"&gt;</header>
        <div className="content"><Common.MsgLink id={msgId} name="Message 2" /></div>
      </section>
      <section className="common-bloblink">
        <header>&lt;BlobLink id="..."&gt;</header>
        <div className="content"><Common.BlobLink id={blobId} /></div>
      </section>
      <section className="common-bloblink-children">
        <header>&lt;BlobLink id="..."&gt;Blob 1&lt;/BlobLink&gt;</header>
        <div className="content"><Common.BlobLink id={blobId}>Blob 1</Common.BlobLink></div>
      </section>
      <section className="common-bloblink-name">
        <header>&lt;BlobLink id="..." name="Blob 2"&gt;</header>
        <div className="content"><Common.BlobLink id={blobId} name="Blob 2" /></div>
      </section>
      <section className="common-userlink">
        <header>&lt;UserLink id="..."&gt;</header>
        <div className="content"><Common.UserLink id={userIds[0]} /></div>
      </section>
      <section className="common-userlink-override">
        <header>&lt;UserLink id="..."&gt; (name override)</header>
        <div className="content"><Common.UserLink id={userIds[3]} /></div>
      </section>
      <section className="common-userlink-noname">
        <header>&lt;UserLink id="..."&gt; (no name)</header>
        <div className="content"><Common.UserLink id={userIds[4]} /></div>
      </section>
      <section className="common-userlinks">
        <header>&lt;UserLinks ids="..."&gt;</header>
        <div className="content"><Common.UserLinks ids={userIds} /></div>
      </section>
      <section className="common-userlinks-limit">
        <header>&lt;UserLinks ids="..." limit="2"&gt;</header>
        <div className="content"><Common.UserLinks ids={userIds} limit={2} /></div>
      </section>
      <section className="common-userpic">
        <header>&lt;UserPics id="..."&gt;</header>
        <div className="content"><Common.UserPic id={userIds[0]} /></div>
      </section>
      <section className="common-userpic-notfound">
        <header>&lt;UserPic id="..."&gt; (not found)</header>
        <div className="content"><Common.UserPic id={userIds[userIds.length - 1]} /></div>
      </section>
      <section className="common-userpics">
        <header>&lt;UserPics ids="..."&gt;</header>
        <div className="content"><Common.UserPics ids={userIds} /></div>
      </section>
      <section className="common-userpics-limit">
        <header>&lt;UserPics ids="..." limit="2"&gt;</header>
        <div className="content"><Common.UserPics ids={userIds} limit={2} /></div>
      </section>
      <section className="common-nicedate">
        <header>&lt;NiceDate&gt;</header>
        <div className="content">
          <p className="example"><Common.NiceDate ts={Date.now()} /></p>
          <p className="example"><Common.NiceDate ts={Date.now()} ago /></p>
        </div>
      </section>
      <section className="common-hovershifter">
        <header>&lt;HoverShifter&gt;</header>
        <div className="content">
          <div className="example">
            <Common.HoverShifter>
              <div>Unhovered</div>
              <div>Hovered</div>
            </Common.HoverShifter>
          </div>
        </div>
      </section>
    </div>
  }
}