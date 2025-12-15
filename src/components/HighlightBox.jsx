function HighlightBox({ title, content }) {
  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '15px',
      marginTop: '15px',
      backgroundColor: '#f0f8ff'
    }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default HighlightBox;
