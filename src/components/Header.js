import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => { // props is an object(dict) that is passed in
  
  const onClick = (e) => {
    console.log("click", e)
  }
  
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button text="Add" color="green" onClick={onClick}/> {/*Calls function in header.js*/}
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