import React from 'react';
import styled from 'styled-components';

import TableHeadings from './TableHeadings';
import ProductTitle from './ProductTitle';
import ProductProperty from './ProductProperty';
import ArrowDown from './ArrowDown';

import productsTransactions from '../data/productsTransactions';
import ProductBadge from './ProductBadge';
import productThumbnail from '../assets/product-thumbnail.svg';
import Icon from './Icon';

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
        {productsTransactions.map((eachTransaction) => {
          const { productName, price, transactionNo, time, status } = eachTransaction;

          return (
            <tr>
              <td><Icon name={productThumbnail} /><ProductTitle title={productName} /></td>
              <td><ProductProperty value={price} /></td>
              <td><ProductProperty value={transactionNo} /></td>
              <td><ProductProperty value={time} /></td>
              <td><ProductBadge color='#27AE60' value={status} /></td>
              <td><ArrowDown /></td>
            </tr>
          )
        })}
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

  & td:first-child {
    display: flex;
    border-bottom: 0.0625rem solid #CCCFD4;
  }

  & h4 {
    display: inline;
  }

  & img {
    margin-right: 25px;
  }
`;

export default TransactionTable;
