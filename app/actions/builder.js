// @flow
import { MainStateType } from '../types/types';

export function addModule(moduleType: string, id: number) {
  return {
    type: 'ADD_MODULE',
    moduleType,
    id
  };
}

export function removeModule(id: number) {
  return {
    type: 'REMOVE_MODULE',
    id
  };
}

export function removeLastModule() {
  return (dispatch: () => void, getState: () => MainStateType) => {
    const { modules } = getState();

    if (modules.length <= 0) {
      return;
    }

    dispatch(removeModule(modules.length - 1));
  };
}

export function addNewModule() {
  return (dispatch: () => void, getState: () => MainStateType) => {
    const { modules } = getState();

    let moduleId = 0;

    if (modules.length > 0) {
      moduleId = modules[modules.length - 1].id + 1;
    }

    dispatch(addModule('full-width', moduleId));
  };
}
