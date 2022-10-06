/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { events, triggers, config } from './AvatarComponent'
import { Avatar } from './Avatar'
import { createComponentClassTests, createComponentRegisterTests } from '../../test/utils/TestUtil';

import { ExampleComponent } from 'eventfull-core-runtime'
import { structs } from 'eventfull-core-runtime'
import { layout } from 'eventfull-core-runtime'

describe('AvatarComponent protocol', () => {
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


describe('Avatars register', () => {
  const tests = createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
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
  it('is ListBase', () => {
    expect(structs).toBeTruthy()
    expect(structs.ListBase.events).toBeTruthy()
    expect(structs.ListBase.triggers).toBeTruthy()
    expect(structs.ListBase.StateList).toBeTruthy()
    expect(structs.ListBase.ListBase).toBeTruthy()
  })
})
