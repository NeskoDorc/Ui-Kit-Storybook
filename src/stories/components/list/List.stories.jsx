import React from 'react';

import { List } from './List';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Lists',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <List {...args} />;

export const Primary2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary2.args = {
  primary: true,
  label: 'Lists',
};

