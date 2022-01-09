import React from 'react';
import PropTypes from 'prop-types';
import './list.css'


/**
 * Primary UI component for user interaction
 */
export const List = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'list--primary' : 'list--secondary';
  return (

    <div className={['list', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
       {...props}>
            <ul className='list'>
                <li className="list-primary">list 1</li>
                <li className="list-primary">list 2</li>
                <li className="list-primary"> list 3</li>
                <li className="list-primary"> list 4</li>
                <li className="list-primary"> list 5</li>
            </ul>


    </div>

    
    // <button
      
    //   className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    //   style={backgroundColor && { backgroundColor }}
    //   {...props}
    // >
    //   {label}
    // </button>
  );
};

List.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
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
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

List.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
