import Layout from './components/Layout';
import Inspector from './components/Inspector';
import Dashboard from './components/Dashboard';
import VisualComponents from './components/VisualComponents';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Inspector />
        <Dashboard />
        <VisualComponents />
      </Layout>
    </div>
  );
}

export default App;
