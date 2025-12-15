import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: '2px solid #28a745',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      textAlign: 'center'
    }}>
      <h3>Счетчик</h3>
      <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#28a745' }}>
        {count}
      </p>
      <div>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          −
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
