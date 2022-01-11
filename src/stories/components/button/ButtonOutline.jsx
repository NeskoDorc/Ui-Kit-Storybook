
import PropTypes from 'prop-types';
import './buttonsOutline.css'
import styled , { css } from 'styled-components';

import { Icon } from '../icons/Icons';





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

const handleHeight = height =>{


  return `height:${height}px`;


}
const handleWidth = width =>{


  return `width:${width}px`;


}
const handleRadius = radius =>{


  return `border-radius:${radius}`;


}

const handleSizeType = size => {
  switch (size) {
    case "small":
      return css`
      font-weight: 400; 
      font-size: 0.7rem; 
      line-height: 0.7; 
      height:35px; 
      width: 100px;
      border-radius:14px;
    
      
    `;
    case "large":
      return css`
      font-weight: 400; 
      font-size: 1.7rem; 
      line-height: 2; 
      height:68px; 
      width: 200px;
      border-radius:25px;
    
      
    `;
    case "medium":
      return css`
      font-weight: 400; 
      font-size: 1.3rem; 
      line-height: 2; 
      height:50px; 
      width: 150px;
      border-radius:20px;
    
      
    `;

    
    default:
      return css`
      font-weight: 400; 
      font-size: 1.3rem; 
      line-height: 2; 
      border-radius:20px;
      height:50px;
      width: 150px;
    
      
    `;}
};

const Button = styled.button`
   
${({ size }) => handleSizeType(size)};
${({ variant }) => handleColorType(variant)};

${({ height }) => handleHeight(height)} !important;
${({ width }) => handleWidth(width)} !important;
${({ radius }) => handleRadius(radius)} !important;

`;


export function ButtonOutline({ children,icons,height,width,radius, icoSize,spin, regular,pulse,border,outline,label,backgroundColor,variant, size,onClick, disabled, ...props }) {
    
    

     
      


  console.log(label)
    
    
    
    return (
        <div>
             <Button
                    size={size}
                    variant={variant} 
                    className='outlined outline-group'
                    onClick={!disabled ? onClick : () => {
                        alert(icons)
                    }}
                    disabled={disabled}
                    height={height}
                    width={width}
                    radius={radius}
                    >
                                    
                                    
                        {
                        
                        
                        icons ?  <div className='label' >{label}  <span className={`${label===undefined ? '': 'icon-span'} `}>  <Icon spin={spin} icoSize={icoSize} icons={icons} regular={regular} pulse={pulse} border={border}/></span></div> :  <div>{label}</div>

                            

                        }
                       
                        
                    
                    </Button>
        </div>
    )
}




ButtonOutline.defaultProps = {
  
};


