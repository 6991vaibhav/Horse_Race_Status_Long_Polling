import cloneDeep from 'lodash/cloneDeep'
import findIndex from 'lodash/findIndex'

export const sortRaceStatus = (data) => {
  return data.sort((a, b) => {
    if (!a.endTime) {
      return 1;
    } else if (!b.endTime) {
      return -1;
    } else {
      return a.endTime - b.endTime
    }
  })
}

export const updateRaceStatus = (data, newRecord) => {
  if (newRecord.event === "start") {
    const newHorseDetail = {
      id: newRecord.horse.id,
      name: newRecord.horse.name,
      startTime: 0,
      endTime: null,
    };
    data = [...data, newHorseDetail]
    const isAnyHorseFinished = data.find(item => item.endTime !== null)
    return isAnyHorseFinished ? sortRaceStatus(data) : data;
  } else {
    const clonedData = cloneDeep(data);
    if (newRecord.horse) {
      const itemIndex = findIndex(clonedData, (item) => item.id === newRecord.horse.id);
      if (itemIndex !== -1) {
        Object.assign(clonedData[itemIndex], { endTime: newRecord.time });
      }
    }
    return sortRaceStatus(clonedData);
  }
}