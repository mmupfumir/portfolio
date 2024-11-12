'use client';

import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

export default function Clock() {
  const [time, setTime] = useState<string>(moment().tz('America/New_York').format('hh:mm A'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz('America/New_York').format('hh:mm A'));
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="text-center pb-5 font-light text-4xl text-black">
      <div className='text-xl text-black/30'>{time}</div>
      <div className='rounded-full tracking-tight text-2xl font-light text-black/80'>
      {moment().tz('America/New_York').hour() < 12
        ? 'Good morning'
        : moment().tz('America/New_York').hour() < 17
        ? 'Good afternoon, Milton here!'
        : 'Good evening'}
      </div>

    </div>
  );
};
