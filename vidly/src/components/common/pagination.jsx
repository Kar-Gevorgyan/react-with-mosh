import React from 'react';
import _ from 'lodash';
import Proptypes from 'prop-types'

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);

    if(pageCount === 1) return null;

    const pages = _.range(1, pageCount +1 );

    return (
        <nav>
            <ul className="pagination">
                { pages.map(page => (
                    <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
                        <a className="page-link" onClick={() => onPageChange(page)} style={{cursor: "pointer"}}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: Proptypes.number.isRequired,
    pageSize: Proptypes.number.isRequired,
    currentPage: Proptypes.number.isRequired,
    onPageChange: Proptypes.func.isRequired
};

export default Pagination;
