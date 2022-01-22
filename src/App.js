import { useState } from 'react'
import './style.css'
import CoursesForm from './components/coursesForm'
import CoursesList from './components/coursesList'
function App() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JQuery' },
    { id: 4, name: 'JS' },
  ])
  const [addedCourse, setAddedCourse] = useState({})
  // update course
  const updateCourse = (e) => {
    setAddedCourse({ name: e.target.value })
  }
  // add course
  const addCourse = (e) => {
    e.preventDefault()
    addedCourse.id = courses.length ? courses[courses.length - 1].id + 1 : 1
    if (e.target.elements[0].value !== '') {
      setCourses([...courses, addedCourse])
    }
    e.target.elements[0].value = ''
  }

  // delete course
  const deleteCourse = (id) => {
    let newCourses = courses.filter((course) => {
      return id !== course.id
    })

    setCourses(newCourses)
  }
  console.log(courses)

  // edit course
  const editCourse = (id, newVal) => {
    let course = courses.find((course) => {
      return course.id === id
    })
    course.name = newVal
    setCourses(courses)
  }
  const coursesList = courses.map((course, index) => {
    return (
      <CoursesList
        course={course}
        key={course.id}
        deleteCourse={deleteCourse}
        editCourse={editCourse}
      />
    )
  })
  return (
    <div className="App">
      <h2>Add Courses</h2>
      <CoursesForm updateCourse={updateCourse} addCourse={addCourse} />
      <ul>{courses.length ? coursesList : <p>No Courses Added</p>}</ul>
    </div>
  )
}

export default App
