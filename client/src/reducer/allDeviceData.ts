export const allDeviceDataReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_ALL_DEVICE_DATA':
      return { ...state }

    default:
      return { ...state }
  }
}
