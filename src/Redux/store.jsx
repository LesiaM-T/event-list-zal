function createStore(rootReduser, initialState) {
  const state = rootReduser(initialState, { type: '__INIT__' });
  const subscribers = [];
  return {
    dispatch(action) {
      rootReduser(state, action);
      subscribers.forEach(sub => sub());
    },

    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}
export default createStore();
