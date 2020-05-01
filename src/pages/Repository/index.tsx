import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="repository.owner.avatar_url" alt="" />
          <div>
            <strong>sdgsdfg</strong>
            <p>fdsgfdg</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>57168</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>64</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>654</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link key="repository.id" to="/repository/repository.full_name">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
export default Repository;
