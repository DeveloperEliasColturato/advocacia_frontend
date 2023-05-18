import { styled } from 'styled-components';
import { colors } from '../../utils/colors';

export const WrapperSideBar = styled.div`
  background-color: ${colors.primaryColor};
  width: 367px;
  height: 100%;
  padding: 1rem 0;
  align-items: center;
  display: flex;
  justify-content: center;
  row-gap: 5rem;
  flex-direction: column;
`;

export const WrapperSideBarButtons = styled.div`
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
