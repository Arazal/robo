import React, { Component} from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList/CardList'
import SearchBox from '../components/SearchBox/SearchBox'
import Scroll from '../components/Scroll/Scroll'
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry'

import { setSearchField } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App  extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
           
        }
    }

    componentDidMount() {
       
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(responce => responce.json())
            .then(results => this.setState({robots: results}))
    }

  

    render() {
        const {robots } = this.state
        const { searchField, onSearchChange}  = this.props
        const filteredRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(
                    searchField.toLowerCase()
                )
            }
        )
        return robots.lenght ?
             <h1>Loading</h1> :
        (
                <div>
                    <h1 className='tc f1'>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                   
                </div>
         )
        
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
