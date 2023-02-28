import PropTypes from "prop-types"

export const Button = ({color, text, onClick}) => {
    
    return (
    <button onClick = {onClick}
            style={{backgroundColor: color}} 
            className="btn">
            {text} 
    </button>
  )
}


Button.defaultProps = { // default when colour is not defined
    color: "steelblue"
  }
  
  Button.propTypes = {  // ensures the passed color and text are strings
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }

export default Button

