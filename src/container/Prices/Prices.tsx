import * as React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { RootState } from '../../store';
import { setRate, fetchRate } from '../../actions';

import { LangState } from '../../reducer';

const mapStateToProps = ({ rates }: RootState) => ({
    rates: rates
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setRate: (rates: Array<string>) => setRate({ rates }),
        fetchRate: () => dispatch(fetchRate())
    }
};

interface Props extends LangState {
    setRate: (rates: Array<string>) => any;
    fetchRate: () => any;
}

class PricesContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchRate();
    }
    
    public render () {
        return <div>123</div>
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PricesContainer);