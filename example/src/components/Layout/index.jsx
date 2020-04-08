import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    AppBar,
    Typography,
    Toolbar,
    Box,
    Link,
    Container,
} from '@material-ui/core';
import { ExpandLess, ExpandMore, GitHub } from '@material-ui/icons';
import routes from '../../routes';

import { useStyles } from './styles';

function RouteList({ routes, prefix = '' }) {
    const { pathname } = useLocation();

    return routes.map(route => (
        <ListItem
            button
            key={route.name}
            selected={pathname === `${route.path}`}
            component={RouterLink}
            to={`${prefix}${route.path}`}
        >
            <ListItemText primary={route.name} />
        </ListItem>
    ));
}

export function Layout({ children }) {
    const [componentsOpen, setComponentsOpen] = useState(false);
    const [exemplesOpen, setExemplesOpen] = useState(false);

    const classes = useStyles();
    const toggleComponents = () => setComponentsOpen(!componentsOpen);
    const toggleExemples = () => setExemplesOpen(!exemplesOpen);

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h3" component="h1">
                        <RouterLink to="/" className={classes.headerTitle}>
                            P5-React
                        </RouterLink>
                    </Typography>
                    <Box ml="auto">
                        <Link href="https://github.com/loicpennequin/react-p5">
                            <GitHub
                                fontSize="large"
                                style={{ color: 'white' }}
                            />
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>

            <List component="nav" className={classes.list}>
                <RouteList routes={routes.other} />

                <ListItem button onClick={toggleComponents}>
                    <ListItemText primary="Components" />
                    {componentsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={componentsOpen} timeout="auto" unmountOnExit>
                    <List component="div" className={classes.subList}>
                        <RouteList
                            routes={routes.components}
                            prefix="/components"
                        />
                    </List>
                </Collapse>

                <ListItem button onClick={toggleExemples}>
                    <ListItemText primary="Exemples" />
                    {exemplesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={exemplesOpen} timeout="auto" unmountOnExit>
                    <List component="div" className={classes.subList}>
                        <RouteList
                            routes={routes.examples}
                            prefix="/examples"
                        />
                    </List>
                </Collapse>
            </List>
            <Container component={Box} mt={3}>
                {children}
            </Container>
        </div>
    );
}
