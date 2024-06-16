import React, { useState } from 'react'

const Product = () => {
    const [colors, setColors] = useState(['Blue', 'Red']);
    const [sizes, setSizes] = useState(['Small', 'Medium']);
    const [variants, setVariants] = useState([
        { size: 'Small', color: 'Blue', price: 345.30, available: 40 },
        { size: 'Small', color: 'Red', price: 345.30, available: 20 },
        { size: 'Medium', color: 'Blue', price: 23.00, available: 40 },
        { size: 'Medium', color: 'Red', price: 45.00, available: 20 },
    ]);

    const handleVariantChange = (index, key, value) => {
        const newVariants = [...variants];
        newVariants[index][key] = value;
        setVariants(newVariants);
    };

    const handleSave = () => {
        console.log('Variants saved:', variants);
        localStorage.setItem('variants', JSON.stringify(variants))
    };
    
  return (
    <div>
    <div>
      <h3>Variants</h3>
      <div style={styles.variantsSection}>
        <div style={styles.section}>
          <h4>COLOR</h4>
          {colors.map((color) => (
            <button
              key={color}
              style={{ ...styles.button, backgroundColor: color.toLowerCase() }}
            >
              {color}
            </button>
          ))}
          <button style={styles.addButton}>Add colour</button>
        </div>
        <div style={styles.section}>
          <h4>SIZE</h4>
          {sizes.map((size) => (
            <button key={size} style={styles.button}>
              {size}
            </button>
          ))}
          <button style={styles.addButton}>Add size</button>
        </div>
      </div>
    </div>
    <div style={styles.groupBySection}>
      <label style={styles.groupByLabel}>Group by:</label>
      <select style={styles.groupBySelect}>
        <option value="Size">Size</option>
        <option value="Color">Color</option>
      </select>
    </div>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      {sizes.map((size) => (
        <div key={size} style={styles.sizeGroup}>
          <h5>{size}</h5>
          {variants
            .filter((variant) => variant.size === size)
            .map((variant, index) => (
              <div key={`${variant.size}-${variant.color}`} style={styles.variantRow}>
                <div style={styles.variantLabel}>{`${variant.size} | ${variant.color}`}</div>
                <input
                  type="text"
                  value={`$ ${variant.price}`}
                  onChange={(e) =>
                    handleVariantChange(index, 'price', parseFloat(e.target.value.replace('$', '').trim()))
                  }
                  style={styles.input}
                />
                <input
                  type="text"
                  value={variant.available}
                  onChange={(e) => handleVariantChange(index, 'available', parseInt(e.target.value))}
                  style={styles.input}
                />
              </div>
            ))}
        </div>
      ))}
    </div>
    <button onClick={handleSave} style={styles.saveButton}>Save</button>
  </div>
  )
}

const styles = {
    variantsSection: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginBottom: '20px',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    button: {
      margin: '5px 0',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      color: 'black',
      cursor: 'pointer',
    },
    addButton: {
      marginTop: '10px',
      padding: '10px 20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: 'white',
      cursor: 'pointer',
    },
    groupBySection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    groupByLabel: {
      marginRight: '10px',
    },
    groupBySelect: {
      padding: '5px 10px',
    },
    sizeGroup: {
      marginBottom: '20px',
    },
    variantRow: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    variantLabel: {
      marginRight: '10px',
      width: '150px',
    },
    input: {
      marginRight: '10px',
      padding: '5px 10px',
      width: '100px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    saveButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
    },
  };
  

export default Product