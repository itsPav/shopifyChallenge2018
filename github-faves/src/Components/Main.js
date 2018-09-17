import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';

import Header from './Header';
import SearchForm from './SearchForm';
import Results from './Results';
import Favourites from './Favourites';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.addFavourites = this.addFavourites.bind(this);

        this.state = {
          repos: [],
          favourites: [],
          isLoading: false
        }
      }

      componentWillMount () {
        this.setState({
          repos: [],
          favourites: []
        })
      }

      performSearch = (query) => {
        axios({
          url: `https://api.github.com/graphql`,
          method: 'post',
          headers: { "Authorization": "bearer " + apiKey},
          data: {
            query: `{
              search(query: "${query}", type: REPOSITORY, first: 10) {
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
          if(query.length > 0) {
            console.log(response.data.data.search.edges);
          }
          this.setState({
            repos: response.data.data.search.edges,
            isLoading: false
          })
        })
        .catch(error => { 
          console.log('Error fetching and parsing data', error);
        });
      }

      addFavourites(data) {
        var newStateArray = this.state.favourites;
        newStateArray.push(data);
        this.setState({
          favourites: newStateArray
        })
      }

      render() {
        return (
          <div>
            <Header />
            <div className="row mainArea">
                <div className="col-md searchArea">
                    <SearchForm performSearch={this.performSearch}/>
                    {/* { (this.state.isLoading) 
                        ? <h1>Searching...</h1> 
                        : <PhotoContainer 
                        imgs = {this.state.imgs} 
                        query={this.state.query} />
                    } */}
                    <Results repos={this.state.repos} addFavourites={this.addFavourites} />
                </div>
                <div className="col-md favArea">
                    <Favourites favourites={this.state.favourites}/>
                </div>
            </div>
          </div>
        );
      }

}