import React from 'react';

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
            <ul className="repo-list">
                {repos}
            </ul>
        </div>
    );
};

export default PhotoContainer;