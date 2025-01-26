import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='blue' text='Add Lesson' onClick={onClick} />
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