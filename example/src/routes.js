import { lazy } from 'react';

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

export default {
    examples: [
        {
            name: 'Smiley Face',
            path: '/smiley-face',
            component: SmileyFace,
        },
    ],
    components: [
        {
            name: 'Body',
            path: '/body',
            component: Body,
        },
        {
            name: 'Layer',
            path: '/layer',
            component: Layer,
        },
    ],
    other: [
        {
            name: 'Home',
            path: '/',
            component: Home,
        },
    ],
};
