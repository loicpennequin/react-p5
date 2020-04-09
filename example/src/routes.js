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
            path: '/body',
            hot: true,
        },
        {
            name: 'Circle',
            path: '/circle',
        },
        {
            name: 'Ellipse',
            path: '/ellipse',
        },
        {
            name: 'Layer',
            path: '/layer',
            hot: true,
        },
        {
            name: 'Line',
            path: '/line',
        },
        {
            name: 'Point',
            path: '/point',
        },
        {
            name: 'Rectangle',
            path: '/rectangle',
        },
        {
            name: 'Square',
            path: '/square',
        },
    ],
    other: [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'GettingStarted',
            label: 'Getting Started',
            path: '/getting-started',
        },
    ],
};

export default {
    examples: routes.examples.map(generateLazyComponent),
    components: routes.components.map(generateLazyComponent),
    other: routes.other.map(generateLazyComponent),
};
