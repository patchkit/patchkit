import React from 'react'
export default {
  user: React.PropTypes.shape({
    id: React.PropTypes.string,
    profile: React.PropTypes.object
  }),
  users: React.PropTypes.shape({
    names: React.PropTypes.object,
    profiles: React.PropTypes.object
  })
}