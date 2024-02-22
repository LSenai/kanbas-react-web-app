
function AssignmentsTopButtons() {
    return (
        <div className="row wd-assignments-main mt-100">
            <div className="col">
                <div className="d-flex flex-column flex-md-row justify-content-md-between">
                    <div className="mb-2 mb-md-0">
                        <input type="text" className="form-control mb-2" placeholder="Search for Assignments" />
                    </div>
                    <div>
                        <button type="button" className="btn btn-secondary me-2 mb-2 mb-md-0">+ Group</button>
                        <button type="button" className="btn btn-danger me-2 mb-2 mb-md-0">+ Assignment</button>
                        <button type="button" className="btn btn-secondary me-2 mb-2 mb-md-0">︙</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssignmentsTopButtons;
