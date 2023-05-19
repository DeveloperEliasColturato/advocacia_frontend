import { useState } from 'react';

import { Paragraph, Document, Packer, AlignmentType, TextRun } from 'docx';
import { saveAs } from 'file-saver';

import SideBar from '../../components/sideBar';
import {
  WrapperNewCase,
  FormNewCase,
  TypeCase,
  TypeDefinitivoForm,
  InfoAutor,
  InfoReu,
  InfoAdiciona,
} from './styleNewCase';
import { click } from '@testing-library/user-event/dist/click';

export default function NewCase() {
  const [nameAutor, setNameAutor] = useState('');
  const [empresaReu, setEmpresaReu] = useState('');
  const [horasAtraso, setHorasAtraso] = useState('');
  const [tipoCaso, setTipoCaso] = useState('');
  const [autorGen, setAutorGen] = useState(Boolean);
  const [qntAutor, setQntAutor] = useState(0);
  const [qntReu, setQtnReu] = useState(0);
  const [responsabilidade, setResponsabilidade] = useState(Boolean);
  const [tramitacao, setTramitacao] = useState(Boolean);

  const handleDefinitivo = () => {
    setTipoCaso('Definitivo');
  };
  const handleTemporario = () => {
    setTipoCaso('Temporário');
  };

  // const [isFormComplete, setIsFormComplete] = useState(Boolean);

  // const handleInputChange = () => {

  //   if () {
  //     setIsFormComplete(true);
  //   } else {
  //     setIsFormComplete(false);
  //   }
  // };

  const generate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: 'Viemos por meio desse comunicar que ',
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: `${nameAutor}.`,
                  font: 'Arial',
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              text: `Empresa: ${empresaReu}`,
            }),
            new Paragraph({
              text: `Horas de atraso: ${horasAtraso}`,
            }),
            new Paragraph({
              text: `Tipo de extravio: ${tipoCaso}`,
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, `ROSENBAUM ADVOGADOS - Extravio - ${nameAutor}.docx`);
    });
  };

  const [isDefinitivo, setIsDefinitivo] = useState(false);

  function handleDefinitivoChecked() {
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
                <label htmlFor="autor">Autor(a)</label>
                <input
                  id="autor"
                  type="text"
                  placeholder="Digite o nome do autor"
                  onChange={event => {
                    setNameAutor(event.target.value);
                    // handleInputChange(); // Chamar a função handleInputChange
                  }}
                />
              </th>
              <th>
                <label htmlFor="">Tipo de caso</label>
                <input type="text" value={'Extravio'} disabled={true} />
              </th>
            </tr>
            <tr>
              <th>
                <label htmlFor="empresa">Em face de</label>
                <input
                  id="empresa"
                  type="text"
                  placeholder="Em face de"
                  onChange={event => {
                    setEmpresaReu(event.target.value);
                    // handleInputChange(); // Chamar a função handleInputChange
                  }}
                />
              </th>
              <th>
                <label htmlFor="">Horas de atraso</label>
                <input
                  type="text"
                  placeholder="Digite as horas de atraso"
                  onChange={event => {
                    setHorasAtraso(event.target.value);
                    // handleInputChange();
                  }}
                />
              </th>
            </tr>
            <TypeCase>
              <h3>Tipo do extravio</h3>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    id="definitivo"
                    onChange={event => {
                      setTipoCaso(event.target.checked ? 'Definitivo' : '');
                      handleDefinitivo();
                      handleDefinitivoChecked();
                    }}
                  />
                  <label htmlFor="definitivo">Definitivo</label>
                </th>
                {!isDefinitivo && (
                  <th>
                    <input
                      type="checkbox"
                      id="temporario"
                      onChange={event => {
                        setTipoCaso(event.target.checked ? 'Temporário' : '');
                        // handleInputChange();
                      }}
                    />
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
                  <input
                    type="checkbox"
                    id="men"
                    onChange={event => {
                      setAutorGen(event.target.checked);
                      // handleInputChange();
                    }}
                  />
                  <label htmlFor="men">Masculino</label>
                </th>
                <th>
                  <input
                    type="checkbox"
                    id="woman"
                    onChange={event => {
                      setAutorGen(event.target.checked);
                      // handleInputChange();
                    }}
                  />
                  <label htmlFor="woman">Feminino</label>
                </th>
                <th>
                  <input
                    type="number"
                    placeholder="Quantidade de autores"
                    onChange={event => {
                      setQntAutor(event.target.valueAsNumber);
                      // handleInputChange();
                    }}
                  />
                </th>
              </tr>
            </InfoAutor>
            <InfoReu>
              <h3>Sobre o réu</h3>
              <tr>
                <th>
                  <input
                    type="number"
                    placeholder="Quantidade de réus"
                    onChange={event => {
                      setQtnReu(event.target.valueAsNumber);
                      // handleInputChange();
                    }}
                  />
                </th>
              </tr>
            </InfoReu>
            <InfoAdiciona>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    id="responsabilidade"
                    onChange={event =>
                      setResponsabilidade(event.target.checked)
                    }
                  />
                  <label htmlFor="responsabilidade">
                    Responsabilidade solidária
                  </label>
                </th>
                <th>
                  <input
                    type="checkbox"
                    id="tramitacao"
                    onChange={event => setTramitacao(event.target.checked)}
                  />
                  <label htmlFor="tramitacao">Tramitação prioritária</label>
                </th>
              </tr>
            </InfoAdiciona>
          </table>
          <button
            type="submit"
            onClick={generate}
            // disabled={!isFormComplete}
            // className={isFormComplete ? 'button-enabled' : 'button-disable'}
          >
            Gerar documento
          </button>
        </form>
      </FormNewCase>
    </WrapperNewCase>
  );
}
