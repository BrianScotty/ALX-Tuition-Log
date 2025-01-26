import { FaTimes } from 'react-icons/fa'

const Lesson = ({ lesson, onDelete, onToggle }) => {
    return (
        <div className={`lesson ${lesson.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(lesson.id)}
        >
            <h3>
                {lesson.text}{' '}
                <FaTimes
                    style={{ color: 'red' }}
                    onClick={() => onDelete(lesson.id)}
                />
            </h3>
            <p>{lesson.day}</p>
      </div>
    )
}

export default Lesson