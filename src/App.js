import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'

function App() {
  const cards = data.map(item =>
    <Card
      key={item.id}
      item={item}
    />)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-list">
        {cards}
      </div>
    </div>
  );
}

export default App;
