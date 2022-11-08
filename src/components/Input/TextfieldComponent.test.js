/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { events, triggers, config } from './TextfieldComponent';
import { Textfield } from './Input';
import { createComponentClassTests, createComponentRegisterTests } from '../../eventfull-core-runtime/util/TestUtil';
import { layout } from '../../eventfull-core-runtime'

describe('TextfieldComponent protocol', () => {
  const tests = createComponentClassTests(
    layout.Manager.ComponentManager.getInstance(),
    config,
    [
      'submit',
      'enable',
      'disable',
      'clear',
      'populate',
      'replace',
    ],
    [
      'changed',
      'enabled',
      'disabled',
      'submitted',
      'cleared',
      'populated',
      'replaced',
      'invalidated',
      'validated'
    ]);
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('Textfield register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    'textfield',
    Textfield,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
