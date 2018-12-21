export default {
  SET_POST (state, { post }) {
    state.postIds.push(post.id)
    state.posts = { ...state.posts, [post.id]: post }
  },
  MSG (state, msg) {
    console.log(msg)
    state.msgs ? state.msgs.push(msg) : state.msgs = [msg]
    state.arrMsgs = { ...state.arrMsgs, [msg.id]: msg }
  },
  testMutation (state, msg) {
    console.log(msg)
  }
}
