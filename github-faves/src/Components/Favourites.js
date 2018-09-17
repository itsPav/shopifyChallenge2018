import React from 'react';
import Repo from './Repo';

const Favourites = props => {
    const results = props.favourites;
    let faves = [];
    faves = results.filter(repo => faves.indexOf(repo) !== -1 );

    let rows = faves.map(repo => 
        <Repo key={repo.node.url} data={repo}/>
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

export default Favourites;