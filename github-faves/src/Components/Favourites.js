import React from 'react';
import Repo from './Repo';

const Favourites = props => {
    const faves = props.favourites;
    const favourite = true;
    const added = true;

    let rows = faves.map(repo => 
        <Repo key={repo.node.url} data={repo} removeFavourites={props.removeFavourites} favourite={favourite} added={added}/>
    )

    return(
        <div>
            <div className="row heading">
                <div className="col-sm-4">Name</div>
                <div className="col-sm-3">Language</div>
                <div className="col-sm-3">Latest Tag</div>
                <div className="col-sm-2"></div>
            </div>
            {rows}
        </div>
    );
};

export default Favourites;