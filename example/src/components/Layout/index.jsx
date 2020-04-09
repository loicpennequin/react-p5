import React from 'react';
import { useStyles } from './styles';
import { Container, Box } from '@material-ui/core';
import { SideBar } from '../SideBar';
import { Header } from '../Header';

export function Layout({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header className={classes.header} />
            <SideBar />
            <Container component={Box} mt={3}>
                {children}
            </Container>
        </div>
    );
}
