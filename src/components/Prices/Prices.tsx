import * as React from 'react';
import styled from 'styled-components';
import CoinBlock from './CoinBlock';

import * as _ from 'lodash';
import i18n from '../../config/i18n';

import { midScreenSize } from '../../constants/StyledVariable';

interface Props {
    rates: Object
}

interface State {
    value: string
}

interface Target {
    value: string
}

interface Event {
    target: Target
}

const InputBlk = styled.div`
    width: 512px;
    margin: 0 auto 48px;
    border-radius: 1px;

    &:hover {
        .divider {
            background: #3F5498;
        }
    }

    @media (max-width: ${midScreenSize}) {
        width: 100%;
        margin-top: 49px;
    }
`;

const Divider = styled.div`
    display: block;
    height: 2px;
    content: '';
    background: rgba(216, 216, 216, 0.46);;
    box-shadow: 0 4px 12px 2px rgba(63, 84, 152,0.10);
    border-radius: 1px;
`;

const InputBox = styled.input`
    display: block;
    width: 100%;
    border: none;
    font-family: Roboto-Regular;
    font-size: 32px;
    color: #3F5498;
    margin-bottom: 9px;
    text-align: center;

    &::placeholder { 
        color: rgba(58, 65, 96, 0.20);;
    }

    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    &:not(:placeholder-shown) ~ .divider {
        background: #3F5498;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: ${midScreenSize}) {
        font-size: 18px;
        color: #4A4A4A;
    }
`;

const ShowList = ['BTC', 'ETH', 'ETC', 'LTC'];

class Prices extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (e: Event) => {
        let val = e.target ? e.target.value : '';
        if (val) {
            val = val.length > 10 ? val.substring(0, 11) : val;
            let numVal = Number(val);
            numVal = Math.floor(numVal * 100) / 100;
            this.setState({
                value: numVal.toString()
            });

        } else {
            this.setState({
                value: val
            });
        }
    }

    calculateValue = (value: string) => {
        let num = (Math.floor(Number(this.state.value) * Number(value) * 100000000) / 100000000).toString();
        if (num === '0') {
            return '0.00000000';
        }
        let vacancy = 10 - num.length;
        if (vacancy > 0) {
            return  num + (num.indexOf('.') ? '0'.repeat(vacancy) : '.' + '0'.repeat(vacancy - 1));
        }
        num = num.substring(0, 10);
        return num[9] === '.' ? num.substring(0, 9) : num;
    }

    public render() {
        const { rates } = this.props;
        return (
            <div>
                <InputBlk>
                    <InputBox placeholder={i18n.t('inputTip', {lng: i18n.language, defaultValue: '' })}
                        type='number' maxLength={9}
                        value={this.state.value}
                        onChange={this.onChange}/>
                    <Divider className='divider'/>
                </InputBlk>
                {
                    _.keys(rates).map((coin: string) => {
                        if (ShowList.indexOf(coin) !== -1) {
                            const detailObj = {
                                coin,
                                value: this.calculateValue(rates[coin])
                            };
                            return <CoinBlock key={coin} {...detailObj}/>;
                        }
                        return null;
                    })
                }
            </div>
        );
    }
}

export default Prices;