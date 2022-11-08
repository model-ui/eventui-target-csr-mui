import React from 'react';
// storybook action handler
import { action } from '@storybook/addon-actions'

// test utils
import { prepStoryComponent, createStoryArgumentTypesFromSchema } from '../../eventfull-core-runtime/util/StoryUtil'
import registerComponents from '../Components';
// components
import TextfieldComponent from './TextfieldComponent';
import { triggers, events, config } from './TextfieldComponent'
import { layout } from '../../eventfull-core-runtime'

/// Event addon
export default {
  title: 'Components/Textfield',
  component: TextfieldComponent,
  argTypes: createStoryArgumentTypesFromSchema(config.options)
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
      {prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events, { triggers: { populate: { value: "My new populated value" } } }
      )}
      <TextfieldComponent {...props} />
    </div>
  );
};

TextfieldBasic.args = {
}
