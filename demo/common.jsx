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
      <section className="msglink">
        <header>&lt;MsgLink&gt;</header>
        <div className="content">
          <p className="example"><Common.MsgLink id={msgId}>Message 1</Common.MsgLink></p>
          <p className="example"><Common.MsgLink id={msgId} name="Message 2" /></p>
          <p className="example"><Common.MsgLink id={msgId} /></p>
        </div>
      </section>
      <section className="bloblink">
        <header>&lt;BlobLink&gt;</header>
        <div className="content">
          <p className="example"><Common.BlobLink id={blobId}>Blob 1</Common.BlobLink></p>
          <p className="example"><Common.BlobLink id={blobId} name="Blob 2" /></p>
          <p className="example"><Common.BlobLink id={blobId} /></p>
        </div>
      </section>
      <section className="userlink">
        <header>&lt;UserLink&gt;</header>
        <div className="content">
          { userIds.map(id => {
            return <div className="example" key={id}><Common.UserLink id={id} /></div>
          }) }
        </div>
      </section>
      <section className="userlinks">
        <header>&lt;UserLinks&gt;</header>
        <div className="content">
          <p className="example">No limit:<br/><Common.UserLinks ids={userIds} /></p>
          <p className="example">Limited to 2:<br/><Common.UserLinks ids={userIds} limit={2} /></p>
        </div>
      </section>
      <section className="userpic">
        <header>&lt;UserPic&gt;</header>
        <div className="content">
          { userIds.slice(0,2).map(id => {
            return <div className="example" key={id}><Common.UserPic id={id} fallback="fallback.png" /></div>
          }) }
          <div className="example"><Common.UserPic id={userIds.slice(-1)[0]} fallback="fallback.png" /></div>
        </div>
      </section>
      <section className="userpics">
        <header>&lt;UserPics&gt;</header>
        <div className="content">
          <p className="example">No limit:<br/><Common.UserPics ids={userIds} fallback="fallback.png" /></p>
          <p className="example">Limited to 2:<br/><Common.UserPics ids={userIds} limit={2} fallback="fallback.png" /></p>
        </div>
      </section>
      <section className="nicedate">
        <header>&lt;NiceDate&gt;</header>
        <div className="content">
          <p className="example"><Common.NiceDate ts={Date.now()} /></p>
          <p className="example"><Common.NiceDate ts={Date.now()} ago /></p>
        </div>
      </section>
      <section className="hovershifter">
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