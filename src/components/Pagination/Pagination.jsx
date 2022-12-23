import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import s from './Pagination.module.css';

const Pagination = ({ page, totalPages, onIncrement, onDecrement }) => {
  return (
    <div className={s.pagination}>
      {page > 1 && (
        <button
          onClick={() => {
            onDecrement(page - 1);
          }}
          className={s.changePage}
        >
          <AiOutlineArrowLeft />
        </button>
      )}
      <span className={s.page}>{page}</span>
      {page < totalPages && (
        <button
          onClick={() => {
            onIncrement(page + 1);
          }}
          className={s.changePage}
        >
          <AiOutlineArrowRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
