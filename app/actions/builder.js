// @flow
import type { builderStateType } from '../reducers/builder';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: () => void, getState: () => builderStateType) => {
    const { builder } = getState();

    if (builder % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
