import React from 'react';
import DefaultLayout from '../../layouts/index';
import axios from 'axios';
import AdCard from '../../components/AdCard';
import CarCard from '../../components/CarCard';
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      loggedIn: false,
      token: localStorage.getItem('token')
     };
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    const headers = {
      'Content-Type': 'application/json',
      'x-auth-token': this.state.token
    };
      axios.get('http://localhost:5000/users/auth/user', {headers})
      .then(response => {
        console.log(response.data)
        if (response.status === 200) {
          this.setState({
            loggedIn: true,
            username: response.data.firstName
          })
        } else {
          console.log('Get user: no user');
          this.setState({
            loggedIn: false,
            username: null
          })
        }
      })
    }

  render() {
    return (
      <DefaultLayout>
        {this.state.loggedIn &&
          <p>Welcome, {this.state.username}</p>
        }
        <AdCard />
        <CarCard />
      </DefaultLayout >
    );
  }
}

export default index;
