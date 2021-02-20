import React, { Component } from 'react'
import PetSquare from '../PetSquare/PetSquare'
import ApiService from '../services/ApiService'
import './AdoptPage.css'

export default class AdoptPage extends Component {
    state = {
        cat: {},
        dog: {},
        people: [],
        adoptable: true,
    }

    adoptButtonClicked() {
        console.log('click');
    }

    componentDidMount() {
        ApiService.getCat()
            .then(cat => {
                this.setState({ cat })
            })
        ApiService.getDog()
            .then(dog => {
                this.setState({ dog })
            })
    }

    render() {
        return (
            <div className='AdoptPage' >
                <div className='pets'>
                    {(this.state.cat &&
                        <PetSquare adoptButtonClicked={this.adoptButtonClicked}
                            pet={this.state.cat}
                            adoptable={this.state.adoptable} />)}
                    {(this.state.dog &&
                        <PetSquare adoptButtonClicked={this.adoptButtonClicked}
                            pet={this.state.dog}
                            adoptable={this.state.adoptable} />)}
                </div>
            </div>
        )
    }
}