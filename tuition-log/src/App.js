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
   return (
     <div className='container'>
       <Header title= 'Smart Steps Tuition' />
           <Lessons lessons={lessons} />
      </div>
  )
}

export default App
