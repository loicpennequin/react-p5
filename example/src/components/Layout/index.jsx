import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
} from '@material-ui/core';

import { ExpandLess, ExpandMore, GitHub } from '@material-ui/icons';

import { useStyles } from './styles';

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
                    <Typography variant="h2">P5-React</Typography>
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
                <ListItem button component={RouterLink} to="/">
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem button onClick={toggleComponents}>
                    <ListItemText primary="Components" />
                    {componentsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={componentsOpen} timeout="auto" unmountOnExit>
                    <List component="div" className={classes.subList}>
                        <ListItem button component={RouterLink} to="/layer">
                            <ListItemText primary="Layer" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={toggleExemples}>
                    <ListItemText primary="Exemples" />
                    {exemplesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={exemplesOpen} timeout="auto" unmountOnExit>
                    <List component="div" className={classes.subList}>
                        <ListItem
                            button
                            component={RouterLink}
                            to="/smileyface"
                        >
                            <ListItemText primary="Smiley Face" />
                        </ListItem>
                        <ListItem button component={RouterLink} to="/body">
                            <ListItemText primary="Body" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <main className="view">{children}</main>
        </div>
    );
}
