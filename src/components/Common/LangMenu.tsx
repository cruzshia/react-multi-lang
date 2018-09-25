import * as React from 'react';
import styled from 'styled-components';
import {
    NavLink,
    withRouter,
    RouteComponentProps
} from 'react-router-dom';

import { Langs } from '../../constants/LangConfig';
import ArrorImg from '../../images/icon-small-arrow-down.png';
import { getMatch } from '../../utils/routerUtils';

interface LangStyleParams {
    isRWD?: boolean;
}

const LangBlk = styled.span`
    position: relative;
    display: ${(props: LangStyleParams) => props.isRWD === true ? 'none' : 'inline-block'};
    width: ${(props: LangStyleParams) => props.isRWD  === true ? 'auto' : '96px'};
    padding: 6px 13px;
    font-size: 12px;
    color: #3A4160;
    text-align: center;
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

    @media (max-width: 768px) {
        display: ${props => props.isRWD ? 'inline-block' : 'none'}
        border-width: ${props => props.isRWD ? '0' : '1.5px'}
        margin-left: 50%;
        transform: translateX(-50%);
    }
`;

const OptionBlk = styled.div`
    display: block;
    position: ${(props: LangStyleParams) => props.isRWD ? 'relative' : 'absolute'};
    left: ${(props: LangStyleParams) => props.isRWD ? 'auto' : '0'};
    top: ${(props: LangStyleParams) => props.isRWD ? 'auto' : '34px'};
    width: 96px;
    line-height: 49px;
    transition: 0.1s all;
    transform: scale(0);
    transform-origin: 50% 0;
    border: 1px solid #95B0F3;
    border-radius: 4px;
    text-align: center;
    background: #fff;
    margin-top: ${(props: LangStyleParams) => props.isRWD ? '10px' : '0'};
`;

const Option = styled(NavLink)`
    display: block;
    font-size: 16px;
    color: #95B0F3;
    &:hover {
        color: #3A4160;
    }
`;

const Arrow = styled.span`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(${ArrorImg});
    vertical-align: middle;
`;

interface LangMenuParams {
    isRWD?: boolean;
}

function LangMenu(props: LangMenuParams & RouteComponentProps) {
    const { isRWD } = props;
    const match = getMatch(props);
    const lang = match ? match.params.lng : 'zh-TW';
    const tab = match ? match.params.tab : '';
    const matchLang = Langs.find(langObj => langObj.value === lang);
    
    return isRWD && tab !== 'prices' ? null : (
        <LangBlk isRWD={isRWD}>
            { matchLang ? matchLang.title : '繁體中文' }
            <Arrow/>
            <OptionBlk className='option-blk' isRWD={isRWD}>
                {
                    Langs.map((lang) => (
                        <Option key={lang.idx} 
                            to={`/${lang.value}/${tab || 'prices'}`}>
                            {lang.title}
                        </Option>
                    ))
                }
            </OptionBlk>
        </LangBlk>
    )
}

export default withRouter(LangMenu);