import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ Component, isClosed, ...rest }) {
    const isLoggedIn = false;

    if (isClosed && !isLoggedIn) {
        return (
            <Redirect
                to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
            />    
        );
    }

    // eslint-disable-next-line ract/jsx-props-no-spreading
    return <Route { ...rest} component={Component} />
}

MyRoute.defaultProps = {
    isClosed: false,
};

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    isClosed: PropTypes.bool,    
};