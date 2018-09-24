import * as React from 'react';
import styled from 'styled-components';
import { mainColor } from '../../constants/StyledVariable';
import { Langs } from '../../constants/LangConfig';

import ArrorImg from '../../images/icon-small-arrow-down.png';
import {
    RouteComponentProps,
    withRouter,
    NavLink,
    matchPath,
    match,
} from 'react-router-dom';

interface PathParams {
    lng: string;
    tab?: string;
}

interface locationParam {
    pathname: string;
}

const HeaderBlk = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 16px 240px;
    text-align: right;
    background: #FFFFFF;
    box-shadow: 0 -4px 16px 0 rgba(0, 0, 0, 0.08);
`;

const Menu = styled.ul`
    display: inline-block;
`;

const MenuItem = styled.li`
    display: inline-block;
    margin-right: 40px;
    font-size: 16px;
    cursor: pointer;
    color: rgba(74,74,74, 0.25);
    &:hover {
        color: ${mainColor};
    }
`;

const Arrow = styled.span`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(${ArrorImg});
    vertical-align: middle;
`;

const LangBlk = styled.span`
    position: relative;
    display: inline-block;
    width: 96px;
    padding: 6px 13px;
    font-size: 12px;
    color: #3A4160;
    border: 1.5px solid #95B0F3;
    border-radius: 50px;
    cursor: pointer;
    &:hover .option-blk {
        transform: scale(1);
    }
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        height: 10px;
        width: 100%;
    }
`;

const OptionBlk = styled.div`
    position: absolute;
    left: -6px;
    top: 36px;
    width: 96px;
    line-height: 49px;
    transition: 0.1s all;
    transform: scale(0);
    transform-origin: 50% 0;
    border: 1px solid #95B0F3;
    border-radius: 4px;
    text-align: center;
`;

const Option = styled(NavLink)`
    display: block;
    font-size: 16px;
    color: #95B0F3;
    &:hover {
        color: #3A4160;
    }
`;

const ActiveStyle = {
    cursor: 'default',
    color: mainColor
}

const isActive = (match: match, location: locationParam) => {
    return match !== null || location.pathname === '/';
}

class Prices extends React.PureComponent<RouteComponentProps> {
    public render() {
        const match = matchPath<PathParams>(this.props.history.location.pathname, {
            path: '/:lng/:tab',
            exact: false,
            strict: false
        });
        const lang = match ? match.params.lng : 'zh-TW';
        const tab = match ? match.params.tab : '';
        const matchLang = Langs.find(langObj => langObj.value === lang);

        return (
            <HeaderBlk>
                <Menu>
                    <MenuItem>
                        <NavLink to={`/${lang}/prices`} activeStyle={ActiveStyle} isActive={isActive}>PRICES</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to={`/${lang}/wallet`} activeStyle={ActiveStyle}>WALLET</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to={`/${lang}/account`} activeStyle={ActiveStyle}>ACCOUNT</NavLink>
                    </MenuItem>
                </Menu>
                <LangBlk>
                    { matchLang ? matchLang.title : 'zh-TW' }
                    <Arrow/>
                    <OptionBlk className='option-blk'>
                        {
                            Langs.map((lang, idx) => (
                                <Option key={`lang-${idx}`} 
                                    to={`/${lang.value}/${tab}`}>
                                    {lang.title}
                                </Option>
                            ))
                        }
                    </OptionBlk>
                </LangBlk>
            </HeaderBlk>
        );
    }
}

export default withRouter(Prices);