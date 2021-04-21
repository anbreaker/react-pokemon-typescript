import React from 'react';

export const UserRow = ({ pokemon }: any) => {
  const { id, name, pic } = pokemon;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <img
          src={pic}
          alt={`Name pokemon ${name}`}
          style={{
            height: 75,
          }}
        />
      </td>
    </tr>
  );
};
