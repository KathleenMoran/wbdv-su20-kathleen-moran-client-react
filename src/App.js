
import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseManagerContainer from "./containers/CourseManagerContainer";
import CourseEditorComponent from "./components/CourseEditorComponent"

const App = () => (
    <Router>
        <div className="Page">
            <Route path="/" component={CourseManagerContainer} exact/>
            <Route path="/course" component={CourseEditorComponent}/>
        </div>
    </Router>
)

export default App;
