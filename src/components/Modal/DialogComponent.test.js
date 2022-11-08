/**
 * DialogComponent tests
 * Testing DD events and actions integrety
 */

import { DialogComponent, events, triggers, config } from './DialogComponent'
import { createComponentClassTests, createComponentRegisterTests } from '../../eventfull-core-runtime/util/TestUtil';
import { layout } from '../../eventfull-core-runtime'

describe('DialogComponent protocol', () => {
  const tests = createComponentClassTests(
    layout.Manager.ComponentManager.getInstance(),
    config,
    ['show', 'close'],
    ['showing', 'closed', 'confirmed']
  );
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('Dialog register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    'dialog',
    DialogComponent,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
