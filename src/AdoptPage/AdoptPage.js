import React, { Component } from 'react'
import PetSquare from '../PetSquare/PetSquare'
import Queue from '../Queue/Queue'
import ApiService from '../services/ApiService'
import './AdoptPage.css'

export default class AdoptPage extends Component {
    state = {
        cat: {},
        dog: {},
        people: [],
        userName: '',
        inLine: false,
        atFront: false,
        waiting: '',
        adoptMessage: '',
    }

    componentDidMount() {
        ApiService.getCat()
            .then(cat => {
                this.setState({ cat })
            })
            .catch((error) => this.setState({ error }));
        ApiService.getDog()
            .then(dog => {
                this.setState({ dog })
            })
            .catch((error) => this.setState({ error }));
        ApiService.getPeople()
            .then(people => {
                this.setState({ people })
            })
            .catch((error) => this.setState({ error }));
    }

    adoptButtonClicked(type) {
        console.log(type);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        ApiService.addPerson(this.state.userName)
            .then(people => {
                this.setState({
                    people: people,
                    userName: '',
                    inLine: true,
                    atFront: false,
                })
            })
    }

    changeUserName(e) {
        this.setState({
            userName: e.target.value,
        })
    }

    render() {
        return (
            <div className='AdoptPage' >

                <div className='pets'>
                    {(this.state.cat &&
                        <PetSquare adoptButtonClicked={this.adoptButtonClicked}
                            pet={this.state.cat}
                            type={'cat'}
                            adoptable={this.state.atFront} />)}
                    {(this.state.dog &&
                        <PetSquare adoptButtonClicked={this.adoptButtonClicked}
                            pet={this.state.dog}
                            type={'dog'}
                            adoptable={this.state.atFront} />)}
                </div>

                {this.state.inLine === false && (
                    <form className="adopt-form" onSubmit={e => this.handleFormSubmit(e)}>
                        <h4>Want to adopt one of these cuties?</h4>
                        <label htmlFor="name">Your name:</label>
                        <input
                            id="name"
                            type='text'
                            value={this.state.userName}
                            onChange={e => this.changeUserName(e)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                )}

                <Queue
                    people={this.state.people} />

            </div>
        )
    }
}