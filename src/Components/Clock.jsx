
import React, { useEffect, useState } from 'react'

function Clock() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);


        return () => clearInterval(timer);

    }, [])



    const formatTimewithLeadingZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }

    const formatHour = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    }

    const fromatDate = (date) => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
        return date.toLocaleDateString(undefined, options);
    }


    return (
        <>
            <div className='w-96 bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-3 py-5 m'>
                <div>
                    <h1 className='text-4xl font-semibold my-2 text-black'>Digital Clock</h1>
                </div>
                <div>
                    <h3 className='text-black text-5xl font-semibold counter' >
                        {formatTimewithLeadingZero(formatHour(currentTime.getHours()))}:
                        {formatTimewithLeadingZero(currentTime.getMinutes())}:
                        {formatTimewithLeadingZero(currentTime.getSeconds())}{' '}
                        {currentTime.getHours() >= 12 ? "PM" : "AM"}
                    </h3>
                </div>
                <div>
                    <p className='text-gray-60000 text-2xl mt-2 '>{fromatDate(currentTime)}</p>
                </div>

            </div>
        </>
    )
}

export default Clock