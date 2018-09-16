import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class SearchForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        // const newRoute = '/search/' + this.query.value;
        // window.open(newRoute, '_self');
    }

    render() {
        return (
            <form className="searchForm" onSubmit={this.handleSubmit} >
                <div className="input-group mb-3 formArea">
                    <input type="search" 
                            onChange={this.onSearchChange}
                            className='form-control' 
                            name="search" 
                            ref={(input) => this.query = input}
                            placeholder="Search" />
                    <Button type="submit" className="searchButton">Search</Button>
                </div>
            </form>
        );
    }
}