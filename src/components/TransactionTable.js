import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';

import TableHeadings from './TableHeadings';
import ProductTitle from './ProductTitle';
import ProductProperty from './ProductProperty';
import ArrowDown from './ArrowDown';
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
  const [productsTransactions, setProductsTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    async function getProductTrasactions() {
      const result = await fetch('productsTransactions.json');
      result
        .json()
        .then(result => {
          // console.log(result.productTransactions);
          setProductsTransactions(result.productTransactions);
        })
    }

    getProductTrasactions();
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productsTransactions.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <Section>
      <Table>
        <tr>
          {tableHeads.map(tableHead => <TableHeadings label={tableHead} />)}
        </tr>
        {currentPosts.map((eachTransaction) => {
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
      <section>
        <span>
          showing {indexOfFirstPost + 1} to {indexOfLastPost + 1} of {productsTransactions.length} entries
        </span>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={productsTransactions.length}
          pageRangeDisplayed={2}
          hideFirstLastPages
          prevPageText='Previous'
          nextPageText='Next'
          itemClass='page-item'
          linkClass='page-link'
          onChange={handlePageChange}
        />
      </section>
    </Section>
  )
}

const Section = styled.section`
  margin-top: 1.25rem;

  & section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & span {
      font-family: 'Segoe UI';
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 17px;
      color: #000000;
    }

    & ul {
      display: flex;
      border-radius: 2px;
    }

    & li {
      list-style: none;
      box-sizing: border-box;
      font-family: 'Segoe UI';
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 17px;
      padding: 5px 12px;
      border: 1px solid #CED0DA;
      color: #000000;
    }

    & li a {
      text-decoration: none;
      color: #000000;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.563rem;

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
