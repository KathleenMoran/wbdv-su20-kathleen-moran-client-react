
import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseManagerContainer from "./containers/CourseManagerContainer";
import CourseEditorComponent from "./components/courseEditor/CourseEditorComponent"

const App = () => (
    <CourseManagerContainer/>
)

export default App;
