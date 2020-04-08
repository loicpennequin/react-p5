import React, {
    Suspense,
    createContext,
    useState,
    useCallback,
    useMemo,
} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom';
import { Layout } from './components/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { CssBaseline } from '@material-ui/core';
import routes from './routes';

export const appContext = createContext();

function ExamplesRoutes() {
    let { path } = useRouteMatch();

    return (
        <Switch>
            {routes.examples.map(route => (
                <Route
                    key={route.name}
                    path={`${path}${route.path}`}
                    component={route.component}
                    exact
                />
            ))}
        </Switch>
    );
}

function ComponentsRoutes() {
    let { path } = useRouteMatch();
    return (
        <Switch>
            {routes.components.map(route => (
                <Route
                    key={route.name}
                    path={`${path}${route.path}`}
                    component={route.component}
                    exact
                />
            ))}
        </Switch>
    );
}

function OtherRoutes() {
    return (
        <Switch>
            {routes.other.map(route => (
                <Route
                    key={route.name}
                    path={route.path}
                    component={route.component}
                    exact
                />
            ))}
        </Switch>
    );
}

export default function App() {
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
                                <Route
                                    path="/examples"
                                    component={ExamplesRoutes}
                                />
                                <Route
                                    path="/components"
                                    component={ComponentsRoutes}
                                />
                                <Route path="/" component={OtherRoutes} />
                            </Switch>
                        </Suspense>
                    </Layout>
                </ThemeProvider>
            </appContext.Provider>
        </Router>
    );
}
