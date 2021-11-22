import React from 'react';
import './App.css';
import UserAddForm from './components/UserAddForm';
import UserList from './components/UserList';
import PostList from './components/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        return data.json();
      })
      .then((json) => {

        const filteredUsers = json.filter(user => user.id < 4);

        filteredUsers.forEach((user) => {
          user.isGoldClient = true;
        })

        this.setState({users: filteredUsers});
      })

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((info) => {
        return info.json();
      })
      .then((post) => {

        const filteredPosts = post.filter(post => post.id < 4)

        this.setState({posts: filteredPosts})
      })
  }

  handleBackgroundChange(event) {
    const userBackground = event.target.value;
    this.setState({background: userBackground});
  }

  handleTextColor(event) {
    const colorText = event.target.value;
    this.setState({color: colorText});
  }

  updateUsersList(user) {
    this.setState((previousState) => {
      return {
        users: [...previousState.users, 
          user
        ]
      }
    });
  }


  render() {

    return (
      <div className="App" style={{background: this.state.background, color: this.state.color}}>
        <h1>Proiect 1</h1>

        <UserAddForm updateUsersList={(user) => {this.updateUsersList(user)}} />

        <UserList users={this.state.users} />

        <PostList posts={this.state.posts} />

        {/* <h1>Lista utilizatori:</h1>
        <UserItem 
          name={this.state.users[0].name}
          email={this.state.users[0].email} 
          salariu={this.state.users[0].salariu} 
          isGoldClient={this.state.users[0].isGoldClient}  
        />
        <UserItem 
          name={this.state.users[1].name} 
          email={this.state.users[1].email} 
          salariu={this.state.users[1].salariu} 
          isGoldClient={this.state.users[1].isGoldClient} 
        /> */}
        <input type="color" onChange={(event) => this.handleBackgroundChange(event)} />
        <input type="color" onChange={(event) => this.handleTextColor(event)} />
      </div>
    );
  }
}

export default App;
