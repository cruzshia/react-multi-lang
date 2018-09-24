import * as React from 'react';
import {
    RouteComponentProps
} from 'react-router-dom';

interface PathParams {
    lng: string;
}


class Prices extends React.Component<RouteComponentProps<PathParams>> {
    public render() {
        let { match } = this.props;
        return (
            <div>Prices: {match.params.lng}</div>
        );
    }
}

export default Prices;