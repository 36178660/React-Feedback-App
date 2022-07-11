
import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`button button-${version}`}>
        {children}
    </button>
  )
}
Button.defaultProps = {
    version: 'submit',
    type: 'button',
    isDisabled: false
  }

  Button.propType = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.boolean,
  }
export default Button