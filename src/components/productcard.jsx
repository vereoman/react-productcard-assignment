import { useState } from 'react';
import Button from './button.jsx';

function Productcard() {
    const [count, setCount] = useState(0);

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#fff',
    };

    return (
        <div style={cardStyle}>
            <h3>Product</h3>
            <p>Quantity: {count}</p>
            <Button onClick={() => setCount(count + 1)} label="Add to Cart" />
        </div>
    );
}

export default Productcard;