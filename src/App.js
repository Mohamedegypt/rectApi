import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resalut from './components/data';

class App extends Component {
   constructor() {
    super();
    this.state = {
      pic: '',
      picurl: '',
      author: '',
      authorurl: '',
    }
  }

showDate = () => {

  /*
  const fetchAsync = async () =>  {

      try {
          let response = await fetch('https://picsum.photos/list');
         let data = await response.json();
            console.log(data)
             let mat = Math.floor(Math.random() * data.length);
            console.log(data[mat]);
             this.setState({
                   pic: "https://picsum.photos/1000/1300?image="+data[mat].id,
                    picurl: data[mat].post_url,
                    author: data[mat].author,
                    authorurl: data[mat].author_url,
                  })
    }
    catch(err){
      console.log(err)
    }
  }
    fetchAsync()
  }
*/

 const fetchAsync = async ()  => {
  // await response of fetch call
  let response = await fetch('https://picsum.photos/list');
  // only proceed once promise is resolved
  let data = await response.json();
  return data;
}
fetchAsync()
    .then(data => {
     let mat = Math.floor(Math.random() * data.length);
      console.log(data[mat]);
       this.setState({
                    pic: "https://picsum.photos/400/400?image="+data[mat].id,
                    picurl: data[mat].post_url,
                    author: data[mat].author,
                    authorurl: data[mat].author_url,
                  })
    })
    .catch(reason => console.log(reason.message))
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <p className="App-intro">
           <button type="button" className="btn btn-primary m-4" onClick ={this.showDate}>Fetch Data</button>   
        </p>
        {this.state.pic ?
          <div>
        <Resalut 
        auther={this.state.author}
         linkauthor={this.state.authorurl} 
          image={this.state.pic} 
           imageurl={this.state.picurl}
            /></div>
             : null}
            </div>
      </div>
    );
  }
}

export default App;
