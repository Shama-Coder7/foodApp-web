import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("user", props);

    this.state = {
      userInfo: {
        title: 'Dummy',
        brand: 'no brand',
        thumbnail: '-',
      },
    };
    console.log(this.props.name, 'Child Constructor');
  }

  async componentDidMount() {
    console.log(this.props.name, 'Child ComponentDidMount');

    const data = await fetch('https://dummyjson.com/products/1/');
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

// componentDidUpdate(prevProps,prevState){
// if(this.state.count === prevState.count){

// }
// }


  componentDidUpdate() {
    console.log('ComponentDidUpdate');
    this.timer=setInterval(() => {
      console.log('I am Set Interval');
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('componentwillunmount');
  }

  render() {
    console.log(this.props.name, 'Child Render');

    // const { count2 } = this.state;
    return (
      <div>
        {/* <h2>Count: {this.state.count}</h2>
        <h2>count: {count2}</h2>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increment
        </button> */}
        <h3>{this.props.name} Class</h3>
        <p>{this.props.position}</p>
        <p>MCA Student</p>
        <img src={this.state.userInfo.thumbnail} />
        <p>Title:-{this.state.userInfo.title}</p>
        <p>Brand:-{this.state.userInfo.brand}</p>
      </div>
    );
  }

  //   or like this [another method to call it directly]

  //   render() {
  // const {name, position} = this.props;
  //     return (
  //       <div>
  //         <h3>{name} Class</h3>
  //         <p>{position}</p>
  //         <p>MCA Student</p>
  //       </div>
  //     );
  //   }
}

export default UserClass;
