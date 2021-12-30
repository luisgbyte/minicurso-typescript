// S => State
// Type => Type
// K => Key
// V => Value
// E => Element

type numOrStr = number | string

function useState<S extends numOrStr>() {
  let state: S;

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState<number>();

newState.setState("foo");
console.log(newState.getState());

newState.setState(456);
console.log(newState.getState());

newState.setState("foo");
console.log(newState.getState());
