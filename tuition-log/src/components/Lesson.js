import { FaTimes } from 'react-icons/fa'

const Lesson = ({ lesson }) => {
    return (
      <div className='lesson'>
            <h3>
                {lesson.text} <FaTimes style={{ color: 'red' }} />
            </h3>
            <p>{lesson.day}</p>
      </div>
    )
}

export default Lesson