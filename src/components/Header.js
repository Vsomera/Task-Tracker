import PropTypes from 'prop-types'

const Header = (props) => { // props is an object(dict) that is passed in
  return (
    <header className="header">
        <h1>{props.title}</h1>
        <button className="btn">Add</button>
    </header>
  )
}



Header.defaultProps = { // default when title is not defined
    title: "Task Tracker",
}

Header.propTypes = {    // handles error
    title: PropTypes.string.isRequired
}

// const headingStyle = { // css imported as a class
//     color: "red",
//     backgroundColor: "black",
// }

export default Header