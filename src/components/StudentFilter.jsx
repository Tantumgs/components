function StudentFilter({ filterActive, setFilterActive }) {
  return (
    <div style={{
      border: '2px solid #17a2b8',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#d1ecf1'
    }}>
      <h3>Фильтр студентов</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setFilterActive(false)}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: !filterActive ? '#17a2b8' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: !filterActive ? 'bold' : 'normal',
            transition: 'all 0.3s ease'
          }}
        >
          📋 Все студенты
        </button>
        <button
          onClick={() => setFilterActive(true)}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: filterActive ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: filterActive ? 'bold' : 'normal',
            transition: 'all 0.3s ease'
          }}
        >
          ✓ Только активные
        </button>
      </div>
      <p style={{ 
        marginTop: '10px', 
        fontSize: '12px', 
        color: '#0c5460',
        margin: '10px 0 0 0'
      }}>
        {filterActive ? 'Отображены активные студенты' : 'Отображены все студенты'}
      </p>
    </div>
  );
}

export default StudentFilter;
