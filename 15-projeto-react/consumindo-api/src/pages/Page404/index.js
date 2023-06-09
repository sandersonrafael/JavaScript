import React from 'react';

import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  history.push('/404');

  return (
    <Container>
      <h1>Página não encontrada</h1>
    </Container>
  );
}
