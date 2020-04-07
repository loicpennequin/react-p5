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
import { CssBaseline } from '@material-ui/core';

export const appContext = createContext();

const Home = lazy(() =>
    import(/* webpackChunkName: "home.page" */ './pages/Home')
);
const SmileyFace = lazy(() =>
    import(/* webpackChunkName: "smiley.page" */ './pages/SmileyFace')
);
const Layer = lazy(() =>
    import(/* webpackChunkName: "layer.page" */ './pages/Layer')
);
const Body = lazy(() => import(/* webpackChunkName: "body" */ './pages/Body'));

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
        <Router basename="/react-p5">
            <appContext.Provider value={api}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layout>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route
                                    path="/smileyface"
                                    exact
                                    component={SmileyFace}
                                />
                                <Route path="/layer" exact component={Layer} />
                                <Route path="/body" exact component={Body} />
                            </Switch>
                        </Suspense>
                    </Layout>
                </ThemeProvider>
            </appContext.Provider>
        </Router>
    );
}

export default App;
