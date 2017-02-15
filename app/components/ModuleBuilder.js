// @flow
import React, { Component } from 'react';
import type { ModulesStateType, ModuleStateType } from '../types/types';

class ModuleBuilder extends Component {
  props: {
   addNewModule: () => void,
   removeLastModule: () => void,
   modules: ModulesStateType
  };

  render() {
    console.log(this.props);
    const { addNewModule, removeLastModule, modules } = this.props;
    const modulesArr = modules.map((module: ModuleStateType) =>
      <li key={module.id}>
        <p>{module.moduleType}</p>
      </li>
    );
    return (
      <div>
        <div>
          <div>
            <ul>{modulesArr}</ul>
          </div>
          <div>
            <button onClick={addNewModule}>
              <i className="fa fa-plus" />
            </button>
          </div>
          <div>
            <button onClick={removeLastModule}>
              <i className="fa fa-minus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModuleBuilder;
