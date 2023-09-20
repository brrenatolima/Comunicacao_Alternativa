import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import {Loading } from './components'
import routes from './routes'

const routesWithoutMenu = ['/profile', '/task', '/login', '/register', '/recovery-password'];
const logoutRoutes = ['/login', '/register', '/recovery-password'];

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "pwa001-d9892.firebaseapp.com",
  projectId: "pwa001-d9892",
  storageBucket: "pwa001-d9892.appspot.com",
  messagingSenderId: "154497386609",
  appId: "1:154497386609:web:9ec61334f392f063d2f3d0"
};

function App() {
  
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  console.log(currentPath);

  return <Router>
    <Suspense fallback={<Loading />}>
      <Routes>
      {
        routes.map((route, idx) => (
          <Route key={`${idx}_rotas`} exact path={route.path} element={<route.element setCurrentPath={setCurrentPath} loggoutRoutes={logoutRoutes}/>}/>
        ))
      }
    </Routes>
    </Suspense>
<br />
<br />
    {
      !routesWithoutMenu.includes(currentPath) ?
        routes.map((route, idx) => {
          if (route.tab) {
            return <Link key={`${idx}_menu`} to={route.path}>{route.title}</Link>
          }
          return null;
        }) : null
    }
    
  </Router>
}

export default App;
