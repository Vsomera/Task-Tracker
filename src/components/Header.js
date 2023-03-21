import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, btnText, btnColor, toggleForm }) => { // props is an object(dict) that is passed in
  
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button text={btnText} color={btnColor} onClick={toggleForm}/> {/*Calls function in header.js*/}
    </header>
  )
}


Header.defaultProps = { // default when title is not defined
    title: "Task Tracker",
}

Header.propTypes = {    // handles error if title is not a string
    title: PropTypes.string.isRequired
}

// const headingStyle = { // css imported as a class
//     color: "red",
//     backgroundColor: "black",
// }

export default Header