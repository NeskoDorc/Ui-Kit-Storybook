import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button/Button';
import { ButtonOutline } from '../button/ButtonOutline';

export function ButtonIcons({ children,outlined,icons,height,width,radius,icoSize,spin,regular,border,pulse,label,backgroundColor,variant, size,onClick, disabled, ...props }) {
    return (
        <div>

       {
           outlined ? <ButtonOutline   
           size={size}
           variant={variant} 
           
           onClick={!disabled ? onClick : () => {}}
           disabled={disabled}
           height={height}
           width={width}
            radius={radius}
            backgroundColor={backgroundColor}
            label={label}
            spin={spin} 
            icoSize={icoSize} 
            icons={icons} 
            regular={regular}
            pulse={pulse} 
            border={border}
            
            /> : 
    <Button   
           size={size}
           variant={variant} 
           
           onClick={!disabled ? onClick : () => {}}
           disabled={disabled}
           height={height}
           width={width}
            radius={radius}
            backgroundColor={backgroundColor}
            label={label}
            spin={spin}
             icoSize={icoSize}
              icons={icons} 
              regular={regular}
              pulse={pulse} 
              border={border}
            
            />

       }
         
            
        </div>
    )
}

ButtonIcons.propTypes = {

    /**
    * What type of icons to use 
    * Regular or Branded
    */
   regular: PropTypes.bool,
   /**
    * Icon name
    */
    icons: PropTypes.string,
   /**
    * How large should the icon be?
    */
    icoSize: PropTypes.string,
   /**
    * The spin utility smoothly spins the icon clockwise
    */
    spin: PropTypes.bool,
 
    /**
    * Pulse utility spins clockwise in eight steps
    */
    pulse:PropTypes.bool,
    /**
    * Add a border around an icon with this utility.
    */
     border:PropTypes.bool,
  
    
     
    
   
};





