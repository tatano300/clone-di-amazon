// Account.js
import React from 'react';
import styled from 'styled-components';
// Se vuoi un'icona da @mui/icons-material, puoi importarla qui, es.:
import SearchIcon from '@mui/icons-material/Search';

function Account() {
  return (
    <AccountContainer>
      <AccountTitle>Il mio account</AccountTitle>
      <Card>
        <CardIconWrapper>
          <CardIconBackground>
            {/* Icona di esempio, puoi cambiare l'icona o usare un'immagine */}
            <SearchIcon style={{ fontSize: '30px' }} />
          </CardIconBackground>
        </CardIconWrapper>
        <CardContent>
          <CardTitle>I miei ordini</CardTitle>
          <CardDescription>
            Traccia, restituisci o acquista nuovamente degli articoli
          </CardDescription>
        </CardContent>
      </Card>
    </AccountContainer>
  );
}

// Styled components
const AccountContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const AccountTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff; /* Sfondo bianco per la card */
`;

const CardIconWrapper = styled.div`
  margin-right: 16px;
`;

const CardIconBackground = styled.div`
  width: 60px;
  height: 60px;
  background-color: #cce1f2; /* Colore di sfondo (celeste) */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled.div`
  flex: 1; /* Occupa lo spazio rimanente */
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 8px;
`;

export default Account;