import React, { Component } from "react";

class movieForm extends Component {
    handleSave = () => {
    // Navigate to /products
    //   this.props.history.push("/products");
        this.props.history.replace("/movies")
    };

    render() {
        return (
            <div>
                <h1 className="font-weight-bold">Movie Form - {this.props.match.params.id}</h1>
                <button onClick={this.handleSave} className="btn btn-primary btn-sm">Save</button>
            </div>
        );
    }
}

export default movieForm;
