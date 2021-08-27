import { formatTime } from "../helpers/utils";

const HorseEntry = ({ row }) => {
  return (
    <tr key={row.id}>
      <td className="horse-id">{row.id}</td>
      <td className="horse-name">{row.name}</td>
      <td className="race-time">{formatTime(row.endTime)}</td>
    </tr>
  );
};

export default HorseEntry;
