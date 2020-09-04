const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

const fetchAllDeviceData = () => ({
  type: 'FETCH_ALL_DEVICE_DATA',
})

export default { increment, decrement, fetchAllDeviceData }
