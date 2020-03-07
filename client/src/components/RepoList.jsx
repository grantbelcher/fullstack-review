import React from 'react';
// import RepoEntry from './RepoEntry.jsx'

// const RepoList = (props) => {

//   var repoEntry = props.repos.map((entry) => {
//   return <h1>REPO</h1>
//   })

//   return (
//     <div>
//       <h4> Repo List Component </h4>
//       There are {props.repos.length} repos.
//       {repoEntry}
//     </div>
//   )


// }

class RepoList extends React.Component {
  constructor(props) {
    super(props)
  }
  ComponentDidMount() {
    console.log('REPO LIST MOUNTED')
  }

  render() {
    var repoEntry = this.props.repos.map((entry) => {
    return <li><a href={entry.url}>{entry.userName}</a></li>

      // (
      //   <div>



      //     {/* <h4>{entry.name}</h4>
      //     <h6>{entry.userName}</h6> */}
      //     {/* <a href={entry.url}>{entry.name}</a> */}
      //   </div>
      // )
    })

    return (
      <div>
        <h4> Repo List Component </h4>
        There are {this.props.repos.length} repos.
        {repoEntry}
      </div>
    )
  }

}




export default RepoList;