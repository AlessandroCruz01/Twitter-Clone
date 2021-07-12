import styled, { css } from 'styled-components'

import { LocationOn, Cake, } from '../../styles/Icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none; //conf chrome
    ::-webkit-scrollbar{ //config firefox
        display: none; 
    }
`;

export const Banner = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: min(33vw, 199px);
    background: var(--twitter);
    position: relative;
`;

export const Avatar = styled.div`
    width: max-content(45px, min(135px, 22vw));
    height: max-content(45px, min(135px, 22vw));
    border: 3.75px solid var(--primary);
    
`;

export const ProfileData = styled.div`

`;

export const Followage = styled.div`

`;

// Estilizacao dos icones...
const iconCSS = css`
    width: 20px;
    height: 20px;

    color:  var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
    ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
    ${iconCSS}
`;

