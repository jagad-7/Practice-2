import React from 'react'

export default function List() {
  let langs = [{id:1, lang:"HTML"},{id:2, lang:"CSS"},{id:3, lang:"JAVASCRIPT"},{id:4, lang:"REACT"}]
  return (
    <div>
        <h1>List & Keys in React</h1>
        {
          langs.map(
            (l) => <li key={l.id}>{l.lang}</li>
          )
        }
    </div>
  )
}
