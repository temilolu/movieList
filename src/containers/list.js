import React, { Component } from 'react'
import { config } from '../../config'
import Card from '../components/Card'
import Search from '../components/Search'


class List extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            search: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ search : e.target.value});
    }

    async fetchData(query){
        const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${query}`
       
        await fetch(url, {
            headers: {
                'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
                'x-rapidapi-key': config.imDB_KEY,
                'useQueryString': true
            }
        })
        .then(response => response.json())
        .then(data =>  this.setState({
            data: data.Search
        }))      
    }

    handleSubmit() {
        this.fetchData(this.state.search)
        this.setState({ search : ''});  
    }

    render(){
       
        const {data, search } = this.state
       
        return (
            <React.Fragment>
                <div>
                    <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    {search}
                </div>

                <div>
                {!data ? 'No data' : data.map(movie => (
                    <Card key={movie.imdbID} movie={movie}/>
                ))}
                </div>
            </React.Fragment>
        ) 
    }
}

export default List