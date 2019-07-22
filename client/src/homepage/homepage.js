import React from 'react';
import { Link } from 'react-router-dom'

export default function Homepage(props){
    return(<div className="homepage">
    <button type="submit"><Link to='/comment'>Comment</Link></button>
    <button type="submit"><Link to='/sighting'>Sighting</Link></button>
    <button type="submit"><Link to='/search'>Search</Link></button>

    </div>)
};