function Button({ onClick, label }) {
    const buttonStyle = {
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;