
// initial state
const state = {
    type: "差旅日程",
    startTime: "",
    stopTime: "",
    totalDays: "",
    fkTrip: [
        {
            startTime: "",
            stopTime: "",
            startCity: "",
            startCityId: "",
            startDomestic: "home",
            stopCity: "",
            stopCityId: "",
            stopDomestic: "home",
            transportation: "",
            transportationKey: ""
        },
        {
            type: "transportation",
            startTime: "",
            stopTime: "",
            startCity: "",
            startCityId: "",
            startDomestic: "home",
            stopCity: "",
            stopCityId: "",
            stopDomestic: "home",
            transportation: "",
            transportationKey: ""
        }
    ]
}

// getters
const getters = {
    
}

// actions

const actions = {}

// mutations
const mutations = {
    AddSchedule(state) {
        state.fkTrip.splice(state.fkTrip.length - 1, 0, {
            startTime: "",
            stopTime: "",
            startCity: "",
            startCityId: "",
            startDomestic: "home",
            stopCity: "",
            stopCityId: "",
            stopDomestic: "home",
            transportation: "",
            transportationKey: ""
        })
    },
    UpdateStartTime(state, start) {
        state.startTime = start
        state.fkTrip[0].startTime = start
        if(state.startTime && state.stopTime){
            state.totalDays = (state.stopTime-state.startTime)/1000/3600/24
        }

    },
    UpdateStopTime(state, stop) {
        state.stopTime = stop
        let length = state.fkTrip.length
        state.fkTrip[length - 1].startTime = stop
        if(state.startTime && state.stopTime){
            state.totalDays = (state.stopTime-state.startTime)/1000/3600/24
        }
    },
    UpdateTripStartCity(state, { index, city: { id, name } }) {
        state.fkTrip[index].startCity = name
        state.fkTrip[index].startCityId = id
    },
    UpdateTripStopCity(state, { index, city: { id, name } }) {
        state.fkTrip[index].stopCity = name
        state.fkTrip[index].stopCityId = id
        if (state.fkTrip[index + 1]) {
            state.fkTrip[index + 1].startCity = name
            state.fkTrip[index + 1].startCityId = id
        }
    },
    UpdateTripStartTime(state, { index, time }) {
        state.fkTrip[index].startTime = time
        state.fkTrip[index].stopTime = time
    },
    UpdateTripTransportation(state, { index, transportation: { name, key } }) {
        state.fkTrip[index].transportation = name
        state.fkTrip[index].transportationKey = key
    },
    deleteTrip(state, index) {
        if (state.fkTrip[index - 1].stopCity && !state.fkTrip[index + 1].startCity) {
            state.fkTrip[index + 1].startCity = state.fkTrip[index - 1].stopCity
            state.fkTrip[index + 1].startCityId = state.fkTrip[index - 1].stopCityId
        }
        state.fkTrip.splice(index, 1)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}