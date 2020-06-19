import React from "react";

const ModuleListComponent = () => (
    <div className="list-group bg-dark min-vh-100 wbdv-module-list">
        <div className="list-group-item bg-secondary mx-3 mt-3 wbdv-module-item active">
            <i className="text-white wbdv-module-item-title">
                Module 1 - jQuery
                <i className="fas fa-times fa-lg mt-1 float-right wbdv-module-item-delete-btn"> </i>
            </i>
        </div>
        <div className="list-group-item bg-secondary mx-3 mt-3 wbdv-module-item">
            <i className="text-white wbdv-module-item-title">
                Module 2 - React
                <i className="fas fa-times fa-lg mt-1 float-right wbdv-module-item-delete-btn"> </i>
            </i>
        </div>
        <div className="list-group-item bg-secondary mx-3 mt-3 wbdv-module-item">
            <i className="text-white wbdv-module-item-title">
                Module 3 - Redux
                <i className="fas fa-times fa-lg mt-1 float-right wbdv-module-item-delete-btn"> </i>
            </i>
        </div>
        <div className="list-group-item bg-secondary mx-3 mt-3 wbdv-module-item">
            <i className="text-white wbdv-module-item-title">
                Module 4 - Native
                <i className="fas fa-times fa-lg mt-1 float-right wbdv-module-item-delete-btn"> </i>
            </i>
        </div>
        <div
            className="list-group-item bg-secondary mx-3 mt-3 wbdv-module-item">
            <i className="text-white wbdv-module-item-title">
                Module 5 - Angular
                <i className="fas fa-times fa-lg mt-1 float-right wbdv-module-item-delete-btn"> </i>
            </i>
        </div>
        <div className="list-group-item bg-secondary mx-3 mt-3 wbdv-module-item">
            <i className="text-white wbdv-module-item-title">
                Module 6 - Node
                <i className="fas fa-times fa-lg mt-1 float-right wbdv-module-item-delete-btn"> </i>
            </i>
        </div>
        <div className="list-group-item bg-secondary mx-3 mt-3 wbdv-module-item">
            <i className="text-white wbdv-module-item-title">
                Module 7 - Mongo
                <i className="fas fa-times fa-lg mt-1 float-right wbdv-module-item-delete-btn"> </i>
            </i>
        </div>
        <button className="btn float-right mb-1">
            <i className="fas fa-plus float-right fa-2x text-white wbdv-module-item-add-btn"></i>
        </button>
    </div>
)


export default ModuleListComponent