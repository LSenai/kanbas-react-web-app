import React, { useState } from 'react';
import './index.css';
import { modules } from '../../Database';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle} from 'react-icons/fa';
import { useParams } from 'react-router';

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] =  useState(modulesList[0]);
    return (
        <>
            {/* Add buttons here */}
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
            <ul className="list-group wd-modules">
                {modulesList.map((module, index) => (
                    <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>
                        <div>
                            <FaEllipsisV className="me-2" /> {module.name}
                            <span className="float-end">
                                <FaCheckCircle className='text-success'/>
                                <FaPlusCircle className='ms-2'/>
                                <FaEllipsisV className='ms-2'/>
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className='list-group'>
                                {module.lessons?.map((lesson, index) => (
                                    <li className="list-group-item" key={index}>
                                        <FaEllipsisV className="me-2" /> {lesson.name}
                                        <span className='float-end'>
                                            <FaCheckCircle className='text-success'/>
                                            <FaEllipsisV className='ms-2'/>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;