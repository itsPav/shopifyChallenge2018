import React from 'react';
import Repo from './Repo';

const Results = props => {
    const results = props.repos;
    var added = false;
    const favTracker = props.favTracker;

    let rows = results.map((repo) => 
        { 
            if(favTracker.indexOf(repo.node.url) !== -1) {
                added = true;
            } else {
                added = false;
            }
            return <Repo key={repo.node.url} data={repo} addFavourites={props.addFavourites} added={added}/>
        }
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