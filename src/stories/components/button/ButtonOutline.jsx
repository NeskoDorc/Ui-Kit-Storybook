
import PropTypes from 'prop-types';
import './buttonsOutline.css'
import styled , { css } from 'styled-components';

import { Icon } from '../icons/Icons';




export function ButtonOutline({ children,icons, icoSize,spin, regular,pulse,border,outline,label,backgroundColor,variant, size,onClick, disabled, ...props }) {
    console.log(icons)
    const handleColorType = variant => {
        switch (variant) {
            
            
        case "primary":
            return "border: 3px solid #6E41E2 !important; ";
        case "success":
            return "border: 3px solid #198754 !important;";
        case "info":
            return "border: 3px solid #0dcaf0 !important;";
        case "warning":
            return "border: 3px solid  #ffc107 !important;";
        case "dark":
            return "border: 3px solid  #212529 !important;";
        case "danger":
            return "border: 3px solid  #f56342 !important;";

          default:
            return "color: #000; background: #eee;";
        }
      };
      const handleSizeType = size => {
        switch (size) {
          case "small":
            return css`
            font-weight: 400; 
            font-size: 0.7rem; 
            line-height: 0.7; 
            height:40px; 
            width: 150px;
            border-radius:14px;
          
            
          `;
          case "large":
            return css`
            font-weight: 400; 
            font-size: 1.7rem; 
            line-height: 2; 
            height:75px; 
            width: 250px;
            border-radius:25px;
          
            
          `;
          case "medium":
            return css`
            font-weight: 400; 
            font-size: 1.3rem; 
            line-height: 2; 
            height:50px; 
            width: 200px;
            border-radius:20px;
          
            
          `;

          
          default:
            return css`
            font-weight: 400; 
            font-size: 1.3rem; 
            line-height: 2; 
            height:50px; width: 200px;
            border-radius:20px;
          
            
          `;}
      };
      

     
      


    const ButtonOutline = styled.button`
   
    ${({ size }) => handleSizeType(size)};
    ${({ variant }) => handleColorType(variant)};
   


 
    `;
    
    
    
    return (
        <div>
             <ButtonOutline 
                    size={size}
                    variant={variant} 
                    className='outlined outline-group'
                    onClick={!disabled ? onClick : () => {
                        alert(icons)
                    }}
                    disabled={disabled}
                    >
                                    
                                    
                        {
                        
                        
                        
                        icons ?  <p >{label}  <span className='icon-size'>  <Icon spin={spin} icoSize={icoSize} icons={icons} regular={regular}pulse={pulse} border={border}/></span></p> :  <p>{label}</p>

                            

                        }
                       
                        
                    
                    </ButtonOutline>
        </div>
    )
}


ButtonOutline.propTypes = {
    disabled: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string,
  
    
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

ButtonOutline.defaultProps = {
  
};


