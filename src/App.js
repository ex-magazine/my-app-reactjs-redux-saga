import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {getListPost as getListPostAction} from './actions/action';


class App extends React.Component {

  render () {  
    const {posts, load} = this.props.posts;
    if(load) {
      return (
        <h1>Data is loading from API ...</h1>
      );
    }
    return (     
      <div className="App">
        <div className='container'>            
          <div className='row'>
            <h1>List Post</h1>
            <div className='table-responsive'>  
              <table className='table table-bordered'>
                <tbody>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                  </tr>                
                {
                  
                  posts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td align='left'>{post.title}</td>
                    </tr>
                  ))
                }
                </tbody>                
              </table>
            </div>
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>      
    );    
  }
  componentDidMount() {
    this.props.getListPost();
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListPost: (params) => dispatch(getListPostAction(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
