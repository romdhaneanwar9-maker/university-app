import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Compteur : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Incrémenter
      </button>
    </div>
  )
}

export default Counter