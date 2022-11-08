import React from 'react';
// storybook action handler
import { action } from '@storybook/addon-actions'

// test utils
import { prepStoryComponent, createStoryArgumentTypesFromSchema } from '../../eventfull-core-runtime/util/StoryUtil'
import registerComponents from '../Components';
// test data
import { TestTextLatin_SummaryArray } from '../../test/data/TestText.js'

// components
import { Container } from './Grid';
import { triggers, events, config } from './ContainerComponent'
import { layout } from '../../eventfull-core-runtime'

/// Event addon

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: createStoryArgumentTypesFromSchema(config.options)
};

export const Basic = (args) => {

  const props = {
    id: 'ContainerBasic_id',
    type: 'container',
    data: [{
      'id': 'id1',
      'title': 'Title 1',
      'content': 'Some text here 1'
    }, {
      'id': 'id2',
      'title': 'Title 2',
      'content': 'Some text here 2'
    }, {
      'id': 'select_value',
      'title': 'Title 3',
      'content': 'Some text here 3',
      'disabled': true
    }, {
      'id': 'delete_value',
      'title': 'Title 4',
      'content': 'Some text here 4'
    }],
    config: { options: args },
    schema: {}
  }

  return (
    <div>
      {prepStoryComponent(layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events)}
      <Container {...props} />
    </div>
  );
};
Basic.args = {
}


export const BasicText = (args) => {


  const props = {
    id: 'ContainerBasicText_id',
    type: 'container',
    data: TestTextLatin_SummaryArray,
    config: { options: args },
    schema: {}
  }

  return (
    <div>
      {prepStoryComponent(layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events)}
      <Container {...props} />
    </div>
  );
};
BasicText.args = {
}
