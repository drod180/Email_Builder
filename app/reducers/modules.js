// @flow
import { ModuleStateType, ModulesStateType } from '../types/types';

function moduleReducer(state: ModuleStateType = { moduleType: 'default', id: 0 },
  action: Object): ModuleStateType {
  switch (action.type) {
    case 'ADD_MODULE':
      return {
        moduleType: action.moduleType,
        id: action.id
      };
    default:
      return state;
  }
}

export default function modulesReducer(state: ModulesStateType = [],
  action: Object): ModulesStateType {
  switch (action.type) {
    case 'ADD_MODULE':
      return [
        ...state,
        moduleReducer(undefined, action)
      ];
    case 'REMOVE_MODULE':
      console.log(action);
      return state.filter(module => module.id !== action.id);
    default:
      return state;
  }
}
