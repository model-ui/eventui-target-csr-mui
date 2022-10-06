/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { Accordion } from './Grid';
import { events, triggers, config } from './AccordionComponent';
import { createComponentClassTests, createComponentRegisterTests } from '../../test/utils/TestUtil';
import { layout } from 'eventfull-core-runtime'

describe('AccordionComponent protocol', () => {
  const tests = createComponentClassTests(
    layout.Manager.ComponentManager.getInstance(),
    config,
    [
      'submit',
      'replace',
      'push',
      'push_front',
      'delete',
      'pop',
      'pop_front',
      'select',
      'clear'
    ], [
    'changed',
    'replacing',
    'replaced',
    'submitted',
    'deleted',
    'pushing',
    'pushed',
    'selected',
    'deselected',
    'clearing',
    'cleared'
  ]);
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('Accordion register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    'accordion',
    Accordion,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
