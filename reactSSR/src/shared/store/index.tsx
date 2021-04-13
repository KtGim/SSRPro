import { createStore } from 'redux';

const initState = {
  data: ''
}

function reducer(state = initState, action) {
  switch(action.type) {
    case 'CHANGE_DATA': 
      return {
        ...state,
        ...action.payload
      }
    default: 
      return {
        ...state
      }
  }
}

export function clientStore() {
  return createStore(reducer, (window as any).__init_state)
}

export function serverStore() {
  return createStore(reducer)
}