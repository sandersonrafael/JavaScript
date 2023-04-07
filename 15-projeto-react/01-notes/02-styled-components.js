/* styled-componentes

muito importante e comum no mercado de trabalho

necessário instalar a extensão vscode-styled-componentes

instalar no npm com o código:
npm i styled-components

criar arquivo styled.js no componente que desejar, dentro da pasta do componente

importar do node_modules com o import:
import styled from 'styled-components';

exportar uma constante:

export const NomeDoStyle = styled.tagDesejada`
    codigoCssDesejado
`;
importar { NomeDoStyle } from './styled'; -> dentro da index do componente

substituir o elemento pela tag importada. Ex h1: em vez de usar <h1> </h1>, usa-se:
<NomeDoStyle> </NomeDoStyle>

com o styled components, é possível "utilizar" javascript dentro do "css".
ex: 

no index.js:
<NomeDoStyle isRed={false}> </NomeDoStyle>

no style.js:
export const NomeDoStyle = styled.tagDesejada`
    color: ${props => (props.isRed ? 'red' : 'blue')}
`;

o código acima recebe as propriedades do elemento e testa a propriedade props.isRed.
Se o isRed possui resultado true, ele atribui 'red' ao color. Se não, atribui 'blue'

para editar o css de subtags, como: <h1> <p subtag > editarCor </p> </h1>
no export podemos fazer:

export const NomeDoStyle style.tag`
    cssDaTag: etc;
    css2DaTag: etc2;
    subtag {
        cssDaSubtag: etcSub;
        css2DaSubtag: etc2Sub;
    }
`;
*/
