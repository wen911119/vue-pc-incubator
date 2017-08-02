export const DateTimePickerShow = (state)=>{
    state.DateTimePickerVisable = true
}

export const DateTimePickerConfirm = (state, time)=>{
    state.DateTimePickerValue = time
}
