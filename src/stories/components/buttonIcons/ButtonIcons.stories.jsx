import React from 'react';

import { ButtonIcons } from './ButtonIcons';
import { Button } from '../button/Button';
import { ButtonOutline } from '../button/ButtonOutline';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';


export default {
 
  title: 'Example/ButtonIcons',
  component: ButtonIcons,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title > Button </Title>
          <Subtitle> Buttons allow users to take actions, and make choices, with a single tap. </Subtitle>
          <Description >Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

Modal windows,
Forms,
Cards,
Toolbars
</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </> 
      ),
    },
  
  },

};

const Template = (args) => (
    <div>
    <div className='buttons-container'>



            <ButtonIcons size='small' height='65' width='65' outlined={true}  radius='50%'  icoSize='3x' regular={true} icons='grin-tears'  variant='primary' {...args} />
            <ButtonIcons size='small' height='65' width='65'   radius='50%'  icoSize='3x' regular={true} icons='grin-tears'  variant='warning' {...args} />
            <ButtonIcons size='small' height='65' width='65' outlined={true}  radius='50%'  icoSize='3x' regular={true} icons='grin-tears'  variant='success' {...args} />
        
          
        
       
        </div>
        
        <div className='buttons-container'>
          <ButtonIcons label='primary' regular={true} size='medium' icons='edit' variant='primary' {...args} />
          <ButtonIcons label='success'  regular={true} icons='edit' size='medium' variant='success'  {...args}/>
          <Button regular={true} label='delete' icoSize='lg' icons='edit' size='medium'  variant='danger'  {...args}/>   
        </div>
        <div className='buttons-container'>
       
          <ButtonOutline label='danger'  icons='earlybirds' size='large' variant='primary'  {...args}/>
          <ButtonOutline label='warning' size='large' variant='success'  icoSize='lg' regular={true} icons='dizzy'  {...args}/>
          <ButtonOutline label='dark' icoSize='lg' regular={true} icons='dizzy'  size='large'  variant='info'   {...args}/>
        </div>
        </div>
    
);




   
      

export const Buttons = Template.bind({});
ButtonIcons.args = {
  

 
  
 
};

export const ButtonsIcons = Template.bind({});
ButtonIcons.args = {
  

 
  
 
};




