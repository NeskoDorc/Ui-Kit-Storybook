
import PropTypes from 'prop-types';


import './floating.css';
import styled , { css } from 'styled-components';

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
      width: 150px;
    
      }
    `;
    case "large":
      return css`
      font-weight: 400; 
      font-size: 1.3rem; 
      line-height: 2; 
      height:100px; 
      width: 300px;
    
      }
    `;
    case "medium":
      return css`
      font-weight: 400; 
      font-size: 1.3rem; 
      line-height: 2; 
      height:100px; 
      width: 300px;
    
      }
    `;
    default:
      return css`
      font-weight: 400; 
      font-size: 1.3rem; 
      line-height: 2; height: 
      50px; width: 200px;
    
      }
    `;}
};

const getbackGround = ({backgroundColor}) => {
  
  return css`
    background:${backgroundColor};
  `;
};


const Button = styled.button`

${({ size }) => handleSizeType(size)};
${({ variant }) => handleColorType(variant)};
${(getbackGround)};

`;

export const Floating = ({ children,label,backgroundColor,variant, size,onClick, disabled, ...props }) => {



    return(


        <div>
 <Button 
 size={size}
 variant={variant} 
 className='button-group'
 onClick={!disabled ? onClick : () => {}}
 backgroundColor={backgroundColor}
 
 >{label}</Button>
    
        </div>
    )
 
    }

Floating.propTypes = {
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

Floating.defaultProps = {
  
};
