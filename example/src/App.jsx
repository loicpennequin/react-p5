import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './app.css';

const Home = lazy(() => import('./pages/Home'));
const SmileyFace = lazy(() => import('./pages/SmileyFace'));

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/smileyface">Smiley Face</Link>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/smileyface" exact component={SmileyFace} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
