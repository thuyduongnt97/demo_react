import React, {useState, useEffect} from 'react';
import icon from './../img/download.png'

const formatDate = (date) => {
    if (!date) {
        return '';
    }
    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)
    
    const day = `0${date.getDate()}`.slice(-2)
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const year = date.getFullYear()
    return `${hours}:${minutes}:${seconds}  -  ${day}/${month}/${year}`;
}

const Header = () => {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        setInterval(() =>{
            const now = new Date()
            const newTimeString = formatDate(now);
            setTimeString(newTimeString)
        }, 1000);
    }, []);

    return (
        <header className="ant-layout-header bg-color header-layout ">
            <div className="ant-row">
                <div className="ant-col ant-col-22 ant-col-offset-1">
                    <div className="ant-row">
                        <div className="ant-col">
                            <img src = {icon} />
                        </div>
                        <div className = "ant-col">
                            <p className="title-corona">Virus corona</p>
                            <p className="time-tick">{timeString}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header;