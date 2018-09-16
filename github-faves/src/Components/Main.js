import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';

import Header from './Header';
import SearchForm from './SearchForm';
import Results from './Results';
import Favorites from './Favorites';

export default class Main extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          query: '',
          repos: [],
          isLoading: false
        }
      }

      componentWillMount () {
        this.setState({
          query: this.props.query
        })
      }

      componentDidMount() {
        this.performSearch(this.state.query);
      }

      performSearch = (query) => {
        axios({
          url: `https://api.github.com/graphql`,
          method: 'post',
          headers: { "Authorization": "bearer " + apiKey},
          data: {
            query: `{
              search(query: "shopify", type: REPOSITORY, first: 10) {
                repositoryCount
                edges {
                  node {
                    ... on Repository {
                      nameWithOwner
                      url
                      primaryLanguage {
                        name
                      }    
                      releases(last: 1) {
                        nodes {
                          name
                        }
                      }  
                    }
                  }
                }
              }
            }`
          }

        }).then(response => {
          console.log(response.data.data.search.edges);
          this.setState({
            repos: response.data,
            isLoading: false
          })
        })
        .catch(error => { 
          console.log('Error fetching and parsing data', error);
        });
      }

      render() {
        return (
          <div>
            <Header />
            <div className="row mainArea">
                <div className="col-md searchArea">
                    <SearchForm />
                    {/* { (this.state.isLoading) 
                        ? <h1>Searching...</h1> 
                        : <PhotoContainer 
                        imgs = {this.state.imgs} 
                        query={this.state.query} />
                    } */}
                    <Results />
                </div>
                <div className="col-md favArea">
                    <Favorites />
                </div>
            </div>
          </div>
        );
      }

}