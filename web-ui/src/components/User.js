import React from 'react';
import axios from 'axios';
import SearchDropdown from './SearchDropdown';

import '../less/global.less';
import '../less/user.less';

export default class Users extends React.Component {

  state = {
    user: {},
    userFoods: []
  }

  async addFood(foodId) {
    const exists = this.state.userFoods.filter(existingUserFood => {
      return existingUserFood.foodId === foodId;
    });

    if (exists.length) {
      alert('Food already in the list');
      return;
    }
    
    const servingsPerWeek = parseInt(prompt('Servings per week', 1));
    if (!servingsPerWeek || isNaN(servingsPerWeek) || servingsPerWeek < 1) {
      alert('Please enter an positive integer value');
      return;
    }

    await axios.put(`${process.env.REACT_APP_PUBLIC_API_URL}/users/${this.props.match.params.userId}/foods/${foodId}`, {
      servingsPerWeek
    });

    const response = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/users/${this.props.match.params.userId}/foods/${foodId}`);

    this.setState({
      userFoods: [...this.state.userFoods, response.data]
    });
  }

  async searchFood(search) {
    const response = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/foods?search=${search}`)
    return response.data ?? undefined;
  }

  async removeFood(foodId) {
    await axios.delete(`${process.env.REACT_APP_PUBLIC_API_URL}/users/${this.props.match.params.userId}/foods/${foodId}`)
    
    const userFoods = this.state.userFoods.filter(userFood => {
      return userFood.foodId !== foodId;
    });

    this.setState({userFoods});
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/users/${this.props.match.params.userId}`).then((response) => {
      this.setState({user: response.data});
    })
    
    axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/users/${this.props.match.params.userId}/foods`).then((response) => {
      this.setState({userFoods: response.data});
    });
  }

  render() {
    return (
      <div>
        <h1>User information</h1>
        <p>ID: {this.state.user.id}</p>
        <p>Name: {this.state.user.name}</p>
        <p>Email: {this.state.user.email}</p>

        <SearchDropdown
          inputId='food-search'
          inputPlaceholder='Search for foods...'
          dropdownId='searched-foods'
          optionClassName='food'
          optionTextField='description'
          optionIdField='id'
          onInputChange={this.searchFood.bind(this)}
          onOptionClick={this.addFood.bind(this)}
        />

        <h2>Foods</h2>
        <table>
          <thead>
            <tr><th>ID</th><th>Description</th><th>Publication date</th><th>Weekly servings</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {this.state.userFoods.map(userFood =>
              <tr key={userFood.id}>
                <td>{userFood.food.id}</td>
                <td>{userFood.food.description}</td>
                <td>{userFood.food.publicationDate}</td>
                <td>{userFood.servingsPerWeek ?? 0}</td>
                <td><button onClick={() => this.removeFood(userFood.food.id)}>Remove</button></td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}
