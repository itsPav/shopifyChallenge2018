import React, { Component } from 'react';

export default class Repo extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          nameWithOwner: '',
          primaryLanguage: '',
          tagName: '',
          add: '',
          added: false
        }
    }

    componentWillMount () {
        this.setState({
            nameWithOwner: this.props.data.node.nameWithOwner,
            primaryLanguage: this.props.data.node.primaryLanguage ? this.props.data.node.primaryLanguage.name : "",
            tagName: this.props.data.node.releases.nodes.length > 0 ? this.props.data.node.releases.nodes[0].name : "-",
            add: 'Add',
            added: false
        })
      }

    addToFavorites = () => {
        this.setState({
            added: true,
            add: ''
        })
        // send data to favorites and create a repo there
        this.props.addFavourites(this.props.data);
    }

    removeFromFavourites = () => {
        this.setState({
            added: false,
            add: 'Add'
        })
    }

    render() {
        return (
            <tr>
                <td className="tbLong">{this.state.nameWithOwner}</td>
                <td className="tbLong">
                    { this.state.primaryLanguage}
                </td>
                <td>
                    { this.state.tagName }
                </td>
                <td className="add" onClick={this.addToFavorites}> {this.state.add} </td>
            </tr>
        );
    }
};