import { useState, useEffect } from 'react'
import Header from './components/Header'
import Lessons from './components/Lessons'
import AddLesson from './components/AddLesson'


const App = () => {
    const [showAddLesson, setShowAddLesson] = useState (false)
    const [lessons, setLessons] = useState([])

    useEffect(() => {
        const getLessons = async () => {
            const lessonsFromServer = await fetchLessons()
            setLessons(lessonsFromServer)
        }

        getLessons()
    }, [])

    // Fetch Lessons
    const fetchLessons = async () => {
        const res = await fetch('http://localhost:4000/lessons')
        const data = await res.json()

        return data
    }

    // Fetch Lesson
    const fetchLesson = async (id) => {
        const res = await fetch(`http://localhost:4000/lessons/${id}`)
        const data = await res.json()

        return data
    }

    // Add Lesson
    const addLesson = async (lesson) => {
        const res = await fetch('http://localhost:4000/lessons', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(lesson)
        })

        const data = await res.json

        setLessons([...lessons, data])

        //const id = Math.floor(Math.random() * 10000) + 1
        //const newLesson = { id, ...lesson }
        //setLessons([...lessons, newLesson])
    }

    // Delete Lesson
    const deleteLesson = async (id) => {
        await fetch(`http://localhost:4000/lessons/${id}`, {
            method: 'DELETE'
        })

        setLessons( lessons.filter((lesson) => lesson.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const lessonToToggle = await fetchLesson(id)
        const updLesson = { ...lessonToToggle, reminder: !lessonToToggle.reminder }

        const res = await fetch(`http://localhost:4000/lessons/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updLesson)
        })

        const data = await res.json()

        setLessons(
            lessons.map((lesson) =>
                lesson.id === id ? {
                    ...lesson, reminder:
                        data.reminder
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
