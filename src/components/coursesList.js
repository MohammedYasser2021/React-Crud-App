import React, { Component } from 'react'

export default class CoursesList extends Component {
  state = {
    isEdit: false,
  }
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.course.name}</span>
        <div>
          <button
            onClick={() => {
              this.toggleState()
            }}
          >
            Edit Course
          </button>
          <button
            onClick={() => {
              this.props.deleteCourse(this.props.course.id)
            }}
          >
            Delete Course
          </button>
        </div>
      </li>
    )
  }
  updateCourseItem = (e) => {
    e.preventDefault()
    this.props.editCourse(this.props.course.id, this.input.value)
    this.toggleState()
  }
  renderUpdate = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v
          }}
          defaultValue={this.props.course.name}
        />
        <button>Update Course</button>
      </form>
    )
  }
  toggleState = () => {
    let { isEdit } = this.state
    this.setState({
      isEdit: !isEdit,
    })
    console.log(isEdit)
  }
  render() {
    let { isEdit } = this.state
    return <>{isEdit ? this.renderUpdate() : this.renderCourse()}</>
  }
}
