import React from 'react';
import RestoList from '../resto-list/resto-list'


export default function DisplayRestoResults(props){
    return(<div className="results">
    <RestoList restaurants={this.props.restaurants}/>
    </div>)
};