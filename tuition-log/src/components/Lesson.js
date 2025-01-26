import { FaTimes } from 'react-icons/fa'

const Lesson = ({ lesson, onDelete }) => {
    return (
      <div className='lesson'>
            <h3>
                {lesson.text} <FaTimes style={{ color: 'red' }} onClick={() => onDelete(lesson.id)} />
            </h3>
            <p>{lesson.day}</p>
      </div>
    )
}

export default Lesson