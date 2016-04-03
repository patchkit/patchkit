export default {
  "auth": "async",
  "address": "sync",
  "manifest": "sync",
  "get": "async",
  "createFeedStream": "source",
  "createLogStream": "source",
  "messagesByType": "source",
  "createHistoryStream": "source",
  "createUserStream": "source",
  "links": "source",
  "relatedMessages": "async",
  "add": "async",
  "publish": "async",
  "getAddress": "sync",
  "getLatest": "async",
  "latest": "source",
  "latestSequence": "async",
  "whoami": "sync",
  "usage": "sync",
  "gossip": {
    "peers": "sync",
    "add": "sync",
    "connect": "async",
    "changes": "source"
  },
  "friends": {
    "all": "async",
    "hops": "async",
    "createFriendStream": "source",
    "get": "sync"
  },
  "replicate": {
    "changes": "source"
  },
  "blobs": {
    "get": "source",
    "has": "async",
    "add": "sink",
    "rm": "async",
    "ls": "source",
    "want": "async",
    "wants": "sync",
    "changes": "source"
  },
  "invite": {
    "create": "async",
    "accept": "async",
    "use": "async"
  },
  "block": {
    "isBlocked": "sync"
  },
  "private": {
    "publish": "async",
    "unbox": "sync"
  },
  "patchwork": {
    "createEventStream": "source",
    "getIndexCounts": "async",
    "createInboxStream": "source",
    "createBookmarkStream": "source",
    "createMentionStream": "source",
    "createNoticeStream": "source",
    "createPrivatePostStream": "source",
    "createPublicPostStream": "source",
    "createChannelStream": "source",
    "createSearchStream": "source",
    "markRead": "async",
    "markUnread": "async",
    "markAllRead": "async",
    "toggleRead": "async",
    "isRead": "async",
    "bookmark": "async",
    "unbookmark": "async",
    "toggleBookmark": "async",
    "isBookmarked": "async",
    "getChannels": "async",
    "pinChannel": "async",
    "unpinChannel": "async",
    "toggleChannelPinned": "async",
    "watchChannel": "async",
    "unwatchChannel": "async",
    "toggleChannelWatched": "async",
    "addFileToBlobs": "async",
    "saveBlobToFile": "async",
    "useLookupCode": "source",
    "getMyProfile": "async",
    "getProfile": "async",
    "getAllProfiles": "async",
    "getNamesById": "async",
    "getIdsByName": "async",
    "getName": "async",
    "getActionItems": "async"
  }
}