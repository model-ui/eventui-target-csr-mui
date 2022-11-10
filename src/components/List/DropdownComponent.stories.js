import React from 'react';
// storybook action handler
import { action } from '@storybook/addon-actions'

// test utils
import { util } from 'eventfull-core-runtime'
import registerComponents from '../Components';
// components
import { Dropdown } from './List';
import { triggers, events, config } from './DropdownComponent'
import { layout } from 'eventfull-core-runtime'

/// Event addon

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: util.StoryUtil.createStoryArgumentTypesFromSchema(config.options)
};

export const Autocomplete = (args) => {

  const props = {
    id: 'Autocomplete_id',
    type: 'dropdown',
    data: [{
      'id': 'id1',
      'title': 'title 1',
    }, {
      'id': 'id2',
      'title': 'title 2',
    }, {
      'id': 'select_value',
      'title': 'select_value',
    }, {
      'id': 'delete_value',
      'title': 'delete_value',
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events)}
      <Dropdown {...props} />
    </div>
  );
};
Autocomplete.args = {
  label: 'Your options',
  variant: 'outlined'
}