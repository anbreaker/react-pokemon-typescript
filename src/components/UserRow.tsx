import React from 'react';

export const UserRow = ({ pokemon }: any) => {
  return (
    <tr>
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td></td>
    </tr>
  );
};
