import { useState } from 'react';

function CourseInfo() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px'
    }}>
      <h3>Информация о курсе</h3>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Веб-разработка с React и Vite
      </p>
      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          padding: '10px 20px',
          fontSize: '14px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {showDetails ? 'Скрыть подробности' : 'Показать подробности'}
      </button>
      
      {showDetails && (
        <div style={{
          marginTop: '15px',
          padding: '15px',
          backgroundColor: '#f0f8ff',
          borderRadius: '5px'
        }}>
          <p>
            <strong>Длительность:</strong> 12 недель
          </p>
          <p>
            <strong>Уровень:</strong> Начинающий
          </p>
          <p>
            <strong>Что вы изучите:</strong>
          </p>
          <ul>
            <li>Основы React и JSX</li>
            <li>Управление состоянием (useState, useEffect)</li>
            <li>Работа с компонентами и реквизитами</li>
            <li>Развертывание на Vercel</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CourseInfo;
