/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { events, triggers, config } from './AvatarComponent'
import { Avatar } from './Avatar'
import { createComponentClassTests, createComponentRegisterTests } from '../../test/utils/TestUtil';

import { ExampleComponent } from 'eventfull-core-runtime'
// import { getIcon } from 'eventfull-core-runtime/test' // /util/IconUtil'

describe('AvatarComponent protocol', () => {
  const tests = createComponentClassTests(
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


describe('Avatars register', () => {
  const tests = createComponentRegisterTests(
    'avatars',
    Avatar,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('ExampleComponents', () => {
  it('is exported', () => {
    expect(ExampleComponent).toBeTruthy()
  })
  it('is IconUtil exp', () => {
    // expect(getIcon).toBeTruthy()
  })
  
})
