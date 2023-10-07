import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div> 
    <h1 className="text-3xl font-bold">Namaste react </h1>
    <Head/>
    <Body/>
    <Sidebar/>
    </div>
  );
}

export default App;
