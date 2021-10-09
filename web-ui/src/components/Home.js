import React from 'react';
import axios from 'axios';

import '../less/global.less';

export default class Home extends React.Component {
  state = {
    healthcheckText: 'Checking systems...'
  }

  successMessage = 'All systems are up and running';
  errorMessage = 'Something is wrong, please check the logs';

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/healthcheck`)
      .then(res => {
        this.setState({healthcheckText: (res.status === 200) ? this.successMessage : this.errorMessage});
      }).catch(res => {
        this.setState({healthcheckText: this.errorMessage});
      });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to foody!</p>
        <h2>Healhcheck</h2>
        <p>{this.state.healthcheckText}</p>
      </div>
    )
  }
}
