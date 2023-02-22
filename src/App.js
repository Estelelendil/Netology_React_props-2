import './App.css';
import Listing from './components/Listing';
import etsy from './etsy'

function App() {
  const items = JSON.parse(etsy)
  return (
    <div className="App">
      <Listing items={items} />
    </div>
  );
}

export default App;
