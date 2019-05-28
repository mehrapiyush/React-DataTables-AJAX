import React from 'react'

export default function CoinTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          props.posts.map(row => (
            <tr>
              <td>{row.id}</td>
              <td>{row.title}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}