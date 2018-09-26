import * as React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { RootState } from '../../store';
import { fetchRate } from '../../actions';

import { State } from '../../reducer';
import Price from '../../components/Prices';

const mapStateToProps = ({ rates, loading }: RootState) => ({
    rates,
    loading
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchRate: () => dispatch(fetchRate())
    }
};

interface Props extends State {
    fetchRate: () => void;
}

class PricesContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchRate();
    }
    
    public render () {
        const { rates, loading } = this.props;
        return <Price rates={rates} loading={loading}/>
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PricesContainer);