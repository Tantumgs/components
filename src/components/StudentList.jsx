function StudentList({ students, filterActive }) {
  // Фильтруем студентов в зависимости от выбранного фильтра
  const filteredStudents = filterActive 
    ? students.filter(student => student.isActive)
    : students;

  return (
    <div style={{
      border: '2px solid #6c757d',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>Список студентов ({filteredStudents.length})</h3>
      
      {filteredStudents.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>Нет студентов для отображения</p>
      ) : (
        <div>
          {filteredStudents.map((student, index) => (
            <div
              key={index}
              style={{
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: `2px solid ${student.isActive ? '#28a745' : '#dc3545'}`,
                backgroundColor: student.isActive ? '#d4edda' : '#f8d7da',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: student.isActive ? '#155724' : '#721c24' }}>
                  {student.name}
                </h4>
                <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#555' }}>
                  <strong>Специальность:</strong> {student.track}
                </p>
              </div>
              <div style={{
                padding: '8px 16px',
                borderRadius: '20px',
                backgroundColor: student.isActive ? '#28a745' : '#dc3545',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
                textAlign: 'center'
              }}>
                {student.isActive ? '✓ Активен' : '✗ Неактивен'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;
