import React from 'react'
import PropTypes from 'prop-types';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './icons.css'

library.add(far, fab,fas);
export function Icon({icons, icoSize,spin, regular,pulse,border }) {


    


    return (
       
            <div >
            {regular?  <FontAwesomeIcon icon={['far', `${icons}`]}  size={icoSize} spin={spin} pulse={pulse} border={border}  /> : <FontAwesomeIcon icon={['fab', `${icons}`]} size={icoSize} spin={spin} pulse={pulse} border={border} />  }
              
                
            </div>
           
           

        
    )
}


Icon.propTypes = {

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

Icon.defaultProps = {
  
};
