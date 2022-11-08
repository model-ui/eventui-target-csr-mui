import React from 'react';
// storybook action handler
import { action } from '@storybook/addon-actions'
import registerComponents from '../Components';
// test utils
import { createEventTriggers, createWatchList, createLayoutViewArgumentTypes } from '../../eventfull-core-runtime/util/StoryUtil'

// components
import { Snackbar } from './Menu';
import SnackbarComponent, { triggers, events, config } from './SnackbarComponent'


/// Event addon
export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: createLayoutViewArgumentTypes(config)
};

export const Basic = (args) => {
  const test_handler = 'MenuSnackbar_test';
  const component_id = 'basicmSnackbar1_id';
  const component_inst = (
    <div>
      {createEventTriggers(component_id, triggers, {
        open: {

        }
      }, action)}
      <SnackbarComponent
        id={component_id}
        data={[]}
        config={{ options: args }}
        schema={{}}
      />
    </div>
  );

  createWatchList(test_handler, component_id, Object.keys(events()), action);

  return component_inst;
};
Basic.args = {
  severity: config.options.severity.default,
  duration: config.options.duration.default,
  vertical: config.options.vertical.default,
  horizontal: config.options.horizontal.default,
}