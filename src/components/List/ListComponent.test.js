/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { events, triggers, config } from './ListComponent'
import { List } from './List'
import { createComponentClassTests, createComponentRegisterTests } from '../../eventfull-core-runtime/util/TestUtil';
import { layout } from '../../eventfull-core-runtime'

describe('ListComponent protocol', () => {
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

describe('List register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    'list',
    List,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});

