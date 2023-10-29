import React from 'react';
import UserFunction from './UserFunction';
import UserClass from './UserClass';
import UserContext from './utils/UserContext';
// import UserContext from './utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log('Parent Constructor');
  }
  componentDidMount() {
    // console.log('Parent ComponentDidMount');
  }

  render() {
    // console.log('Parent Render');

    return (
      <div>
        <h1>About Us</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h3 className="text-xl font-bold">
                LoggedIn User :- {loggedInUser}
              </h3>
            )}
          </UserContext.Consumer>
        </div>
        {/* <UserFunction name={'Shama'} position={'Frontend Developer'} /> */}

        {/* <UserClass name={'Parveen'} position={'Software Engineer'} /> */}
        {/* <UserClass name={'Shama'} position={'Frontend Developer'} /> */}
        {/* <UserClass name={'Dev'} position={'Full Stack Developer'} /> */}
      </div>
    );
  }
}

export default About;

// UserFunction will return some piece of JSx.
// UserClass have a render method which will return some piece of JSx.
