import React, { useState, useEffect } from 'react';
import ComicCard from '../comic-card/Comic-card';
import Pagination from '../pagination/Pagination';
import marvelApi from '../../api/marvelApi';
import './comic-grid.scss';

const ComicGrid = props => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = { limit: '20' };
            response = await marvelApi.getComicsList({ params });
            setItems(response.data.results);
        }
        getList();
    }, [props]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="comic-grid">
            {
                currentItems.map((item, i) => <ComicCard item={item} key={i} />)
            }
            <div className="comic-grid__paginate">
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={items.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
};

export default ComicGrid;