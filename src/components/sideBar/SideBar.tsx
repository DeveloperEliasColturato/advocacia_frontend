import { WrapperSideBar, WrapperSideBarButtons } from './styleSideBar';

import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <WrapperSideBar>
      <img src="./img/Logo.png" alt="Logo" />
      <WrapperSideBarButtons>
        <table>
          <tr>
            <Link to={'/'}>
              <th>
                <img src="./img/home.svg" alt="" />
                <p>Início</p>
              </th>
            </Link>
            <th>
              <img src="./img/list.svg" alt="" />
              <p>Categorias</p>
            </th>
            <Link to={'/newcase'}>
              <th>
                <img src="./img/create.svg" alt="" />
                <p>Cadastrar Caso</p>
              </th>
            </Link>
            <th>
              <img src="./img/edit.svg" alt="" />
              <p>Atualizar caso</p>
            </th>
            <th>
              <img src="./img/file.svg" alt="" />
              <p>Novo documento</p>
            </th>
            <th>
              <img src="./img/suport.svg" alt="" />
              <p>Suporte</p>
            </th>
          </tr>
        </table>
      </WrapperSideBarButtons>
    </WrapperSideBar>
  );
}
