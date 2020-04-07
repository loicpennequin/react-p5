import './app.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
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
                            <Route
                                path="/body"
                                exact
                                component={lazy(() => import('./pages/Body'))}
                            />
                        </Switch>
                    </Suspense>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
