import React from 'react';
// storybook action handler
import { action } from '@storybook/addon-actions'

// test utils
import { util } from 'eventfull-core-runtime'
import registerComponents from '../Components';
// components
import TextfieldComponent from './TextfieldComponent';
import { triggers, events, config } from './TextfieldComponent'
import { layout } from 'eventfull-core-runtime'

/// Event addon
export default {
  title: 'Components/Textfield',
  component: TextfieldComponent,
  argTypes: util.StoryUtil.createStoryArgumentTypesFromSchema(config.options)
};

export const TextfieldBasic = (args) => {

  const props = {
    id: 'TextfieldBasic_id',
    type: 'textfield',
    data: {
      'value': 'John Doe'
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        value: { type: 'string' }
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events, { triggers: { populate: { value: "My new populated value" } } }
      )}
      <TextfieldComponent {...props} />
    </div>
  );
};

TextfieldBasic.args = {
}
