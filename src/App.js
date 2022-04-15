import { useState, useEffect, useRef } from 'react';

function App() {
    const [countdown, setCountdown] = useState(0);
    const [input, setInput] = useState("")
    const id = useRef() // co dinh id giua cac lan render do setInterval de ap dung clearInterval
    function showTime(countms) {
        let day = Math.floor(countms / 86400);
        let hour = Math.floor(countms % 86400 / 3600)
        let min = Math.floor(countms % 86400 % 3600 / 60)
        let second = countms % 86400 % 3600 % 60
        return { day, hour, min, second }
    }
    // function start countdown
    function countdownStart() {
        if (isNaN(input) === false && input > 0) {
            if (id.current) {
                clearInterval(id.current)
                console.log("clear interval")
            }
            id.current = setInterval(function () {

                setCountdown((prevcoundown) => {

                    return prevcoundown - 1
                })
            }, 1000)
        }
        // setInput("")

    }
    console.log(Boolean(""))

    function countdownStop() {
        clearInterval(id.current)
    }
    function handleChange(e) {

        setInput(e.target.value)
        if (isNaN(e.target.value) === false) {
            setCountdown(e.target.value)

        }
    }
    return (
        <div className='countdown'>
            <div className="inputcountdown"><input type="text" onChange={handleChange} value={input} /></div>
            <span>{showTime(countdown).day}</span><span>d </span>
            <span>{showTime(countdown).hour}</span><span>h </span>
            <span>{showTime(countdown).min}</span><span>m </span>
            <span>{showTime(countdown).second}</span><span>s</span>
            <div>
                <button onClick={countdownStart}>Start</button>
                <button onClick={countdownStop}>Stop</button>
            </div>
        </div>
    )

}

export default App;
