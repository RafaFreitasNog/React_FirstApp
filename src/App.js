import { Subtitle } from "./Text";
import { Subtitle2 } from "./Text";
import LoremIpsumTxt from "./components/LoremIpsum";


function HelloWorld() {
  return <h1>Hello, World!</h1>
}

function App() {
  return (
    <div>
        <HelloWorld/>
        <Subtitle/>
        <Subtitle2/>
        <LoremIpsumTxt/>
    </div>
  );
}

export default App;
