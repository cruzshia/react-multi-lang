import * as React from 'react';
import styled from 'styled-components';
import { mainColor } from '../../constants/StyledVariable';

import {
    RouteComponentProps,
    withRouter,
    NavLink,
    match
} from 'react-router-dom';

import * as NAV_ICONS from './NavIcons';
import LangMenu from '../Common/LangMenu';
import { getMatch } from '../../utils/routerUtils';

import MultiLang from '../HOC/MultiLang';
import { InjectedTranslateProps } from 'react-i18next';

interface locationParam {
    pathname: string;
}

const HeaderBlk = styled.header`
    display: block;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 16px 240px 16px 0;
    text-align: right;
    background: #FFFFFF;
    box-shadow: 0 -4px 16px 0 rgba(0, 0, 0, 0.08);

    @media (max-width: 768px) {
        padding: 16px 0;
        text-align: center;
    }
`;

const Menu = styled.ul`
    display: inline-block;
    @media (max-width: 768px) {
        display: block;
    }
`;

const MenuItem = styled.li`
    display: inline-block;
    margin-right: 40px;
    font-size: 16px;
    cursor: pointer;
    color: rgba(74, 74, 74, 0.25);
    &:hover {
        color: ${mainColor};
    }

    @media (max-width: 768px) {
        width: 33.3%;
        margin: 0;
        font-size: 12px;
        &:hover {
            color: rgba(74, 74, 74, 0.25);
        }
    }
`;

const ActiveStyle = {
    cursor: 'default',
    color: mainColor
}

const isActive = (match: match, location: locationParam) => {
    return match !== null || location.pathname === '/';
}

class Prices extends React.PureComponent<RouteComponentProps & InjectedTranslateProps> {
    public render() {
        const match = getMatch(this.props);
        const lang = match ? match.params.lng : 'zh-TW';
        const tab = match ? match.params.tab : '';
        const { t } = this.props;

        return (
            <HeaderBlk>
                <Menu>
                    <MenuItem>
                        <NavLink to={`/${lang}/prices`} activeStyle={ActiveStyle} isActive={isActive}>
                            {NAV_ICONS.PriceIcon(tab === 'prices' || tab === '')}
                            {t('prices')}
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to={`/${lang}/wallet`} activeStyle={ActiveStyle}>
                            {NAV_ICONS.WalletIcon(tab === 'wallet')}
                            {t('wallet')}
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to={`/${lang}/account`} activeStyle={ActiveStyle}>
                            {NAV_ICONS.AccountIcon(tab === 'account')}
                            {t('account')}
                        </NavLink>
                    </MenuItem>
                </Menu>
                <LangMenu/>
            </HeaderBlk>
        );
    }
}

export default MultiLang(withRouter(Prices));