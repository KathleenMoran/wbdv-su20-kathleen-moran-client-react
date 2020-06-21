import React from "react";

const CourseHeadingComponent = ({updateFormState, newCourseTitle, addCourse}) => (
    <div className="container-fluid p-0">
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <button className="btn col-sm-1" type="button">
                    <span className="navbar-toggler-icon wbdv-field wbdv-hamburger"></span>
                </button>
                <div className="d-none d-md-block col-sm-3">
                    <a className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
                </div>
                <input className="col form-control mr-sm-2 wbdv-field wbdv-new-course" type="search"
                       placeholder="New Course Title"
                       onChange={updateFormState}
                       value={newCourseTitle}/>
                    <button
                        className="col-sm-2 btn btn-outline-success navbar-expand my-2 my-sm-0 wbdv-button wbdv-add-course"
                        type="button"
                        onClick={addCourse}>Create
                    </button>
            </div>
        </nav>
    </div>
)

export default CourseHeadingComponent