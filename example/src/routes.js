import { lazy } from 'react';

const generateLazyComponent = route => {
    return {
        ...route,
        component: lazy(() =>
            import(/* webpackChunkName: "[request]" */ `./pages/${route.name}`)
        ),
    };
};

const routes = {
    examples: [
        {
            name: 'SmileyFace',
            label: 'Smiley Face',
            path: '/smiley-face',
        },
    ],
    components: [
        {
            name: 'Body',
            label: 'Body',
            path: '/body',
        },
        {
            name: 'Layer',
            label: 'Layer',
            path: '/layer',
        },
        {
            name: 'Circle',
            label: 'Circle',
            path: '/circle',
        },
    ],
    other: [
        {
            name: 'Home',
            label: 'Home',
            path: '/',
        },
        {
            name: 'GettingStarted',
            label: 'Getting Started',
            path: '/',
        },
    ],
};

export default {
    examples: routes.examples.map(generateLazyComponent),
    components: routes.components.map(generateLazyComponent),
    other: routes.other.map(generateLazyComponent),
};
