import React from 'react';
import axios from 'axios';

import '../less/global.less';

export default class Users extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/users`)
      .then(res => {
        const users = res.data;
        this.setState({users});
      });
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {this.state.users.map(user => 
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><a href={`/users/${user.id}`}>Edit</a></td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}
