
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './Utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[]
}])

function App() {
  return (
    <Provider store={store}>
    <div> 
    <Head/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
