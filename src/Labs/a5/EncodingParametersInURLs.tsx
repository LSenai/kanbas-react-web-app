import React, { useEffect, useState } from 'react';
import axios from "axios";

function EncodingParametersInURLs() {
    const API_BASE = process.env.REACT_APP_API_BASE;

    const a5API = `${API_BASE}/a5/`;

    const [a, setA] = useState(34);
    const [b, setB] = useState(23);

    const [result, setResult] = useState(0);
    const fetchSum = async (a: number, b: number) => {
        const response = await
            axios.get(`${API_BASE}/a5/add/${a}/${b}`);
        setResult(response.data);
    };
    const fetchSubtraction = async (a: number, b: number) => {
        const response = await
            axios.get(`${a5API}subtract/${a}/${b}`);
        setResult(response.data)
    }

    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async() => {
        const response = await
        axios.get(`${API_BASE}/a5/welcome`);
        setWelcome(response.data);
    };

    useEffect(() => {
        fetchWelcome();
    }, []);

    return (
        <div>
            <h3>Encoding Parameters in URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{ welcome }</h6>
            <h4>Calculator</h4>
            <label htmlFor='a' className='me-1'>a: </label>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(parseInt(e.target.value))}
                className='me-2'
                id='a'
            />
            <label htmlFor='b' className='me-1'>b: </label>
            <input
                type="number"
                value={b}
                onChange={(e) => setB(parseInt(e.target.value))}
                id='b'
            /> <br/>

            <label htmlFor='result' className='me-1 mt-2'>Result: </label>
            <input type="number" value={result} id='result' readOnly />

            <h3>Fetch Results</h3>
            <button className='btn btn-primary' onClick={()=>fetchSum(a, b)}>
                Fetch Sum of {a} + {b}
            </button>
            <button className='btn btn-danger mx-2' onClick={()=>fetchSubtraction(a,b)}>
                Fetch Subtraction of {a} - {b}
            </button>


            <h3>Path Parameters</h3>
            <a href={`${API_BASE}/a5/add/${a}/${b}`}>
                <button className='btn btn-primary'>Add {a} + {b}</button>
            </a>
            <a href={`${API_BASE}/a5/subtract/${a}/${b}`}>
                <button className='btn btn-danger mx-2'>Subtract {a} - {b}</button>
            </a>

            <a href={`${API_BASE}/a5/multiply/${a}/${b}`}>
                <button className='btn btn-success me-2'>Multiply {a} * {b}</button>
            </a>

            <a href={`${API_BASE}/a5/divide/${a}/${b}`}>
                <button className='btn btn-info me-2'>Divide {a} / {b}</button>
            </a>

            <h3>Query Parameters</h3>
            <a className="btn btn-primary"
                href={`${API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}`}>
                    Add {a} + {b}
                </a>
            <a className="btn btn-danger mx-2"
                href={`${API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
                    Subtract {a} - {b}
                </a>
            <a className="btn btn-success me-2"
                href={`${API_BASE}/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
                    Multiply {a} * {b}
                </a>
            <a className="btn btn-info me-2"
                href={`${API_BASE}/a5/calculator?operation=divide&a=${a}&b=${b}`}>
                    Divide {a} / {b} 
                </a>
        </div>
    );
};

export default EncodingParametersInURLs;