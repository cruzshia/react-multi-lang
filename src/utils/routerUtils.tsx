import {
    RouteComponentProps,
    matchPath
} from 'react-router-dom';

interface PathParams {
    lng: string;
    tab?: string;
}

export const getMatch = (props: RouteComponentProps) => {
    return matchPath<PathParams>(props.history.location.pathname, {
        path: '/:lng/:tab',
        exact: false,
        strict: false
    });
}