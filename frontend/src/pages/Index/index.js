import React from 'react';
import DefaultLayout from '../../layouts/index';
import axios from 'axios';
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      loggedIn: false
     };
  }

  getUser() {
      axios.get('/user/').then(response => {
        console.log('Get user response: ')
        console.log(response.data)
        if (response.data.user) {
          console.log(
            'Get User: There is a user saved in the server session: ')

          this.setState({
            loggedIn: true,
            username: response.data.user.username
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
          {/* INDEX PAGE CONTENT */}

        Index Page
      </DefaultLayout >
    );
  }
}

export default index;
