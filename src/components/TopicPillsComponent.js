import React from "react";

const TopicPillsComponent = () => (
    <div>
            <ul className="nav nav-pills wbdv-topic-pill-list">
                    <li className="nav-item bg-secondary text-white m-2 wbdv-topic-pill">
                            <a className="nav-link">
                                    Topic 1
                            </a>
                    </li>
                    <li className="nav-item bg-secondary text-white m-2 wbdv-topic-pill">
                            <a className="nav-link active">
                                    Topic 2
                            </a>
                    </li>
                    <li className="nav-item bg-secondary text-white m-2 wbdv-topic-pill">
                            <a className="nav-link">
                                    Topic 3
                            </a>
                    </li>
                    <li className="nav-item bg-secondary text-white m-2 wbdv-topic-pill">
                            <a className="nav-link">
                                    Topic 4
                            </a>
                    </li>
                    <li className="nav-item bg-secondary m-2">
                            <button className="btn wbdv-topic-add-btn">
                                    <i className="fas fa-plus fa-lg text-white"></i>
                            </button>
                    </li>
            </ul>
    </div>
)

export default TopicPillsComponent