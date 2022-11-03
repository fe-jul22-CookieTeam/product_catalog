import './PhonesPage.module.scss';

import React, { useState } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';

const Card = () => <div className="card">Card</div>;

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
      <div className="containerPhone">
        <div className="pagePhone">
          <div className="menuRout">
            <img src="./images/Home.svg" alt="" className="menuRout__home" />

            <img
              src="../../images/chevron-R.svg"
              alt=""
              className="menuRout__arrow"
            />
            <p className="menuRout__title">Phones</p>
          </div>

          <h1 className="pagePhone__title">Mobile phones</h1>

          <p className="pagePhone__count">95 models</p>

          <div className="pagePhone__sorter">
            <div className="pagePhone__sort-by">
              <p className="pagePhone__sort-by-title">Sort by</p>

              <select name="" id="" className="pagePhone__sort-by-select">
                <option value="newest" selected>
                  Newest
                </option>
                <option value="oldest">Oldest</option>
                <option value="byPrice">By price</option>
              </select>
            </div>

            <div className="pagePhone__items-on-page">
              <p className="pagePhone__sort-by-title">Items on page</p>

              <select
                name=""
                id=""
                className="pagePhone__sort-by-select"
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

          <div className="pagePhone__catalog">
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

      {/* <ItemCard /> */}
    </>
  );
};
