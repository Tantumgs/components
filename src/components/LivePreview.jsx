import { useState } from 'react';

function LivePreview() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{
      border: '2px solid #ffc107',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px'
    }}>
      <h3>Управляемый ввод</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст здесь..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          boxSizing: 'border-box'
        }}
      />
      <p style={{
        marginTop: '15px',
        fontSize: '18px',
        color: '#333',
        backgroundColor: '#fffde7',
        padding: '10px',
        borderRadius: '5px'
      }}>
        Вы ввели: <strong>{inputValue || '(пусто)'}</strong>
      </p>
      <p style={{ fontSize: '14px', color: '#666' }}>
        Количество символов: {inputValue.length}
      </p>
    </div>
  );
}

export default LivePreview;
