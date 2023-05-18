import { styled } from 'styled-components';
import { colors } from '../../utils/colors';

export const WrapperNewCase = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: ${colors.gray900};
  background-color: #eee;
  form {
    padding: 2rem;
  }
`;

export const FormNewCase = styled.div`
  tr {
    display: flex;
    column-gap: 1rem;
  }
  th {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 0;
    row-gap: 1rem;
  }
  input {
    height: 42px;
    border-radius: 0.5rem;
    border: none;
    background-color: ${colors.white};
    padding: 0 0.5rem;
  }
  input:focus {
    outline: none;
  }
`;

export const TypeCase = styled.div`
  th {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    background-color: ${colors.white};
    border-radius: 0.5rem;
    padding: 0 1rem;
  }
`;

export const TypeDefinitivoForm = styled.div`
  th {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    background-color: ${colors.white};
    border-radius: 0.5rem;
    padding: 0 1rem;
  }
`;

export const InfoAutor = styled.div`
  th {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    background-color: ${colors.white};
    border-radius: 0.5rem;
    padding: 0 1rem;
  }
`;
