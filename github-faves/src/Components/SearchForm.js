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
            <form className="searchForm" onSubmit={this.handleSubmit} >
                <div className="input-group mb-3 formArea">
                    <input 
                        onChange={this.onSearchChange}
                        ref={ input => this.query = input}
                        placeholder="Search" 
                    />
                    <Button type="submit" className="searchButton">Search</Button>
                </div>
            </form>
        );
    }
}