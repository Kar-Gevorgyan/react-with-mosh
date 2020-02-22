import React from 'react';

const SearchBox = ({value , onChange}) => {
    return ( 
        <div>
            <input 
                type="text"
                name="query"
                placeholder="Search.."
                className="form-control mb-3"
                value={value}
                onChange={e => {onChange(e.currentTarget.value)}}
            />
        </div>
     );
}
 
export default SearchBox;