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
        adoptable: false,
        inLine: false,
        atFront: false,
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
        ApiService.getPeople()
            .then(people => {
                this.setState({ people })
            })
    }

    adoptButtonClicked() {
        console.log('click');
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let newPeople = this.state.people;
        newPeople.push(this.state.userName);

        this.setState({
            people: newPeople,
            userName: '',
            inLine: true,
            atFront: false,
        });
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
                            adoptable={this.state.adoptable} />)}
                    {(this.state.dog &&
                        <PetSquare adoptButtonClicked={this.adoptButtonClicked}
                            pet={this.state.dog}
                            adoptable={this.state.adoptable} />)}
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