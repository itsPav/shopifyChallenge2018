import React, { Component } from 'react';

export default class Repo extends Component {

    constructor(props) {
        super(props);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);

        this.state = {
          nameWithOwner: '',
          primaryLanguage: '',
          tagName: '',
          added: false,
          favourite: false
        }
    }

    componentWillMount () {
        this.setState({
            nameWithOwner: this.props.data.node.nameWithOwner,
            primaryLanguage: this.props.data.node.primaryLanguage ? this.props.data.node.primaryLanguage.name : "",
            tagName: this.props.data.node.releases.nodes.length > 0 ? this.props.data.node.releases.nodes[0].name : "-",
            added: this.props.added ? '' : 'Add',
            favourite: this.props.favourite ? 'Remove' : ''   
        })
    }

    componentWillReceiveProps({added, favourite}) {
        this.setState({
            added: added ? '' : 'Add',
            favourite: favourite ? 'Remove' : ''   
        })
    }

    addToFavorites = () => {
        if(!this.props.added && !this.props.favourite) {
            this.setState({
                added: true,
                favourite: true
            })
            // send data to favorites and create a repo there
            this.props.addFavourites(this.props.data);
        }
    }

    removeFromFavourites = () => {
        // send data to remove from favourites
        this.props.removeFavourites(this.props.data);
    }

    handleClick = () => {
        this.addToFavorites();
        if(this.state.favourite)
            this.removeFromFavourites();
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-4">{this.state.nameWithOwner}</div>
                <div className="col-sm-3">{this.state.primaryLanguage}</div>
                <div className="col-sm-3">{this.state.tagName}</div>
                <div className="col-sm-2 add" onClick={this.handleClick}>{this.state.added} {this.state.favourite}</div>
            </div>
        );
    }
};