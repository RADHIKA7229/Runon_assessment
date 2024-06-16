import React from 'react'

const Save = () => {
  const variants = [
    { size: 'Small', color: 'Red', price: 345, available: 20 },
    { size: 'Small', color: 'Blue', price: 345, available: 20 },
    { size: 'Medium', color: 'Red', price: 45, available: 20 },
    { size: 'Medium', color: 'Blue', price: 23, available: 20 },
  ];
  console.log(localStorage.getItem("variants"))

  const totalAvailable = variants.reduce((sum, variant) => sum + variant.available, 0);
  const priceRange = `${Math.min(...variants.map(v => v.price))}-${Math.max(...variants.map(v => v.price))}`;

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Size</th>
            <th style={styles.header}>Color</th>
            <th style={styles.header}>Price</th>
            <th style={styles.header}>Available</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, index) => (
            <tr key={index}>
              <td style={styles.cell}>{variant.size}</td>
              <td style={styles.cell}>{variant.color}</td>
              <td style={styles.cell}>{variant.price}</td>
              <td style={styles.cell}>{variant.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table style={styles.summaryTable}>
        <tbody>
          <tr>
            <td style={styles.header}>Available</td>
            <td style={styles.summaryCell}>{totalAvailable}</td>
            <td style={styles.header}>Price range</td>
            <td style={styles.summaryCell}>{priceRange}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  header: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px',
    border: '1px solid #ddd',
  },
  cell: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
  summaryTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  summaryCell: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
};

export default Save