function Status() {
    return (
        <div >
                <div className="wd-course-status flex-grow-0 me-2 d-none d-lg-block">
                    <h3>Course Status</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td><button type="button" className="btn btn-secondary">Unpublish</button></td>
                                <td><button type="button" className="btn btn-success">Publish</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="wd-course-status-btn-links">
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">Import Existing Content</button></li>
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">Import From Commons</button></li>
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">Choose Home Page</button></li>
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">View Course Stream</button></li>
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">New Announcements</button></li>
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">New Analytics</button></li>
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">View Course Notifications</button></li>
                    </ul>                    
                    
                    <h3>Coming Up</h3>
                    <p>
                        <a href="#" className="btn btn-info ">View Calendar</a>
                    </p>                    
                    <ul>
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">Lecture 1</button></li>
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">Lecture 2</button></li>
                        <li className="wd-course-status-buttons"><button type="button" className="btn btn-secondary">Lecture 3</button></li>
                    </ul>
                </div>
            </div>
    );
}

export default Status;