import React from 'react';
// storybook action handler
import { action } from '@storybook/addon-actions'
import registerComponents from '../Components';

// components
import { Tree } from './Tree';
import { triggers, events, config } from './TreeComponent'
import { example_generators, example_tree_array_items } from './data';
import { layout } from 'eventfull-core-runtime'
// import { util } from 'eventfull-core-runtime'
import { util } from 'eventfull-core-runtime'

/// Event addon
export default {
  title: 'Components/Tree',
  component: Tree,
  argTypes: util.StoryUtil.createStoryArgumentTypesFromSchema(config.options)
};


export const Basic = (args) => {
  const props = {
    id: 'TreeBasic_id',
    type: 'tree',
    data: example_tree_array_items,
    config: { options: args },
    schema: {}
  }
  return (
    <div>
      {util.StoryUtil.prepStoryComponent(layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events, { triggers: example_generators })}
      <Tree {...props} />
    </div>
  );
};
Basic.args = {
  multiSelect: config.options.properties.multiSelect.default
}