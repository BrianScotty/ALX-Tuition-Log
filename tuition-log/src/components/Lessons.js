import Lesson from './Lesson'

const Lessons = ({ lessons, onDelete, onToggle }) => {
    return (
        <>
            {lessons.map((lesson) => (
                <Lesson
                    key={lesson.id}
                    lesson={lesson}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Lessons