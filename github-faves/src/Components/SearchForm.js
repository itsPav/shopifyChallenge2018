import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class SearchForm extends Component {

    state = {
        query: '',
    }
     
    onSearchChange = () => {
        this.setState({
            query: this.query.value
        })
        
        if(this.query.value.length === 0) {
            this.props.performSearch("");
        }
    }
      
    handleSubmit = e => {
        e.preventDefault();
        this.props.performSearch(this.state.query);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="row">
                    <div className="col-sm-8">
                        <input
                            onChange={this.onSearchChange}
                            ref={ input => this.query = input}
                            placeholder="Search" 
                        />
                    </div>
                    <div className="col-sm-4">
                        <Button type="submit" className="searchButton">Search</Button>
                    </div>
                </div>
            </form>
        );
    }
}