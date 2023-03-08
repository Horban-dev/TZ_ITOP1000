import React from 'react';

const Select = ({keys, setFrom, setTo}) => {
    
    return (
        <div className="selects">
           <select onChange={(e) => setFrom(e.target.value)} className="form-select" aria-label="Default select example">
                <option >Convert from...</option>
                {keys.map((item) => <option key={item} value={item} >{item}</option> )}
            </select>
                <select onChange={(e) => setTo(e.target.value)}class="form-select" aria-label="Default select example">
                    <option >Convert to...</option>
                {keys.map((item) => <option key={item} value={item} >{item}</option> )}
            </select>
        </div>
    );
};

export default Select;