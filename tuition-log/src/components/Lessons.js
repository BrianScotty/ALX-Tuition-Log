import Lesson from './Lesson'

const Lessons = ({ lessons, onDelete }) => {
    return (
        <>
            {lessons.map((lesson) => (
                <Lesson key={lesson.id} lesson={lesson} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Lessons