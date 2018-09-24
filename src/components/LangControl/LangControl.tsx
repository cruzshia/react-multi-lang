import * as React from 'react';
import {
    RouteComponentProps,
    withRouter,
    matchPath
} from 'react-router-dom';


import i18n from '../../config/i18n';

interface PathParams {
    lng: string;
}

interface State {
    lang: string;
}

class LangContraol extends React.Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);
        const match = matchPath<PathParams>(props.history.location.pathname, {
            path: '/:lng',
            exact: false,
            strict: false
        });
        let lang = 'zh-TW';
        if (match) {
            lang = match.params.lng;
            i18n.changeLanguage(lang);
        }

        this.state = {
            lang
        };
    }

    componentDidUpdate() {
        i18n.changeLanguage(this.state.lang);
    }

    componentDidMount() {
        const { history } = this.props;
        history.listen((location, action) => {
            const changeLang = location.pathname.split('/')[1];
            if (this.state.lang !== changeLang) {
                this.setState({
                    lang: changeLang
                });
            }
        })
    }

    render () {
        return <div>{this.props.children}</div>;
    }
}

export default withRouter(LangContraol);