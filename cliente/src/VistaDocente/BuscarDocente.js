import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const BuscarDocente = () => {
  const [docenteId, setDocenteId] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setDocenteId(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/docente/${docenteId}`);
  };

  return (
    <Container>
      <Title>BUSCADOR DE EVALUACIONES</Title>
      <InputContainer>
        <StyledInput
          type="text"
          placeholder="Ingrese la ID del docente"
          value={docenteId}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleSearch}>Buscar</SearchButton>
      </InputContainer>
    </Container>
  );
};

export default BuscarDocente;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-family: Verdana, sans-serif;
  color: #333;
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #ccc;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #999;
  }
`;

const SearchButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
