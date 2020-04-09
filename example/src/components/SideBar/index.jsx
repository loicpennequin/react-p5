import React, { useState } from 'react';
import clsx from 'clsx';
import routes from '../../routes';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore, Whatshot } from '@material-ui/icons';
import { useStyles } from './styles';

function RouteList({ routes, prefix = '', onClick = () => {} }) {
    const { pathname } = useLocation();

    return routes.map(route => (
        <ListItem
            button
            key={route.name}
            selected={pathname === `${route.path}`}
            component={RouterLink}
            to={`${prefix}${route.path}`}
            onClick={onClick}
        >
            <ListItemText
                primary={
                    <>
                        {route.label || route.name} {route.hot && <Whatshot />}
                    </>
                }
            />
        </ListItem>
    ));
}

export function SideBar({ onLinkClick, className, ...props }) {
    const [componentsOpen, setComponentsOpen] = useState(false);
    const [exemplesOpen, setExemplesOpen] = useState(false);

    const classes = useStyles();
    const toggleComponents = () => setComponentsOpen(!componentsOpen);
    const toggleExemples = () => setExemplesOpen(!exemplesOpen);

    return (
        <List
            component="nav"
            className={clsx([classes.root, className])}
            {...props}
        >
            <RouteList routes={routes.other} onClick={onLinkClick} />

            <ListItem button onClick={toggleComponents}>
                <ListItemText primary="Components" />
                {componentsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={componentsOpen} timeout="auto" unmountOnExit>
                <List component="div" className={classes.subList}>
                    <RouteList
                        routes={routes.components}
                        prefix="/components"
                        onClick={onLinkClick}
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
                        onClick={onLinkClick}
                    />
                </List>
            </Collapse>
        </List>
    );
}
