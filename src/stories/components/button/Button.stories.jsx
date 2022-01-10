import React from 'react';

import { Button } from './Button';
import { ButtonOutline } from './ButtonOutline';

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
 
  title: 'Example/Button',
  component: Button,
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
          <Stories title ={Sizes} />
        </> 
      ),
    },
  
  },

};

const Template = (args) => (
<div>
<div className='buttons-container'>
     
    <Button label='primary'  variant='primary' {...args} />
    <Button label='success' variant='success'  {...args}/>
    <Button label='info' variant='info' {...args} />
    <Button label='default '    {...args}/>   
   
    </div>
    <div className='buttons-container'>
   
    <Button label='danger' variant='danger'  {...args}/>
    <Button label='warning' variant='warning'   {...args}/>
    <Button label='dark' variant='dark'   {...args}/>
    </div>
    </div>
);
const TemplateSecond = (args) => (
  <div>
  <div className='buttons-container'>
       
      <Button label='primary' size='small' variant='primary' {...args} />
      <Button label='success' size='small' variant='success'  {...args}/>
      <Button label='default ' size='small'   {...args}/>   
     
      </div>
      <div className='buttons-container'>
       
       <Button label='primary' size='medium'  variant='primary' {...args} />
       <Button label='success' size='medium' variant='success'  {...args}/>
       <Button label='default ' size='medium'   {...args}/>   
      
       </div>
       <div className='buttons-container'>
       
       <Button label='primary' size='large' variant='primary' {...args} />
       <Button label='success' size='large' variant='success'  {...args}/>
       <Button label='default '  size='large'  {...args}/>   
      
       </div>
     
      </div>
  );

  const TemplateOutlinesSize = (args) => (
  
<div>
<div className='buttons-container'>
     
    <ButtonOutline label='primary' size='small' variant='primary' {...args} />
    <ButtonOutline label='success' size='small' variant='success'  {...args}/>
    <ButtonOutline label='info'  size='small'  variant='info' {...args} />
    
   
    </div>
    
    <div className='buttons-container'>
   
    <ButtonOutline label='danger' size='medium' variant='primary'  {...args}/>
    <ButtonOutline label='warning' size='medium' variant='success'   {...args}/>
    <ButtonOutline label='dark' size='medium' variant='info'   {...args}/>
    </div>
    <div className='buttons-container'>
   
    <ButtonOutline label='danger' size='large' variant='primary'  {...args}/>
    <ButtonOutline label='warning' size='large' variant='success'   {...args}/>
    <ButtonOutline label='dark' size='large'  variant='info'   {...args}/>
    </div>
    </div>


    );


    const TemplateOutlines = (args) => (
  
      <div>
      <div className='buttons-container'>
           
          <ButtonOutline label='primary'  variant='primary' {...args} />
          <ButtonOutline label='success' variant='success'  {...args}/>
          <ButtonOutline label='info' variant='info' {...args} />
          <ButtonOutline label='default '    {...args}/>   
         
          </div>
          <div className='buttons-container'>
         
          <ButtonOutline label='danger' variant='danger'  {...args}/>
          <ButtonOutline label='warning' variant='warning'   {...args}/>
          <ButtonOutline label='dark' variant='dark'   {...args}/>
          </div>
          </div>
      
      
          );
          const TemplateButtonIcon = (args) => (
  
            <div>
            <div className='buttons-container'>
            
                    <ButtonOutline label='primary' icoSize='2x' regular={true} icons='grin-tears' size='small' variant='primary' {...args} />
                    <ButtonOutline label='success' size='small' variant='success'  {...args}/>
                    <ButtonOutline label='info'  size='small'  variant='info' {...args} />
                
               
                </div>
                
                <div className='buttons-container'>
                  <Button label='primary' size='medium'  variant='primary' {...args} />
                  <Button label='success'  regular={true} icons='edit' size='medium' variant='success'  {...args}/>
                  <Button regular={true} icoSize='lg' icons='edit' size='medium'   {...args}/>   
                </div>
                <div className='buttons-container'>
               
                  <ButtonOutline label='danger'  icons='earlybirds' size='large' variant='primary'  {...args}/>
                  <ButtonOutline label='warning' size='large' variant='success'   {...args}/>
                  <ButtonOutline label='dark' icoSize='lg' regular={true} icons='dizzy'  size='large'  variant='info'   {...args}/>
                </div>
                </div>
            
            
                );
      

export const Buttons = Template.bind({});
Button.args = {

 
  
 
};
export const Disabled = Template.bind({});
Disabled.args = {

  docs: {
    source: {
      code: 'Some custom string here',
    },
  },
  
 
  disabled:true,
 
};




export const Sizes = TemplateSecond.bind({});
Sizes.args = {
  
 
};

export const Outline = TemplateOutlines.bind({});
Outline.args = {
  outlined:'outlined',
 

};
export const OutlineSize = TemplateOutlinesSize.bind({});
Outline.args = {
  
 

};

export const ButtonWithIcon = TemplateButtonIcon.bind({});
Outline.args = {
 
 

};




