import React, { useState } from 'react';
import './index.css';
import { modules } from '../../Database';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle} from 'react-icons/fa';
import { useParams } from 'react-router';
import ModuleTopButtons from './ModuleTopButtons';
import { useSelector, useDispatch } from 'react-redux';
import{
    addModule, deleteModule, updateModule, setModule
    } from './reducer';

import { KanbasState } from '../../store';

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => 
        state.modulesReducer.module);
    const dispatch = useDispatch();    
    return (
        <>
            <ModuleTopButtons/>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <input
                        className="form-control mx-2 mt-2"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }
                        style={{ width: '50%', marginLeft: '2px' }}

                    />
                    
                    <textarea value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                          }
                        style={{ width: '50%', marginLeft: '2px' }}
                        className='form-control mx-2 mt-2'
                    />
                    <button className='btn btn-success p-1 mx-2 mt-2 mb-2'
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                            Add</button>
                    <button
                        className="btn btn-secondary p-1 mt-2 mb-2"
                        onClick={() => dispatch(updateModule(module))}>
                            Update
                    </button>

                </li>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                    <div>
                    <li key={index} className="list-group-item">
                        <FaEllipsisV className="me-2" /> {module.name}
                            <span className="float-end">
                                <FaCheckCircle className='text-success'/>
                                <FaPlusCircle className='ms-2'/>
                                <FaEllipsisV className='ms-2'/>
                            </span>
                        <button
                            className='btn btn-success ms-2 px-1'
                            onClick={() => dispatch(setModule(module))}>
                            Edit
                        </button>
                        <button
                            className='btn btn-danger ms-2 px-1'
                            onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button>
                        <h3>{module.name}</h3>
                        <p>{module.description}</p>
                    </li>
                    </div>
                ))}



                {/* {modulesList.map((module, index) => (
                    <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>

                        <div>
                            <FaEllipsisV className="me-2" /> {module.name}
                            <span className="float-end">
                                <FaCheckCircle className='text-success'/>
                                <FaPlusCircle className='ms-2'/>
                                <FaEllipsisV className='ms-2'/>
                            </span>
                            <button className="btn btn-danger float-end me-2" onClick={() => deleteModule(module._id)}>
                                Delete
                            </button>
                            <button
                                onClick={(event) => { setModule(module); }}>
                                Edit
                            </button>

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
                ))} */}
            </ul>
        </>
    );
}
export default ModuleList;