import logo from './logo.svg';
import './App.css';
import { Banner } from './components/banner';
import { Timer } from './components/timer';

function App() {
/*
state={
    text:{
        recipient:'95855990',
        textmessage:'test',
    }
}
sendText= _ =>{
    const { text } = this.state
    fetch(`https://localhost:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err=>console.error(err))
}

const { text }=this.state;*/

  return (
    <div className="App">
      <Banner/>
      <Timer />
    
    </div>
    /*<input value={text.recipient} onChange={e=>this.setState({text:{...text,recipient:e.target.value}})}/>
      <textarea rows={5} value={text.textmessage} style={textArea} onChange={e=>this.setState({text:{...text,textmessage:e.target.value}})}/>
      <button onClick={this.sendText}>test</button>*/
  );
}

export default App;
