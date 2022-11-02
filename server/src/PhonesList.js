import React from 'react';

/*
type Props = {
  phones: Phone[]
};
*/

const url = 'url';

export function getAll(): Promise<Phone[]> {
  return fetch(url)
    .then(response => response.json());
}

export const PhonesList = ({ phones }) => (
  <ul>
    {phones.map(phone => {
      const {
        id,
        name,
        price,
        description,
      }

      return (
        <li
          key={id}
          data-cy="phone">
          { phone }
        </li>
      ),
    })}
  </ul>
);
