import './App.css';
import CustHook from './CustomHook/CustHook';
import CustHook2 from './CustomHook/CustHook2';
import CustHook3 from './CustomHook/CustHook3';
import CustHook4 from './CustomHook/CustHook4';
import List from './ListkeyMap/List';
import UseRef from './UseRefHook/UseRef';
import UseRef2 from './UseRefHook/UseRef2';

function App() {
  return (
    <div className="App">
      {/* <List />
      <UseRef />
      <UseRef2 /> */}
      {/* <CustHook />
      <CustHook2 /> */}
      <CustHook3 />
      <CustHook4 />
    </div>
  );
}

export default App;
