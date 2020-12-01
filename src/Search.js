import React from 'react'
import './Search.css'
import { useParams } from 'react-router-dom';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function Search() {
    const { searchTerm } = useParams();

    return (
        <div className='search'>
            <div className="search__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
        </div>
    )
}

export default Search
