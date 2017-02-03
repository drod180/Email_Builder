// @flow
import { UPDATE_MODULE_COUNT } from '../actions/builder';

export type builderStateType = {
  state: number
};

type actionType = {
  type: string
};

export default function builder(state: moduleCount = 1, action: actionType) {
  switch (action.type) {
    case UPDATE_MODULE_COUNT:
      return state + 1;
    default:
      return state;
  }
}
