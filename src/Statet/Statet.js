import React, { useState } from 'react'

const Statet = () => {
  const [state, setSteate] = useState(0)

  return (
    <div>
      <div style={Styled}>
        <h1>Счетчик: {state}</h1>
        <div>
          <button className="btn btn-success">Добавить</button>
          <button className="btn btn-danger">Убрать</button>
        </div>
      </div>
    </div>
  )
}

const Styled = {
  margin: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

export default Statet
