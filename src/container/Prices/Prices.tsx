import * as React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { RootState } from '../../store';
import { fetchRate } from '../../actions';

import { State } from '../../reducer';
import Price from '../../components/Prices';

const mapStateToProps = ({ rates }: RootState) => ({
    rates: rates
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
        const { rates } = this.props;
        return <Price rates={rates}/>
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PricesContainer);