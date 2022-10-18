
//////////////////////////////// table

const inventory_schema = {
  $id: 'https://example.com/address.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: 'An address similar to http://microformats.org/wiki/h-card',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    site: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    group: {
      type: 'string'
    },
    count: {
      type: 'integer'
    }
  },
  required: [
    'id',
    'title',
    'count',
    'category',
    'group'
  ],
  type: 'object'
}

const inventory_data = [
  {
    id: 'jondoe',
    name: 'title 1',
    site: 'site 1',
    category: 'meat',
    group: 'food',
    count: 12
  },
  {
    id: 'id2',
    name: 'title 2',
    site: 'site 1',
    category: 'meat',
    group: 'food',
    count: 9
  },
  {
    id: 'select_value',
    site: 'site 2',
    name: 'select_value',
    category: 'fruit',
    group: 'food',
    count: 2
  },
  {
    id: 'delete_value',
    site: 'site 1',
    name: 'delete_value',
    category: 'fruit',
    group: 'food',
    count: 6
  }
]

const page_inventory_table = {
  data: {
    items: inventory_data
  },
  id: 'inventory-table',
  schema: inventory_schema,
  type: 'table',
  config: {
    options: {}
  }
}

//////////////////////////////// button

const buttons = {
  id: 'TextButtons_id',
  type: 'buttons',
  data: [{
    'id': 'id1',
    'title': 'title 1',
  }, {
    'id': 'id2',
    'disabled': true,
    'title': 'title 2',
  }, {
    'id': 'id3',
    'disabled': false,
    'title': 'title 3',
  }],
  config: { options: {} },
  schema: {}
}

//////////////////////////////// avatars

const avatars = {
  id: 'avatarbasic_id',
  type: 'avatars',
  data: [{
    'id': 'id1',
    'heading': 'heading 1',
    'title': 'title 1',
    'image': 'https://mybluerobot.com/wp-content/plugins/svg-avatars-generator/data/custom-img/girl.png'
  }, {
    'id': 'id2',
    'title': 'title 2',
    'image': 'https://avatars2.githubusercontent.com/u/36167650?s=400&v=4'
  }, {
    'id': 'select_value',
    'title': 'select_value',
    'image': 'https://cdn.vectorstock.com/i/1000x1000/71/98/male-avatar-profile-icon-round-man-face-vector-18307198.jpg'
  }, {
    'id': 'delete_value',
    'title': 'delete_value',
    'image': 'http://d24b33.medialib.edu.glogster.com/avatars/users/1/1/70/99/1709937.png?v=1297145784'
  }],
  config: { options: {} },
  schema: {}
}

//////////////////////////////// accordion

const panel_workspace_tabs_accordion_1 = {
  id: 'panel_workspace_tabs_accordion_1_id',
  type: 'accordion',
  data: [{
    'id': 'id1',
    'title': 'Buttons',
    'content': buttons
  }, {
    'id': 'id2',
    'title': 'Disabled item',
    'disabled': true,
    'content': 'Some text here 2'
  }, {
    'id': 'id3',
    'title': 'Avatars',
    'content': avatars
  }, {
    'id': 'delete_value',
    'title': 'Title 4',
    'content': 'Some text here 4'
  }],
  config: {options: {}}
}

//////////////////////////////// tabs

const panel_target_tabs = {
  data: [{
    'id': 'panel_target_tab_1_id',
    'title': 'Tab 1',
    'content': 'Tab 1 content'
  },{
    'id': 'panel_target_tab_2_id',
    'title': 'Tab 2',
    'content': 'Tab 2 content'
  },{
    'id': 'panel_target_tab_3_id',
    'title': 'Tab 3',
    'content': 'Tab 3 content'
  }],
  id: 'panel_target_tabs_id',
  schema: {},
  type: 'tabs',
  config: {
    options: {

    }
  }
}

////////////////////////////////

const editor_layout = {
  data: [{
    'gridXS': 2,
    'gridSM': 2,
    'hidden': false,
    'id': 'panel_workspace_tabs_accordion_1_id',
    'content': panel_workspace_tabs_accordion_1
  }, {
    'gridXS': 5,
    'gridSM': 5,
    'hidden': false,
    'id': 'inventory_table_id',
    'content': page_inventory_table
  }, {
    'gridXS': 5,
    'gridSM': 5,
    'hidden': false,
    'id': 'panel_target_tabs_id',
    'content': panel_target_tabs
  }],
  id: 'f92ec0aa31e145679d3a7d81a862c5b055f88946',
  schema: {},
  type: 'grid-columns',
  config: {
    options: {
      spacing: 1,
      alignItems: 'stretch',
      gridSM: 2,
      gridXS: 2,
      justifyContent: "center",

    }
  }
}

///////////////////////////////////////////////// show friends list - ends

export const layout = {
  'root': [
    editor_layout
  ]
};


////////////////////////////////////////////////////////////////
// Dialogs
////////////////////////////////////////////////////////////////

export const dialogs = []