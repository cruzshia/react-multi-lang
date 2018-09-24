import * as React from 'react';
import styled from 'styled-components';

import { mainColor } from '../../constants/StyledVariable';

const ComingBlk = styled.div`
    margin-top: 356px;
    font-size: 32px;
    line-height: 35px;
    text-align: center;
    color: ${mainColor};
`;

function CommingSoon() {
    return <ComingBlk>Coming Soon</ComingBlk>
}

export default CommingSoon;