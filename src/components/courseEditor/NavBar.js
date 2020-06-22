import React from "react";
import CourseService from "../../services/courseService";
import {Link} from "react-router-dom";

class NavBar extends React.Component {
    state ={
        title: " ",
    };

    componentDidMount() {
        new CourseService().findCourseById(this.props.courseId)
            .then((course)=>{
                this.setState({title: course.title})
            });
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark row">
                <Link to={"/table"} className="fas fa-times fa-lg wbdv-close mt-1 col-1 text-center" style={{color: 'black'}}>
                </Link>
                <div className="navbar-brand font-weight-bold wbdv-course-editor-title col">
                    {this.state.title}
                </div>
            </nav>

        );
    }
}

export default NavBar