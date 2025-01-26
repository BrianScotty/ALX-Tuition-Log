import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                color={showAdd ? 'red' : 'blue'}
                text={showAdd ? 'Close' : 'Add Lesson'}
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Smart Steps Tuition',
}

Header.propTypes = {
    title: PropTypes
}

export default Header