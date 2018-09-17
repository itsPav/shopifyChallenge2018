import React from 'react';
import Repo from './Repo';

const Results = props => {
    const results = props.repos;

    let rows = results.map(repo => 
        <Repo key={repo.node.url} data={repo} addFavourites={props.addFavourites}/>
    )

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
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default Results;