import React from 'react'

const msToTime = ms =>{
    const msPerSecond = 1000
    const msPerMinute = msPerSecond * 60
    const msPerHeur = msPerMinute*60 
    const Heur = Math.floor(ms / msPerHeur)
    const HeurReste = ms % msPerHeur 
    const Minute = Math.floor(HeurReste / msPerMinute)
    const MinuteReste = HeurReste % msPerMinute
    const Second = Math.floor(MinuteReste / msPerSecond)
    return (String(Heur).padStart(2, '0') + ":" + String(Minute).padStart(2, '0') + ":" + String(Second).padStart(2, '0'))

}

const Time = ({ ms }) => {
    return <div className="time-container">
        <div className="time-inner-container">
            <div className="time-digits">
                {msToTime(ms)}
            </div>
            <div className="time-text">
                <div className="time-text-item">Hour</div>
                <div className="time-text-item">Minute</div>
                <div className="time-text-item">Second</div>
            </div>
        </div>
    </div>
}

export default Time