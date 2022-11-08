/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */
import { GridColumn } from './Grid';
import { events, triggers, config } from './GridColumnComponent';
import { createComponentClassTests, createComponentRegisterTests } from '../../eventfull-core-runtime/util/TestUtil';
import { layout } from '../../eventfull-core-runtime'

describe('GridColumnComponent protocol', () => {
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

describe('GridColumn register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    'grid-columns',
    GridColumn,
    triggers,
    events,
    config,
    { 'grid-column': {} }
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
