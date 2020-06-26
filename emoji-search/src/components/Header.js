import React from 'react';
import emoji1 from './../img/1f63a.png'
import emoji2 from './../img/1f638.png'

const Header = () =>(
    <header className = "component-header">
        <img src = {emoji1} />
        Emoji Search
        <img src = {emoji2} />
    </header>
)
export default Header