import React from 'react';
import DefaultLayout from '../../layouts/index';
import axios from 'axios';
import LoginForm from '../../components/LoginForm';

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      loggedIn: false
     };

    // this.getUser = this.getUser.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
    // this.updateUser = this.updateUser.bind(this)

  }

  // componentDidMount() {
  //   this.getUser()
  // }

  updateUser(userObject) {
    this.setState(userObject)
  }

  // getUser() {
  //     axios.get('/users/auth/user').then(response => {
  //       console.log('Get user response: ')
  //       console.log(response.data)
  //       if (response.data.user) {
  //         console.log(
  //           'Get User: There is a user saved in the server session: ')

  //         this.setState({
  //           loggedIn: true,
  //           username: response.data.user.username
  //         })
  //       } else {
  //         console.log('Get user: no user');
  //         this.setState({
  //           loggedIn: false,
  //           username: null
  //         })
  //       }
  //     })
  //   }

  render() {
    return (
      <DefaultLayout>
        {/* {this.state.loggedIn &&
          <p>Welocom, {this.state.username}!</p>
        } */}
      </DefaultLayout >
    );
  }
}

export default index;
