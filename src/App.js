import React ,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import ReactDOM from 'react-dom';
class App extends Component{

  state = {
    fields : {}
  }


  onSubmit = fields => {
    this.setState({fields})
  }

  render(){
    return(
      <div className="App">
      <Form onSubmit= {fields => this.onSubmit(fields)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
export default App;
