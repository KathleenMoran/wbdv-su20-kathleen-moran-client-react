import React from "react";
import LessonTabComponent from "./LessonTabComponent";

class LessonTabsComponent extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    render() {
        return (
            <div className="nav nav-tabs nav-fill">
                {this.props.lessons && this.props.lessons.map(lesson =>
                                                                  <LessonTabComponent
                                                                      lesson = {lesson}
                                                                      key = {lesson._id}
                                                                      courseId = {this.props.courseId}
                                                                      moduleId = {this.props.moduleId}
                                                                      deleteLesson = {this.props.deleteLesson}
                                                                      updateLesson = {this.props.updateLesson}
                                                                      params = {this.props.params}
                                                                      history = {this.props.history}
                                                                  />
                )}

                <div className="nav-item">
                    <div className="nav-link"
                         onClick={() => {
                             this.props.createLesson(this.props.moduleId, {title: 'New Lesson'})
                         }}>
                        Add Lesson
                    </div>
                </div>
            </div>
        )
    }
}

export default LessonTabsComponent