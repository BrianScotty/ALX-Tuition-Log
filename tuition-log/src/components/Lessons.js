import Lesson from './Lesson'

const Lessons = ({ lessons }) => {
    return (
        <>
            {lessons.map((lesson) => (
                <Lesson key={lesson.id} lesson={lesson} />
            ))}
        </>
    )
}

export default Lessons