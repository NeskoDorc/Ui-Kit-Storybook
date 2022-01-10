import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);
export function ButtonIcon({icons, icoSize,spin}) {



    return (
       
            
            <FontAwesomeIcon icon={['fab', `${icons}`]} size={icoSize} spin={spin} />
           

        
    )
}
