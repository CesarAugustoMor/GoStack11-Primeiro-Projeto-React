import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub.</Title>
      <Form>
        <input placeholder="Digite o nome do repositório aqui" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4"
            alt="Diego Fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms!
              https://unform.dev
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
