import React, { useState, useEffect } from 'react';
import './index.css';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle} from 'react-icons/fa';
import { useParams } from 'react-router';
import ModuleTopButtons from './ModuleTopButtons';
import { useSelector, useDispatch } from 'react-redux';
import{
    addModule, deleteModule, updateModule, setModule, setModules
    } from './reducer';

import { KanbasState } from '../../store';
import * as client from './client';

function ModuleList() {
    const { courseId } = useParams();

    useEffect(() => {
        client.findModulesForCourse(courseId ?? '').then((modules) => 
            dispatch(setModules(modules))
        );
    }, [courseId]);

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    const handleDeleteModule = (moduleId: string) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleAddModule = () => {
        console.log(courseId);
        client.createModule(courseId ?? '', module).then(module => {
            setSelectedModule({...module, _id: courseId})
            dispatch(addModule(module));
        });
    };
    const modules = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
    const modulesList = modules.filter((module) => module.course === courseId);
    
    const [selectedModule, setSelectedModule] = useState<any>({
        _id: '',
        name: '',
        description: '',
        course: courseId,
        lessons: []
    });

    const module = useSelector((state: KanbasState) => 
        state.modulesReducer.module);


    const dispatch = useDispatch();    
    return (
        <>
            <ModuleTopButtons/>
            <div>
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
                    onClick={handleAddModule}>
                        Add as New Module </button>
                <button
                    className="btn btn-primary p-1 mt-2 mb-2"
                    onClick={handleUpdateModule}>
                        Update Existing Module
                </button>
            </div>
            <ul className="list-group wd-modules">
                
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                    <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}> 
                        <div>
                            <FaEllipsisV className="me-2" /> {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className='text-success'/>
                                    <FaPlusCircle className='ms-2'/>
                                    <FaEllipsisV className='ms-2'/>
                                </span>
                            <button
                                className='btn btn-success ms-2 px-1 float-end me-2'
                                onClick={() => dispatch(setModule(module))}
                                style={{borderRadius: "8px"}}>
                                Edit
                            </button>
                            <button
                                className='btn btn-danger ms-2 px-1 float-end'
                                onClick={() => handleDeleteModule(module._id)}
                                style={{borderRadius: "8px"}}>
                                Delete
                            </button>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className='list-group'>
                                {module.lessons?.map((lesson: any, index: any) => (
                                    <li className="list-group-item" key={index}>
                                        <FaEllipsisV className="me-2" /> {lesson?.name}
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