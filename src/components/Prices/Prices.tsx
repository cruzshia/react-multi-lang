import * as React from 'react';
import {
    RouteComponentProps
} from 'react-router-dom';

interface PathParams {
    lng: string;
}


class Prices extends React.Component<RouteComponentProps<PathParams>> {
    public render() {
        return (
            <div></div>
        );
    }
}

export default Prices;