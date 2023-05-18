import { useState } from 'react';

import SideBar from '../../components/sideBar';
import {
  WrapperNewCase,
  FormNewCase,
  TypeCase,
  TypeDefinitivoForm,
  InfoAutor,
} from './styleNewCase';

export default function NewCase() {
  const [isDefinitivo, setIsDefinitivo] = useState(false);

  function handleDefinitivo() {
    setIsDefinitivo(!isDefinitivo);
  }

  return (
    <WrapperNewCase>
      <SideBar />
      <FormNewCase>
        <form action="">
          <h1>Cadastre um novo caso</h1>
          <table>
            <tr>
              <th>
                <label htmlFor="">Autor(a)</label>
                <input type="text" placeholder="Digite o nome do autor" />
              </th>
              <th>
                <label htmlFor="">Tipo de caso</label>
                <input type="text" value={'Extravio'} disabled={true} />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="">Em face de</label>
                <input type="text" placeholder="Em face de" />
              </th>
              <th>
                <label htmlFor="">Horas de atraso</label>
                <input type="text" placeholder="Digite as horas de atraso" />
              </th>
            </tr>
            <TypeCase>
              <h3>Tipo do extravio</h3>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    id="definitivo"
                    onChange={handleDefinitivo}
                  />
                  <label htmlFor="definitivo">Definitivo</label>
                </th>
                {!isDefinitivo && (
                  <th>
                    <input type="checkbox" id="temporario" />
                    <label htmlFor="temporario">Temporário</label>
                  </th>
                )}
              </tr>
            </TypeCase>
            {isDefinitivo && (
              <TypeDefinitivoForm>
                <h3>Houve dano material?</h3>
                <tr>
                  <th>
                    <input type="checkbox" id="ida" />
                    <label htmlFor="ida">Ida</label>
                  </th>
                  <th>
                    <input type="checkbox" id="volta" />
                    <label htmlFor="volta">Volta</label>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      type="number"
                      placeholder="Valor dentro da bagagem"
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      placeholder="Valor itens de reposição"
                    />
                  </th>
                </tr>
              </TypeDefinitivoForm>
            )}
            <InfoAutor>
              <h3>Sobre o autor</h3>
              <tr>
                <th>
                  <input type="checkbox" id="men" />
                  <label htmlFor="men">Masculino</label>
                </th>
                <th>
                  <input type="checkbox" id="woman" />
                  <label htmlFor="woman">Feminino</label>
                </th>
              </tr>
            </InfoAutor>
          </table>
        </form>
      </FormNewCase>
    </WrapperNewCase>
  );
}
