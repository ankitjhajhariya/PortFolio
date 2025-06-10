import React from 'react';

function Button({ text, icon, bg, col }) {
    return (
        <button style={{ padding: '10px', fontSize: '16px', backgroundColor: bg, border: 'none', borderRadius: '0.3rem', color: col }}>
            {text} {icon}
        </button>
    );
}

export default Button;

