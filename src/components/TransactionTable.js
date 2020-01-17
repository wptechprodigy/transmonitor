import React from 'react';
import styled from 'styled-components';

import TableHeadings from './TableHeadings';
import ProductTitle from './ProductTitle';
import ProductProperty from './ProductProperty';
import ArrowDown from './ArrowDown';

const tableHeads = [
  'Item Type',
  'Price',
  'Transaction No',
  'Time',
  'Status',
  ''
]

function TransactionTable() {
  return (
    <Section>
      <Table>
        <tr>
          {tableHeads.map(tableHead => <TableHeadings label={tableHead} />)}
        </tr>
        <tr>
          <td><ProductTitle title='Apple Mac Book 15” 250 SSD 12GB' /></td>
          <td><ProductProperty value='$73430' /></td>
          <td><ProductProperty value='1234567890' /></td>
          <td><ProductProperty value='12:30' /></td>
          <td><ProductProperty value='Reconcilled' /></td>
          <td><ArrowDown /></td>
        </tr>
        <tr>
          <td><ProductTitle title='Apple Mac Book 15” 250 SSD 12GB' /></td>
          <td><ProductProperty value='$73430' /></td>
          <td><ProductProperty value='1234567890' /></td>
          <td><ProductProperty value='12:30' /></td>
          <td><ProductProperty value='Reconcilled' /></td>
          <td><ArrowDown /></td>
        </tr>
      </Table>
    </Section>
  )
}

const Section = styled.section`
  margin-top: 1.25rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  & th, td {
    padding: 0.75rem 1.563rem;
    border: none;
  }

  & th {
    text-align: left;
    background: #EAEEF0;
  }

  & td {
    background: #fff;
    border-bottom: 0.0625rem solid #CCCFD4;
  }
`;

export default TransactionTable;
