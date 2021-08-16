import React from 'react'
import { useDispatch, useSelector } from "../redux/react-redux-hooks"
import { useHistory } from 'react-router-dom'
import { getRaceStatus } from "../redux/actions/RaceActions"

const Race = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {race, login} = useSelector(state => state)
  const { data } = race;
  React.useEffect(() => {
    if (login.data) {
      dispatch(getRaceStatus())
    } else {
      history.push('/')
    }
  }, [])

  const isRaceCompleted = data.length === 6 && !data.some(item => item.endTime === null)

  return (
    <div>
      <h3 className="title">Race Status Display</h3>
      {isRaceCompleted && <div className="success">The Race has completed. Next Race will begin in a while...</div>}
      <table className="raceStatusWrapper">
        <thead>
          <tr>
            <th className="horse-id">No</th>
            <th className="horse-name">Horse</th>
            <th className="race-time">Time</th>
          </tr>  
        </thead>
        <tbody>
          {data.length ? data.map(entry => {
            const formattedTime = entry.endTime && `${(entry.endTime/1000).toFixed(1)}`.split('.').join(',');
            return (
            <tr>
              <td className="horse-id">{entry.id}</td>
              <td className="horse-name">{entry.name}</td>
              <td className="race-time">{formattedTime && `${formattedTime}s`}</td>
            </tr>
          )}) : <></>}
        </tbody>
      </table>
      {data.length === 0 &&
        <div className="no_records">
           <span className="blink">Race is about to start...</span>
        </div>}
    </div>
  )
}

export default Race