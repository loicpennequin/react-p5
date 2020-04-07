import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './app.css';

function App() {
    return (
        <Router>
            <div className="layout">
                <header className="header">
                    <h1>P5-React Examples</h1>
                </header>
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/smileyface">Smiley Face</Link>
                        </li>
                        <li>
                            <Link to="/layer">Layer</Link>
                        </li>
                    </ul>
                </nav>
                <main className="view">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route
                                path="/"
                                exact
                                component={lazy(() => import('./pages/Home'))}
                            />
                            <Route
                                path="/smileyface"
                                exact
                                component={lazy(() =>
                                    import('./pages/SmileyFace')
                                )}
                            />
                            <Route
                                path="/layer"
                                exact
                                component={lazy(() => import('./pages/Layer'))}
                            />
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>
    );
}

export default App;
