import { routerReducer as routing } from 'react-router-redux';

export type ModuleStateType = {
  moduleType: string,
  id: number
};

export type ModulesStateType = Array<ModuleStateType>;

type AddModuleAction = {
  type: string,
  moduleType: string
};

type RemoveModuleAction = {
  type: string,
  id: number
};

type ReduxInitAction = {type: '@@redux/INIT'};

export type ModuleAction = ReduxInitAction | AddModuleAction | RemoveModuleAction;

export type MainStateType = {
  modules: ModulesStateType,
  routing: typeof routing
};
