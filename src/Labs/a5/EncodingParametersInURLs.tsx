import React, { useState } from 'react';

function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    return (
        <div>
            <h3>Encoding Parameters in URLs</h3>
            <h4>Calculator</h4>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(parseInt(e.target.value))}
                className='me-2'
            />
            <input
                type="number"
                value={b}
                onChange={(e) => setB(parseInt(e.target.value))}
            />
            <h3>Path Parameters</h3>
            <a href={`http://localhost:4000/a5/add/${a}/${b}`}>
                <button className='btn btn-primary me-2'>Add {a} + {b}</button>
            </a>
            <a href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
                <button className='btn btn-danger'>Subtract {a} - {b}</button>
            </a>

            <h3>Query Parameters</h3>
            <a className="btn btn-primary me-2"
                href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
                    Add {a} + {b}
                </a>
            <a className="btn btn-danger"
                href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
                    Subtract {a} - {b}
                </a>
        </div>
    );
};

export default EncodingParametersInURLs;