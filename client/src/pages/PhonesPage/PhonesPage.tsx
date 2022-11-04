import phonesPages from './PhonesPage.module.scss';

import React, { useState } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';

const Card = () => <div className={phonesPages.card}>Card</div>;

export const PhonesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  function getNumbers(from: number, to: number): number[] {
    const numbers = [];

    for (let n = from; n <= to; n++) {
      numbers.push(n);
    }

    return numbers;
  }

  const items = getNumbers(1, 20);

  return (
    <>
      <div className={phonesPages.containerPhone}>
        <div className={phonesPages.pagePhone}>
          <div className={phonesPages.menuRout}>
            <img
              src="./images/Home.svg"
              alt=""
              className={phonesPages.menuRout__home}
            />

            <img
              src="../../images/chevron-R.svg"
              alt=""
              className={phonesPages.menuRout__arrow}
            />
            <p className={phonesPages.menuRout__title}>Phones</p>
          </div>

          <h1 className={phonesPages.title}>Mobile phones</h1>

          <p className={phonesPages.count}>95 models</p>

          <div className={phonesPages.sorter}>
            <div className={phonesPages.sortBy}>
              <p className={phonesPages.sortByTitle}>Sort by</p>

              <select name="" id="" className={phonesPages.sortBySelect}>
                <option value="newest" selected>
                  Newest
                </option>
                <option value="oldest">Oldest</option>
                <option value="byPrice">By price</option>
              </select>
            </div>

            <div className={phonesPages.itemsOnPage}>
              <p className={phonesPages.sortByTitle}>Items on page</p>

              <select
                name=""
                id=""
                className={phonesPages.sortBySelect}
                value={perPage}
                onChange={(event) => {
                  setPerPage(+event.target.value);
                  setPage(1);
                }}
              >
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>

          <div className={phonesPages.catalog}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <Pagination
          total={items.length}
          perPage={perPage}
          currentPage={page}
          onPageChange={handlePageChange}
          getNumbers={getNumbers}
        />
      </div>
    </>
  );
};
