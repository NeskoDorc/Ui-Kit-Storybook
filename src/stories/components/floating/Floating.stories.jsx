import React from 'react';

import { Floating } from './Floating';

export default {
  title: 'Example/Floating',
  component: Floating,
};

const Template = (args) => (
<div>
<div className='buttons-container'>
     
    <Floating   label='primary'  {...args} />
    <Floating  label='success' variant='success'  {...args}/>
    <Floating label='info' variant='info' {...args} />
    <Floating label='default '    {...args}/>   
   
    </div>
    <div className='buttons-container'>
   
    <Floating label='danger' variant='danger'  {...args}/>
    <Floating label='warning' variant='warning'   {...args}/>
    <Floating label='dark' variant='dark'   {...args}/>
    </div>
    </div>
);

export const Floatings = Template.bind({});
Floatings.args = {
 
};


