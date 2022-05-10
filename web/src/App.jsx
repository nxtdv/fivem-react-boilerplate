import React, { useState } from 'react';
import Nui from './util/Nui'
import './App.scss';

function App() {
    const [hidden, setHidden] = useState(true)
    const closePage = () => {
        setHidden(true)
        Nui.send('fivem-react-boilerplate', {})
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePage()
        }
    });

    window.addEventListener('message', function (event) {
        const eventData = event.data;

        if (eventData.type === 'SHOW_PAGE') {
            setHidden(false)
        } else if (eventData.type === 'CLOSE_PAGE') {
            closePage()
        };
    });

    return (
        <div id='app' hidden={hidden}>
            <a>FiveM boilerplate</a>
            <a>By nxtdv</a>
            <a>Version 1.0.0</a>
            <a>Press ESC to close</a>
        </div>
    );
}

export default App;