import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";
import Form from "./components/Form";
import Text from "./components/Text";
import Img from './components/bhargavi.jpg' 
function App() {
  return (
    <div className="main">
    <div className="App">
      <div className="Img">
        <Image image={Img}/>
      </div>
      <div className="Textarea">
        <div className="NormalText">
          <Text heading="Summer sale" text="Where we should send" percentage="your 30% off"/>
        </div>
        <div className="Form">
          <Form />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
