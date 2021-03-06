import React, { Component } from 'react';
import Repo from './Repo';

export default class Results extends Component {

    constructor(props) {
        super(props);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);

        this.state = {
            results: [],
            favTracker: [],
            added: false,
            favourite: false
        }
    }

    componentWillReceiveProps({repos, favTracker}) {
        this.setState({
            results: repos,
            favTracker: favTracker
        })
    }
    
    render() {
        let rows = this.state.results.map((repo) => 
            { 
                return <Repo key={repo.node.url} 
                                data={repo} 
                                addFavourites={this.props.addFavourites} 
                                removeFavourites={this.props.removeFavourites}
                                added={this.state.favTracker.indexOf(repo.node.url) !== -1 
                                        ? 
                                        true
                                        : 
                                        false
                                }
                                favourite={this.state.favTracker.indexOf(repo.node.url) !== -1 
                                    ? 
                                    false
                                    : 
                                    false
                            }
                        />
            }
        )

        return(
            <div className="repo-container">
                <div className="row heading">
                    <div className="col-sm-4">Name</div>
                    <div className="col-sm-3">Language</div>
                    <div className="col-sm-3">Latest Tag</div>
                    <div className="col-sm-2"></div>
                </div>
                {rows}
            </div>
        );
    }
};