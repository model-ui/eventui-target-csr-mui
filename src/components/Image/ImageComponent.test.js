/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { events, triggers, config } from './ImageComponent'
import { Image } from './Image'
import { createComponentClassTests, createComponentRegisterTests } from '../../eventfull-core-runtime/util/TestUtil';
import { layout } from '../../eventfull-core-runtime'

describe('ImageComponent protocol', () => {
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

describe('Image register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    'images',
    Image,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
