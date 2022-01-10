import React from 'react';

import { Icon } from './Icons';


export default {
  title: 'Example/Icons',
  component: Icon,
};

const Template = (args) =>

<div className='ico'>
    

<div className='ico-container'>
<div className='ico-primary'>
<Icon icoSize='4x' regular={true} icons='address-card' {...args} />
<Icon icoSize='4x' regular={true} icons='grin-tongue-wink' {...args} />
<Icon icoSize='5x'   icons='earlybirds' {...args} />
<Icon icoSize='5x'  icons='github-square' {...args} />


</div>



</div>

</div>

 


 
 
 ;
 const Template2 = (args) =>

<div className='ico'>
    <h1>Regular Icons</h1>

<div className='ico-container'>
<div className='ico-iner'>
    
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='address-book' {...args} />
        <div className="ico-text">
        <p >address-book</p> </div>
    </div>
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='address-card' {...args} />
        <div className="ico-text">
        <p >address-card</p> </div>
    </div>
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='angry' {...args} />
        <div className="ico-text">
        <p >angry</p> </div>
    </div>
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='arrow-alt-circle-down' {...args} />
        <div className="ico-text">
        <p >arrow-alt-circle-down</p> </div>
    </div>
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='arrow-alt-circle-left' {...args} />
        <div className="ico-text">
        <p >arrow-alt-circle-left</p> </div>
    </div>

</div>
<div className='ico-iner'>
    
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='arrow-alt-circle-right' {...args} />
        <div className="ico-text">
        <p >arrow-alt-circle-right</p> </div>
    </div>
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='arrow-alt-circle-left' {...args} />
        <div className="ico-text">
        <p >arrow-alt-circle-left</p> </div>
    </div>
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='arrow-alt-circle-up' {...args} />
        <div className="ico-text">
        <p >arrow-alt-circle-up</p> </div>
    </div>
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='bookmark' {...args} />
        <div className="ico-text">
        <p >bookmark</p> </div>
    </div>
    <div className='ico-icon'>
        <Icon icoSize='3x' regular={true} icons='bell' {...args} />
        <div className="ico-text">
        <p >bell</p> </div>
    </div>

</div>




</div>
<h1>Branded Icons</h1>

<div className='ico-iner'>
    <div className='ico-icon'>
    <Icon icoSize='4x' icons='earlybirds'  {...args} />
    </div>
    <div className='ico-icon'>
    <Icon icoSize='4x'  icons='github-square' {...args} />
    </div>
    <div className='ico-icon'>
    <Icon icoSize='3x' icons='address-card' {...args} />
    </div>
   


</div>
<div className='ico-iner'>
    <div className='ico-icon'>
    <Icon icoSize='4x' icons='earlybirds'  {...args} />
    </div>
    <div className='ico-icon'>
    <Icon icoSize='4x'  icons='github-square' {...args} />
    </div>
    <div className='ico-icon'>
    <Icon icoSize='3x' icons='address-card' {...args} />
    </div>
   


</div>

</div>

 


 
 
 ;

export const Icons = Template.bind({});
Icon.args = {
    icoSize:'4x'
};

export const IconsSet = Template2.bind({});
Icon.args = {
    icoSize:'4x'
};



