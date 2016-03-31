import React from 'react'
import * as Common from '../common'
import users from 'patchkit-fixtures/users'

const msgId = '%MjdKnMFvD4Kgt04zNZFpo36FTsDomc2UE5gHrvsqeIM=.sha256'
const unknownUserId = '@sbfmaA2g/MgGYwSZqnlH8xNOnevTjWsbmelNnB706zA=.ed25519'
const blobId = '&/hEw0FIbP0XioJGQ5DZpWEbBNnlDsi2AqLhLfZ+icjM=.sha256'

export default class CommonView extends React.Component {
  render() {
    const userIds = Object.keys(users.profiles).concat([unknownUserId])
    return <div>
      <h1>patchkit/common</h1>
      <section className="common-nicedate">
        <header>&lt;NiceDate ts="..."&gt;</header>
        <div className="content"><Common.NiceDate ts={Date.now()} /></div>
      </section>
      <section className="common-nicedate-ago">
        <header>&lt;NiceDate ts="..." ago&gt;</header>
        <div className="content"><Common.NiceDate ts={Date.now()} ago /></div>
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