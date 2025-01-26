import { useState } from 'react'
import Header from './components/Header'
import Lessons from './components/Lessons'

const App = () => {
    const [lessons, setLessons] = useState([
        {
            id: 1,
            text: 'Jaden Maths grade 12',
            day: 'Thursdays @ 4pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Katleho Physics grade 8',
            day: 'Tuesdays @ 5pm',
            reminder: false,
        },
    ])

    // Delete Lesson
    const deleteLesson = (id) => {
        setLessons(lessons.filter((lesson) => lesson.id !== id))
    }

   return (
     <div className='container'>
       <Header title= 'Smart Steps Tuition' />
       {lessons.length > 0 ? ( <Lessons lessons={lessons} onDelete={deleteLesson} /> ) : ( 'No Lessons' )}
      </div>
  )
}

export default App
