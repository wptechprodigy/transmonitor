import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import styled from 'styled-components';
import NavBar from './components/NavBar';

import file from './data/file'

function App() {
  const { navItems } = file;

  return (
    <Router>
      <NavBar navItems={navItems} />
    </Router>
  );
}

// const Section = styled.section`
//   display: grid;
//   grid-template-rows: 60px auto;
// `;

export default App;
