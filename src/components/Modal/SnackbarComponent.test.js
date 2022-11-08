/**
 * MenuComponent tests
 * Testing DD events and actions integrety
 */

import { events, triggers, config } from './SnackbarComponent'
import { PopupToaster } from './Modal'
import { createComponentClassTests, createComponentRegisterTests } from '../../eventfull-core-runtime/util/TestUtil';
import { layout } from '../../eventfull-core-runtime'

describe('SnackbarComponent protocol', () => {
  const tests = createComponentClassTests(
    layout.Manager.ComponentManager.getInstance(),
    config,
    [
      'show',
      'close'
    ], [
    'showing',
    'closed',
    'closing'
  ]
  );
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('Snackbar register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    'popup-toaster',
    PopupToaster,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});