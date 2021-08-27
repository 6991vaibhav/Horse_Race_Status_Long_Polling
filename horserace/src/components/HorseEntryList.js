import HorseEntry from "./HorseEntry";

const HorseEntryList = ({ data = [] }) => {
  return data.map((entry) => {
    return <HorseEntry row={entry} />;
  });
};

export default HorseEntryList;
