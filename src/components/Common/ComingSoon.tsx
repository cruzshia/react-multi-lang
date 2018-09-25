import * as React from 'react';
import styled from 'styled-components';

import { mainColor, midScreenSize } from '../../constants/StyledVariable';

const ComingBlk = styled.div`
    padding-top: 296px;
    font-size: 32px;
    line-height: 35px;
    text-align: center;
    color: ${mainColor};

    @media (max-width: ${midScreenSize}) {
        font-size: 24px;
        padding-top: 170px;
    }
`;

function CommingSoon() {
    return <ComingBlk>Coming Soon</ComingBlk>
}

export default CommingSoon;