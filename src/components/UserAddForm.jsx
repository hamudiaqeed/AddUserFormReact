import React from "react";
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hamudi',
            email: 'hamudelul@yahoo.com',
            isGoldClient: false
        };
    }

    handleNameChange(event) { 
        const inputValue = event.target.value;
        this.setState({name: inputValue});
    }

    handleEmailChange(event) {
        const inputValue = event.target.value;
        this.setState({email: inputValue});
    }

    handleIsGoldClientChange(event) {
        const inputValue = event.target.checked;
        this.setState({isGoldClient: inputValue});
    }

    handleFormSubmit(event) {

        event.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            isGoldClient: this.state.isGoldClient
        }

        this.props.updateUsersList(newUser);
    }

    render() {
        return (
            <form className="user-add-form" onSubmit={(event) => {this.handleFormSubmit(event)}}>
                <h2>Adaugati un user:</h2>
                <label htmlFor="name">Nume:</label>
                <input type="text" name="name" value={this.state.name} onChange={(event) => {this.handleNameChange(event)}} />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={this.state.email} onChange={(event) => {this.handleEmailChange(event)}} />

                <label htmlFor="gold-client">E client gold?</label>
                <input type="checkbox" name="gold-client" checked={this.state.isGoldClient} onChange={(event) => {this.handleIsGoldClientChange(event)}}/>

                <input type="submit" value="Adauga user" />
            </form>
        );
    }
}

export default UserAddForm;