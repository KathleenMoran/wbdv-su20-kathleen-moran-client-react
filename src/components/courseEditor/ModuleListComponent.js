import React from "react";
import ModuleComponent from "./ModuleComponent";


class ModuleListComponent extends React.Component {
    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.courseId !== prevProps.courseId) {
            this.props.findModulesForCourse(this.props.courseId)
        }
    }

    render() {
        return (
            <div className="list-group bg-dark min-vh-100 wbdv-module-list">
                {this.props.modules && this.props.modules.map(module =>
                                                                  <ModuleComponent
                                                                      module = {module}
                                                                      key = {module._id}
                                                                      courseId = {this.props.courseId}
                                                                      deleteModule = {this.props.deleteModule}
                                                                      updateModule = {this.props.updateModule}
                                                                      params = {this.props.params}
                                                                      history = {this.props.history}
                                                                  />
                )}

                <div className={`list-group-item border-0 mx-3 mt-3 wbdv-add-module text-center`}
                     onClick={
                         () => this.props.createModule(this.props.courseId, {title: 'New Module'})}>
                    Add Module
                </div>
            </div>
        );
    }
}


export default ModuleListComponent