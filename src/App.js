import logo from './logo.svg';
import './App.css';
import PageLayout from './components/PageLayout.jsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      header
      </header> */}
        <PageLayout>Page layout children</PageLayout>
    </div>
  );
}

export default App;
