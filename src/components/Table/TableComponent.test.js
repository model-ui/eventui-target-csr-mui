/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { Table } from './Table'
import { events, triggers, config } from './TableComponent';
import { createComponentClassTests, createComponentRegisterTests } from '../../eventfull-core-runtime/util/TestUtil';
import { layout } from '../../eventfull-core-runtime'

describe('TableComponent protocol', () => {
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
  ], null, { items: [] }
  );
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('Table register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    'table',
    Table,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
