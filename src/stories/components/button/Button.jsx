
import PropTypes from 'prop-types';
import './button.css';
import styled , { css } from 'styled-components';
import { Icon } from '../icons/Icons';



const handleHeight = height =>{


  return `height:${height}px`;


}
const handleWidth = width =>{


  return `width:${width}px`;


}
const handleRadius = radius =>{


  return `border-radius:${radius}`;


}

const handleColorType = variant => {
  switch (variant) {
      
      
  case "primary":
      return "color: #fff;  background: #6E41E2;";
  case "success":
      return "color: #fff;  background: #198754;";
  case "info":
      return "color: #000;  background: #0dcaf0;";
  case "warning":
      return "color: #000;  background: #ffc107;";
  case "dark":
      return "color: #fff;  background: #212529;";
  case "danger":
      return "color: #fff; background: #f56342;";

    default:
      return "color: #000; background: #eee;";
  }
};
const handleSizeType = size => {
  switch (size) {
    case "small":
      return css`
      font-weight: 400; 
      font-size: 0.6rem; 
      line-height: 0.7; 
      height:35px; 
      width: 100px;
    
      
    `;
    case "large":
      return css`
      font-weight: 400; 
      font-size: 1.3rem; 
      line-height: 2; 
      height:68px; 
      width: 200px;
    
      
    `;
    case "medium":
      return css`
      font-weight: 400; 
      font-size: 1.3rem; 
      line-height: 2; 
      height:50px; 
      width: 150px;
    
      
    `;
    
    default:
      return css`
      font-weight: 400; 
      font-size: 1.3rem; 
      line-height: 2; 
      width: 96px;
      height:40px;
      
    `;}
};

const getbackGround = ({backgroundColor}) => {
  
  return css`
    background:${backgroundColor};
  `;
};

const Buttons = styled.button`

${({ size }) => handleSizeType(size)};
${({ variant }) => handleColorType(variant)};
${({ height }) => handleHeight(height)} !important;
${({ width }) => handleWidth(width)} !important;
${({ radius }) => handleRadius(radius)} !important;
${(getbackGround)};`;

export const Button = ({ children,outlined,icons,height,width,radius,icoSize,spin,regular,border,pulse,label,backgroundColor,variant, size,onClick, disabled, ...props }) => {

    return(


        <div>
 <Buttons 
        size={size}
        variant={variant} 
        className={`button-group ${outlined} `}
        onClick={!disabled ? onClick : () => {}}
        disabled={disabled}
        height={height}
                    width={width}
                    radius={radius}
        backgroundColor={backgroundColor}>
          
                         {
                        icons ?  <div className='label' >{label}  <span className={`${label===undefined ? '': 'icon-span'} `}>   <Icon spin={spin} icoSize={icoSize} icons={icons} regular={regular}pulse={pulse} border={border}/></span></div> :  <div>{label}</div>
                         }
  </Buttons>
    
        </div>
    )}

Button.propTypes = {
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

Button.defaultProps = {
  
};
