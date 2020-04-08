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
            hot: true,
        },
        {
            name: 'Circle',
            label: 'Circle',
            path: '/circle',
        },
        {
            name: 'Ellipse',
            label: 'Ellipse',
            path: '/ellipse',
        },
        {
            name: 'Layer',
            label: 'Layer',
            path: '/layer',
            hot: true,
        },
        {
            name: 'Line',
            label: 'Line',
            path: '/line',
        },
        {
            name: 'Rectangle',
            label: 'Rectangle',
            path: '/rectangle',
        },
        {
            name: 'Square',
            label: 'Square',
            path: '/square',
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
