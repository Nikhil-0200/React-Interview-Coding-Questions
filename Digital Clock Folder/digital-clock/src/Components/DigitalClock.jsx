import { useEffect, useState } from "react"

const DigitalClock = () => {
    const [time, setTime] = useState(new Date())


    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date())
        }, 10)



        return()=>{
            clearInterval(interval)
        }


    }, [])



    return(
        <div>
            <h1>Digital Clock Page</h1>


            <div>
            <h3>Clock</h3>

                <span>{(time.getHours() % 12 || 12).toString().padStart(2, "0")}</span> :
                <span> {time.getMinutes().toString().padStart(2, "0")}</span> :
                <span> {time.getSeconds().toString().padStart(2, "0")}</span> :
                <span> {time.getMilliseconds().toString().padStart(2, "0")}</span>
            </div>

            <div><h3>Date</h3>
            {time.toLocaleDateString(undefined, {
                day:"numeric",
                month:"short",
                year:"numeric",
                weekday:"long"
            })}
            </div>
        </div>
    )
}

export default DigitalClock