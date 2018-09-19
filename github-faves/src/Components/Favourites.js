import React from 'react';
import Repo from './Repo';

const Favourites = props => {
    const faves = props.favourites;
    const favourite = true;
    const added = true;

    let rows = faves.map(repo => 
        <Repo key={repo.node.url} data={repo} favourite={favourite} added={added}/>
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