import React from "react";

const WidgetListComponent = () => (
    <div>
        <div className="border m-3 p-2 rounded">
            <div className="form-row d-flex justify-content-between">
                <h4>Heading widget</h4>
                <div className="col-lg-4 col-md-6 float-right">
                    <i className="fas fa-arrow-up fa-2x mr-1"> </i>
                    <i className="fas fas fa-arrow-down fa-2x mr-1"> </i>
                    <select className="custom-select mb-3 col-5 mr-1">
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>List</option>
                        <option>Image</option>
                    </select>
                    <i className="fas fa-times fa-2x"> </i>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1"> </label>
                <input id="exampleFormControlInput1" className="form-control" type="text"
                       placeholder="Heading text"/>
            </div>

            <div className="form-group">
                <select className="custom-select">
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                    <option>Heading 5</option>
                    <option>Heading 6</option>
                </select>
            </div>

            <div className="form-group">
                <input className="form-control" type="text"
                       placeholder="Widget name"/>
            </div>
            <h3>Preview</h3>
            <h1>Heading text</h1>
        </div>
        <i className="fas fa-plus-circle fa-2x float-right mr-2 wbdv-button wbdv-add-course"> </i>
    </div>
)

export default WidgetListComponent