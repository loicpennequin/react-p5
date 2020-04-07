import './app.css';
import React, {
    lazy,
    Suspense,
    createContext,
    useState,
    useCallback,
    useMemo,
} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

export const appContext = createContext();

function App() {
    const [state, setState] = useState({
        clearOnDraw: true,
        debug: true,
        // frameRate: 1,
    });

    const mergeState = useCallback(newState => {
        setState(state => ({ ...state, ...newState }));
    }, []);
    const api = useMemo(() => ({ state, setState: mergeState }), [
        mergeState,
        state,
    ]);

    return (
        <appContext.Provider value={api}>
            <ThemeProvider theme={theme}>
                <Router basename="/react-p5">
                    <Layout>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route
                                    path="/"
                                    exact
                                    component={lazy(() =>
                                        import(
                                            /* webpackChunkName: "home.page" */ './pages/Home'
                                        )
                                    )}
                                />
                                <Route
                                    path="/smileyface"
                                    exact
                                    component={lazy(() =>
                                        import(
                                            /* webpackChunkName: "smiley.page" */ './pages/SmileyFace'
                                        )
                                    )}
                                />
                                <Route
                                    path="/layer"
                                    exact
                                    component={lazy(() =>
                                        import(
                                            /* webpackChunkName: "layer.page" */ './pages/Layer'
                                        )
                                    )}
                                />
                                <Route
                                    path="/body"
                                    exact
                                    component={lazy(() =>
                                        import(
                                            /* webpackChunkName: "body" */ './pages/Body'
                                        )
                                    )}
                                />
                            </Switch>
                        </Suspense>
                    </Layout>
                </Router>
            </ThemeProvider>
        </appContext.Provider>
    );
}

export default App;
