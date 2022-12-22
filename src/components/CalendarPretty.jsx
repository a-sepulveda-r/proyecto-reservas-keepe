import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

//se instala calendar con
//del link
//https://www.npmjs.com/package/react-calendar
//directo en consola
//"npm install react-calendar"

const CalendarPretty = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        showDoubleView
        minDetail="year"
        className="mt-5"
      />
    </div>
  );
};

export default CalendarPretty;
