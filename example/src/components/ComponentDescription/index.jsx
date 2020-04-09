import React, { useMemo } from 'react';
import Markdown from 'react-markdown';
import { Typography } from '@material-ui/core';
// import { useStyles } from './styles';

export function ComponentDescription({ description }) {
    const props = useMemo(
        () => description && Object.entries(description.props),
        [description]
    );
    return description ? (
        <>
            <Typography variant="h4" component="h2">
                {description.displayName}
            </Typography>
            <Markdown source={description.description} />
            <Typography variant="h4" component="h2">
                Props
            </Typography>
            <ul>
                {props.map(([key, value]) => (
                    <li key={key}>
                        <div>
                            {key}{' '}
                            {value.type && <span>| {value.type.name} </span>}
                            {value.required && (
                                <span>
                                    | <strong>REQUIRED</strong>
                                </span>
                            )}
                        </div>
                        <div>{value.description}</div>
                    </li>
                ))}
            </ul>
        </>
    ) : (
        <Typography variant="h4" component="p" align="center">
            Sorry, this component has no description yet{' '}
            <span role="img" aria-label="sad face">
                😰
            </span>
        </Typography>
    );
}
