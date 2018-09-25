import * as React from 'react';
import styled from 'styled-components';
import { midScreenSize } from '../../constants/StyledVariable';
import BTC from '../../images/icon/label/BTC.svg';
import ETH from '../../images/icon/label/ETH.svg';
import ETC from '../../images/icon/label/ETC.svg';
import LTC from '../../images/icon/label/LTC.svg';

const COIN_DATA = {
    BTC: {
        name: 'Bitcoin',
        img: BTC
    },
    ETH: {
        name: 'Ethereum',
        img: ETH
    },
    ETC: {
        name: 'Ethereum Classic',
        img: ETC
    },
    LTC: {
        name: 'Litecoin',
        img: LTC
    }
};

interface IconProps {
    url: string
}
const ICON = styled.span`
    display: inline-block;
    background: url(${(props: IconProps)=> props.url}) no-repeat center;
    background-size: contain;
    width: 80px;
    height: 80px;
    vertical-align: top;
    margin-left: 5px;

    @media (max-width: ${midScreenSize}) {
        width: 48px;
        height: 48px;
        margin: 0 8px 0 0 ;
        float: left;
    }
`;

const Block = styled.div`
    display: inline-block;
    width: 360px;
    height: 182px;
    margin: 0 32px 32px 0;
    padding: 24px 40px;
    background: #FFFFFF;
    box-shadow: -1px 2px 6px 1px rgba(217, 220, 230, 0.60);
    border-radius: 4px;
    font-size: 24px;
    font-family: Roboto-Medium;
    color: #3A4160;
    text-align: left;
    vertical-align: top;

    &:nth-child(odd) {
        margin-right: 0;
    }

    @media (max-width: ${midScreenSize}) {
        width: 100%;
        height: 80px;
        box-shadow: none;
        font-size: 16px;
        padding: 16px 0;
        border-radius: 0;
        border-bottom: 1.9px solid #b1bdda;
    }
`;

const TitleBlk = styled.div`
    display: inline-block;
    width: 195px;
    @media (max-width: ${midScreenSize}) {
        width: calc(100% - 56px);
    }
`;

const Title = styled.span`
    display: block;
    line-height: 35px;
    @media (max-width: ${midScreenSize}) {
        line-height: 20px;
    }
`;

const SubTitle = styled.span`
    display: inline-block;
    font-family: Roboto-Regular;
    font-size: 20px;
    color: #9CA6D3;
    line-height: 25px;
    margin-bottom: 50px;

    @media (max-width: ${midScreenSize}) {
        font-size: 14px;
        margin: 10px 0 0 0;
    }
`;

const ValueTxt = styled.div`
    line-height: 20px;
    @media (max-width: ${midScreenSize}) {
        float: right;
        margin-top: -6px;
    }
`;

interface Props {
    coin: string,
    value: string
}

function CoinBlock (props: Props) {
    const { coin, value } = props;
    return (
        <Block>
            <TitleBlk>
                <Title>{COIN_DATA[coin].name}</Title>
                <SubTitle>({coin})</SubTitle>
                <ValueTxt>{value}</ValueTxt>
            </TitleBlk>
            <ICON url={COIN_DATA[coin].img}/>
        </Block>
    );
}

export default CoinBlock;