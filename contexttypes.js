import React from 'react'
export default {
  ssb: React.PropTypes.object,
  toUrl: React.PropTypes.func,
  user: React.PropTypes.shape({
    id: React.PropTypes.string,
    profile: React.PropTypes.object
  }),
  users: React.PropTypes.shape({
    names: React.PropTypes.object,
    profiles: React.PropTypes.object
  })
}