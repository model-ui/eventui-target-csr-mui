import React from 'react';
// storybook action handler
import { action } from '@storybook/addon-actions'

// test utils
import { util } from 'eventfull-core-runtime'
import registerComponents from '../Components';
// test data
import { TestTextLatin_SummaryArray } from '../../test/data/TestText.js'
// components
import { Accordion } from './Grid';
import { triggers, events, config } from './AccordionComponent'
import { layout } from 'eventfull-core-runtime'

/// Event addon

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: util.StoryUtil.createStoryArgumentTypesFromSchema(config.options)
};

export const Basic = (args) => {

  const props = {
    id: 'BasicAccordion_id',
    type: 'accordion',
    data: [{
      'id': 'id1',
      'title': 'Title 1',
      'content': 'Some text here 1'
    }, {
      'id': 'id2',
      'title': 'Title 2',
      'disabled': true,
      'content': 'Some text here 2'
    }, {
      'id': 'select_value',
      'title': 'Title 3',
      'content': 'Some text here 3'
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
      {util.StoryUtil.prepStoryComponent(layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events)}
      <Accordion {...props} />
    </div>
  );
};
Basic.args = {
}

export const AccordionText = (args) => {

  const props = {
    id: 'AccordionText_id',
    type: 'accordion',
    data: TestTextLatin_SummaryArray,
    config: { options: args },
    schema: {}
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events)}
      <Accordion {...props} />
    </div>
  );
};
AccordionText.args = {
}