import React from "react";

const MovieForm = ({match, history}) => {
    return ( 
        <div>
            <h1 className="font-weight-bold">Movie Form - {match.params.id}</h1>
            <button onClick={() => { history.replace('/movies')}} className="btn btn-primary btn-sm">Save</button>
        </div>
     );
}
 
export default MovieForm;
