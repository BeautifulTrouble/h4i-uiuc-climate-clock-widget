import styled from 'styled-components'
import { useState, useEffect } from 'react'
import data from '../components/mockdata.json'

const ClockSection = styled.div`
  color: ${({ theme }) => theme.text};
  height: 50vh;
  font-size: 20vh;
  text-align: center;
  background: ${({ theme }) => theme.red};
`
function Clock() {
  let date = new Date()
  let calendar =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  let today =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  let final = calendar + ' ' + today
  let value =
    new Date(data.data.modules.carbon_deadline_1.timestamp).valueOf() -
    new Date(final).valueOf()

  var years = Math.floor(value / 3.154e10)
  var days = Math.floor((value - years * 3.154e10) / 8.64e7)
  var hours = Math.floor((value - years * 3.154e10 - days * 8.64e7) / 3.6e6)
  var formattedHour
  if (hours + 1 < 10) {
    formattedHour = ('0' + hours).slice(-2)
  } else {
    formattedHour = Math.floor(
      (value - years * 3.154e10 - days * 8.64e7) / 3.6e6,
    )
  }

  var minutes = Math.floor(
    (value - years * 3.154e10 - days * 8.64e7 - hours * 3.6e6) / 60000,
  )
  var formattedMinutes
  if (minutes + 1 < 10) {
    formattedMinutes = ('0' + minutes).slice(-2)
  } else {
    formattedMinutes = Math.floor(
      (value - years * 3.154e10 - days * 8.64e7 - hours * 3.6e6) / 60000,
    )
  }
  var formattedMinutes
  if (minutes + 1 < 10) {
    formattedMinutes = ('0' + minutes).slice(-2)
  } else {
    formattedMinutes = Math.floor(
      (value - years * 3.154e10 - days * 8.64e7 - hours * 3.6e6) / 60000,
    )
  }
  var seconds = Math.floor(
    (value -
      years * 3.154e10 -
      days * 8.64e7 -
      hours * 3.6e6 -
      minutes * 60000) /
      1000,
  )
  var formattedSeconds
  if (seconds + 1 < 10) {
    formattedSeconds = ('0' + seconds).slice(-2)
  } else {
    formattedSeconds = Math.floor(
      (value -
        years * 3.154e10 -
        days * 8.64e7 -
        hours * 3.6e6 -
        minutes * 60000) /
        1000,
    )
  }
  const [year, setYear] = useState(0)
  const [day, setDay] = useState(0)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [sec, setSec] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setYear((years) => years + 1)
      setDay((days) => days + 1)
      setHour((formattedHour) => formattedHour + 1)
      setMinute((formattedMinutes) => formattedMinutes + 1)
      setSec((formattedSeconds) => formattedSeconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <ClockSection>
      {console.log(new Date(data.data.modules.carbon_deadline_1.timestamp))}
      {years} YEARS {days} DAYS <br />
      {formattedHour}:{formattedMinutes}:{formattedSeconds}
      {/* {data.data.modules.carbon_deadline_1.timestamp} */}
    </ClockSection>
  )
}

export default Clock
