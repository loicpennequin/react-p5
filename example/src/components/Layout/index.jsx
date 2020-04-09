import React from 'react';
import { useStyles } from './styles';
import { Container, Box, useMediaQuery } from '@material-ui/core';
import { SideBar } from '../SideBar';
import { Header } from '../Header';

export function Layout({ children }) {
    const classes = useStyles();
    const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

    return (
        <div className={classes.root}>
            <Header className={classes.header} />
            {isDesktop && <SideBar />}
            <Container component={Box} mt={3} className={classes.main}>
                {children}
            </Container>
        </div>
    );
}
