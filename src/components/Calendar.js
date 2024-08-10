import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styling
import './Calendar.css'; // Custom styling

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h2>Select a Date</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <div className="selected-date">
        <p>Selected Date:</p>
        <p>{date.toDateString()}</p>
      </div>
    </div>
  );
};

export default CalendarComponent;
