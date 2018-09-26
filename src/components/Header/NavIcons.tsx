import * as React from 'react';
import styled from 'styled-components';
import PriceImg from '../../images/icon/navi/prices.svg';
import PriceActiveImg from '../../images/icon/navi/prices_active.svg';

import AccountImg from '../../images/icon/navi/account.svg';
import AccountActiveImg from '../../images/icon/navi/account_active.svg';

import WalletImg from '../../images/icon/navi/wallet.svg';
import WalletActiveImg from '../../images/icon/navi/wallet_active.svg';

import { midScreenSize } from '../../constants/StyledVariable';

interface IconParams {
    width?: string;
    height?: string;
    imgUrl: string;
    activeUrl: string;
    active?: boolean;
}

const Icon = styled.span`
    display: none;
    width: ${(props: IconParams) => props.width || '30px'};
    height: ${(props: IconParams) => props.height || '30px'};
    vertical-align: middle;
    background: url(${(props: IconParams) => props.imgUrl}) no-repeat center;
    background-size: contain;
    &.active {
        background: url(${(props: IconParams) => props.activeUrl}) no-repeat center;
    }

    @media (max-width: ${midScreenSize}) {
        display: block;
        margin: 0 auto 3px;
    }
`;

export const PriceIcon = (active = false) => <Icon imgUrl={PriceImg} activeUrl={PriceActiveImg} className={active ? 'active' : ''}/>;
export const AccountIcon = (active = false) => <Icon imgUrl={AccountImg} activeUrl={AccountActiveImg} className={active ? 'active' : ''}/>;
export const WalletIcon = (active = false) => <Icon imgUrl={WalletImg} activeUrl={WalletActiveImg} className={active ? 'active' : ''}/>;