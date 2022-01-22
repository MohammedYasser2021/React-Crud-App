import React from 'react'

function CoursesForm({ updateCourse, addCourse }) {
  return (
    <form onSubmit={addCourse} className="add-course">
      <input
        type="text"
        onChange={updateCourse}
        placeholder="Enter Your Course"
      />
      <input type="submit" value="Add Course" />
    </form>
  )
}

export default CoursesForm
