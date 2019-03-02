import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import MovieItem from './MovieItem';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      rows:[]
    }
    
  }
componentDidMount(){
  //โหลดหลัง initial state
  this.Search('adven');
}

Search = (keyword) =>{
  var dataArr = []
              // api 
  var url = "https://api.themoviedb.org/3/search/movie?api_key=e4e72fc62f838b302fcde3a7837bee06&query="+keyword;
  Axios.get(url).then(result=>{ 
   result.data.results.forEach(item=>{ // loop data
    item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
     dataArr.push(item)    // push data
   });
    this.setState({
      rows:dataArr
    })
  console.log((result.data));
  });
}
  render() {
    return (
      <div className="App">
      <table style={{backgroundColor:'#333',color:'#fff',display:'block'}}>
        <tbody>
          <tr>
            <td>
              <img src={require('./Assets/logo.svg')} alt="logo" width="50"/>
              </td>
              <td>
                Test Api React js
                </td>
            </tr>
          </tbody>
        </table>
     <br/>
      <input style={{fontSize:'24',display:'block' ,width:'100%', paddingLeft:'8'}}
      placeholder="press enter key word movie"
      //event is callback
      onChange={(event)=>{this.Search(event.target.value)}}/>
      {this.state.rows.map(item=>(   //loop change data     map(var=>(do some thing))
    
      <MovieItem movie={item}/>
    
      ))}
     
      </div>
    );
  }
}

export default App;
