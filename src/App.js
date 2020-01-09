import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import styled from 'styled-components';
import NavBar from './components/NavBar';

import file from './data/file'
import ContentArea from './components/ContentArea';

function App() {
  const { navItems, sideBarItems, transactionSummary } = file;

  return (
    <Router>
      <NavBar navItems={navItems} />
      <ContentArea
        sideBarItems={sideBarItems}
        transactionSummary={transactionSummary}
      />
    </Router>
  );
}

// const Section = styled.section`
//   display: grid;
//   grid-template-rows: 60px auto;
// `;

export default App;
