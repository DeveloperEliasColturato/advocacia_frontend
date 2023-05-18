import { styled } from 'styled-components';
import { colors } from '../../utils/colors';

export const WrapperSideBar = styled.div`
  background-color: ${colors.primaryColor};
  width: 367px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
`;

export const WrapperSideBarButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  color: ${colors.gray300};
  tr {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 2rem;
  }
  th {
    display: flex;
    column-gap: 1rem;
    cursor: pointer;
  }
`;
