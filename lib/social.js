// var ip = require('ip')

// does `a` follow `b`?
export function follows (users, a, b) {
  var bp = users.profiles[b]
  if (!bp) return false
  return bp.followers[a]
}

// did `a` flag `b`?
export function flags (users, a, b) {
  var bp = users.profiles[b]
  if (!bp) return false
  return bp.flaggers[a]
}

// get all who `a` follows
export function followeds (users, a) {
  var ids = []
  for (var b in users.profiles) {
    if (follows(users, a, b))
      ids.push(b)
  }
  return ids
}

// get all who `a` follows, but who doesnt follow `a` back
export function followedNonfriends (users, a) {
  var ids = []
  for (var b in users.profiles) {
    if (follows(users, a, b) && !follows(users, b, a))
      ids.push(b)
  }
  return ids
}

// get all who follow `a`
export function followers (users, b) {
  var bp = users.profiles[b]
  if (!bp) return []
  return Object.keys(bp.followers)
}

// get all who follow `a`, but who `a` doesnt follow back
export function followerNonfriends (users, a) {
  var ids = []
  for (var b in users.profiles) {
    if (follows(users, b, a) && !follows(users, a, b))
      ids.push(b)
  }
  return ids
}

// get all who follow `c`, who are followed by `a`
export function followedFollowers (users, a, c, includeA) {
  var ids = []
  for (var b in users.profiles) {
    if (follows(users, a, b) && follows(users, b, c))
      ids.push(b)
  }
  if (includeA && follows(users, a, c))
    ids.push(a)
  return ids
}

// get all who follow `c`, who are not followed by `a`
export function unfollowedFollowers (users, a, c) {
  var ids = []
  for (var b in users.profiles) {
    if (a != b && !follows(users, a, b) && follows(users, b, c))
      ids.push(b)
  }
  return ids
}

// get all who flag `c`, who are followed by `a`
export function followedFlaggers (users, a, c, includeA) {
  var ids = []
  for (var b in users.profiles) {
    if (follows(users, a, b) && flags(users, b, c))
      ids.push(b)
  }
  if (includeA && flags(users, a, c))
    ids.push(a)
  return ids
}

// get all who follow `a`, and who `a` follows back
export function friends (users, a) {
  // all two-way follows
  return followers(users, a).filter(function (b) {
    return follows(users, a, b)
  })
}

// TODO
// // is `id` a pub?
// var isPub =
// export function isPub (id) {
//   // try to find the ID in the peerlist, and see if it's a public peer if so
//   for (var i=0; i < peers.length; i++) {
//     var peer = peers[i]
//     if (peer.key === id && !ip.isPrivate(peer.host))
//       return true
//   }
//   return false
// }

// user-sort by popularity
export function sortByPopularity (users, a, b) {
  if (followedFlaggers(users, user.id, a, true).length)
    return 1 // disqualified!
  if (followedFlaggers(users, user.id, b, true).length)
    return -1 // disqualified!
  return followers(users, b).length - followers(users, a).length
}