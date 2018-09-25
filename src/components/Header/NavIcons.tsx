import * as React from 'react';
import styled from 'styled-components';
import PriceImg from '../../images/icon/navi/prices.png';
import PriceActiveImg from '../../images/icon/navi/prices_active.png';

import AccountImg from '../../images/icon/navi/account.png';
import AccountActiveImg from '../../images/icon/navi/account_active.png';

import WalletImg from '../../images/icon/navi/wallet.png';
import WalletActiveImg from '../../images/icon/navi/wallet_active.png';

import EarthImg from '../../images/icon/label/earth.png';

interface IconParams {
    width?: string;
    height?: string;
    imgUrl: string;
    activeUrl: string;
    active?: boolean;
}

const Icon = styled.span<IconParams>`
    display: none;
    width: ${props => props.width || '30px'};
    height: ${props => props.height || '30px'};
    vertical-align: middle;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: contain;
    &.active {
        background: url(${props => props.activeUrl}) no-repeat center;
    }

    @media (max-width: 768px) {
        display: block;
        margin: 0 auto 3px;
    }
`;

export const PriceIcon = (active = false) => <Icon imgUrl={PriceImg} activeUrl={PriceActiveImg} className={active ? 'active' : ''}/>;
export const AccountIcon = (active = false) => <Icon imgUrl={AccountImg} activeUrl={AccountActiveImg} className={active ? 'active' : ''}/>;
export const WalletIcon = (active = false) => <Icon imgUrl={WalletImg} activeUrl={WalletActiveImg} className={active ? 'active' : ''}/>;
export const EarchIcon = (active = false) => <Icon imgUrl={EarthImg} activeUrl={EarthImg} className={active ? 'active' : ''}/>;