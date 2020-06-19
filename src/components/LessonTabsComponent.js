import React from "react";

const LessonTabsComponent = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="col-sm-1 d-none d-sm-block">
            <button className="btn wbdv-course-editor wbdv-close">
                <i className="fas fa-times fa-2x text-white"></i>
            </button>
        </div>
        <a className="navbar-brand wbdv-course-title">CS5610 - WebDev</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active wbdv-page-tab">
                    <a className="nav-link">Pages<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Build</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Theme</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Store</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">App</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Settings</a>
                </li>
            </ul>
            <span className="nav-text">
                    <button className="btn wbdv-new-page-btn">
                        <i className="fas fa-plus fa-2x text-white"></i>
                    </button>
                </span>
        </div>
    </nav>
)


export default LessonTabsComponent