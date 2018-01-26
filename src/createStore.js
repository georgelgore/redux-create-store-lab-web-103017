export default function createStore(reducer) {
  // add your code here
  let state = 0;

  const dispatch = (action = { type: "@@INIT" }) => {
    state = reducer(state, action);
    render();
  };

  let getState = () => {
    return state;
  };

  return { dispatch, getState };
}

function render() {
  const container = document.getElementById("container");
}
