function ModuleTopButtons() {
    return (
        <div className = "row wd-modules-top-buttons">
                    <span style={{ justifyItems: 'flex-end' }}>
                        <button type="button" className="btn btn-secondary ms-2"> Collapse All</button>
                        <button type="button" className="btn btn-secondary ms-2"> Expand All</button>
                        <button type="button" className="btn btn-secondary ms-2"> View Progress</button>
                        <div className="btn-group ms-2">
                        <button type="button" className="btn btn-secondary ">Publish All</button>
                        <button type="button" className="btn btn-secondary  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu ">
                            <li><a className="dropdown-item" href="#">Publish All</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                        </div>
                        <button type="button" className="btn btn-danger ms-2">+ Module</button>
                        <button type="button" className="btn btn-secondary ms-2">︙</button>

                    </span>
        </div>
    );
}
export default ModuleTopButtons;
