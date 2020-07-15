import React, { Component } from 'react'
import { config } from '../../config'
import Card from '../components/Card'
import Search from '../components/Search'



const spinner = <p>LOADING...</p>

class List extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            search: '',
            loading: true
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ search : e.target.value});
    }


    async componentDidMount(){

        const url = 'https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=Avengers Endgame'
       
        await fetch(url, {
            headers: {
                'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
                'x-rapidapi-key': config.imDB_KEY,
                'useQueryString': true
            }
        })
        .then(response => response.json())
        .then(data =>  this.setState({
            data: data.Search,
            loading: false
        }))   
    }

    render(){
       
        const {data, loading, search } = this.state
       
        if(loading) return spinner
        return (
            <React.Fragment>
                <div>
                    <Search handleChange={this.handleChange} />
                    {search}
                </div>

                <div>
                {data.map(movie => (
                        <Card key={movie.imdbID} movie={movie}/>
                ))}
                </div>
            </React.Fragment>
        ) 
    }
}

export default List