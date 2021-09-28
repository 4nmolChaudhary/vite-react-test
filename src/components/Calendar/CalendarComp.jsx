import React, { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar } from 'react-modern-calendar-datepicker'

function CalendarComp() {
  const [selectedDay, setSelectedDay] = useState({ from: null, to: null })
  const handleOnDateChange = date => {
    setSelectedDay(date)
    console.log(date)
  }
  return <Calendar value={selectedDay} onChange={handleOnDateChange} shouldHighlightWeekends />
}

export default CalendarComp
