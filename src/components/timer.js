import { useState, useEffect } from 'react';

export const Timer=()=>{
    const [days,setDays]=useState(0)
    const [hours,setHours]=useState(0)
    const [mins,setMinutes]=useState(0)
    const [sec,setSeconds]=useState(0)
    const deadLine="April, 11, 2023"
    const getTime=()=>{
        const time=Date.now()-Date.parse(deadLine)
        setDays(Math.floor(time/(1000*60*60*24)))
        setHours(Math.floor(time/(1000*60*60)%24))
        setMinutes(Math.floor((time/1000/60)%60))
        setSeconds(Math.floor((time/1000)%60))
    }
    useEffect(()=>{
        const interval=setInterval(()=>getTime(deadLine),1000)
        return ()=>clearInterval(interval)
    },[])
    return(
            <div className="timer">
                    <div className="day">
                        <h1>{days<10 ? "0"+days:days}</h1>
                        <span className="dtext">Days</span>
                    </div>
                    <div className="hour">
                    <h1>{hours<10 ? "0"+hours:hours}</h1>
                        <span className="htext">Hours</span>
                    </div>
                    <div className="minute">
                    <h1>{mins<10 ? "0"+mins:mins}</h1>
                        <span className="mtext">Minutes</span>
                    </div>
                    <div className="second">
                    <h1>{sec<10 ? "0"+sec:sec}</h1>
                        <span className="stext">Seconds</span>
                    </div>
                </div>
    )
}