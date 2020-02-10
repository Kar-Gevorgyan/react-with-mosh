import React, {Component} from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash'

class TableBody extends Component {
    renderCell = (item, column) => {
        if(column.content) return column.content(item)
        return _.get(item, column.path)
    };

    createKey = (item, column) => {
        return item._id + (column.path || column.key)
    };
    trial = () => {
        console.log('trial')
    };

    createPath = (item, column) => {
        if(column.path === 'title') return <Link to={`/movies/${item._id}`}>{this.renderCell(item, column)}</Link>;
        return this.renderCell(item, column)
    };

    render() {
        const { data, columns} = this.props;
        return (
            <tbody>
            {data.map(item => (
                <tr key={item._id}>
                    {columns.map(column => (
                        <td key={this.createKey(item, column)}>
                            {this.createPath(item, column)}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        );
    }
}

export default TableBody;
