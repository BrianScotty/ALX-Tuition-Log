import { useState } from 'react'
import Header from './components/Header'
import Lessons from './components/Lessons'
import AddLesson from './components/AddLesson'


const App = () => {
    const [showAddLesson, setShowAddLesson] = useState (false)
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

    // Add Lesson
    const addLesson = (lesson) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newLesson = { id, ...lesson }
        setLessons([...lessons, newLesson])
    }

    // Delete Lesson
    const deleteLesson = (id) => {
        setLessons( lessons.filter((lesson) => lesson.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setLessons(
            lessons.map((lesson) =>
                lesson.id === id ? {
                    ...lesson, reminder:
                        !lesson.reminder
                } : lesson
            )
        )
    }

   return (
     <div className='container'>
           <Header title='Smart Steps Tuition' onAdd={() => setShowAddLesson(!showAddLesson)}
               showAdd={showAddLesson}
           />
           {showAddLesson && <AddLesson onAdd={addLesson} />}
           {lessons.length > 0 ? (<Lessons lessons={lessons} onDelete={deleteLesson} onToggle={toggleReminder} /> ) : ( 'No Lessons' )}
      </div>
  )
}

export default App
