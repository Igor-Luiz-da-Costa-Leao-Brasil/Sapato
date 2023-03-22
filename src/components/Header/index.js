import { useState } from 'react';
import './style.css';

function Header (){ 
    const [sapato, setSapato] = useState('Nike')
    return (
        <div>
            <h1>
                {sapato}
            </h1>
            <button onClick={click => setSapato('Adidas')}>
                Change
            </button>
        </div>
    )
}

export default Header