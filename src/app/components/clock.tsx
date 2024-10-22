'use client';

import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

export default function Clock() {
  const [time, setTime] = useState<string>(moment().tz('America/New_York').format('HH:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz('America/New_York').format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="pb-5 text-sm text-black/30 font-mono">
     {time}
    </div>
  );
};
