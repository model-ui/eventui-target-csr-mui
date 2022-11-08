/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { Dropdown } from './List';
import { events, triggers, config } from './DropdownComponent';
import { createComponentClassTests, createComponentRegisterTests } from '../../eventfull-core-runtime/util/TestUtil';
import { layout } from '../../eventfull-core-runtime'

describe('DropdownComponent protocol', () => {
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
  ]
  );
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('Dropdown register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    'dropdown',
    Dropdown,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
