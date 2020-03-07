import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      query: ''
    }
    this.search = this.search.bind(this)

  }



  // AJAX POST REQUEST

  requestRepos (userName) {

    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      data: userName,
      contentType: 'application/json',
      success: (results) => {console.log(results, 'added')}
    })

  }


  search (term) {
    this.setState({query : term})
    this.requestRepos(JSON.stringify({query: term}))
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));