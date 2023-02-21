import './App.css';
import etsy from './etsy'
import Listing from './Listing';

function App() {
  const items = JSON.parse(etsy)
  return (
    <div className="App">
      <Listing items={items} />
    </div>
  );
}

export default App;
