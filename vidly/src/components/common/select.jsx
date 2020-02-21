import React from 'react';

const Select = ({name, label, value, options, error, onChange}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}> {label} </label>
            <select value={value} name={name} onChange={onChange} id={name} className="form-control" >
                <option value=""></option>
                {options.map(option => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Select;