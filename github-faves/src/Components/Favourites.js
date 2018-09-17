import React from 'react';
import Repo from './Repo';

const Favourites = props => {
    const results = props.repos;

    return(
        <div className="repo-container">
            <table className="repo-list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Latest Tag</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    );
};

export default Favourites;