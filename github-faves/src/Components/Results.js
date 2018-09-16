import React from 'react';
import Repo from './Repo';

const PhotoContainer = props => {
    const results = props.repos;
    let repos;

    // if(results.length > 0) {
    //     repos = results.map(repo => 
    //         <Img url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id} alt={img.title} />
    //     );
    // }
    // else {
    //     // imgs = <NotFound />;
    // }

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
                    {repos}
                </tbody>
            </table>
        </div>
    );
};

export default PhotoContainer;