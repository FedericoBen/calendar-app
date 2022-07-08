import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

// const tempEvent = {
//     _id: new Date().getTime(),
//     title: 'cumpleaños mama',
//     notes: 'Hay que comprar el pastel',
//     start: new Date(),
//     end: addHours(new Date(), 2),
//     bgColor: '#fafafa',
//     user: {
//         _id: '1234',
//         name: 'federico'
//     }
// }

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoading: true,
        events: [
            // tempEvent

        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map(event => {
                if (event.id == payload.id) {
                    return payload;
                }
                return event;
            })
        },
        onDeletEvent: (state) => {
            if (state.activeEvent) {
                state.events = state.events.filter(event => event.id !== state.activeEvent.id)
                state.activeEvent = null;
            }
        },
        onLoadEvents: (state, { payload = [] }) => {
            state.isLoading = false;
            // state.events = [];
            payload.forEach(event => {
                const exists = state.events.some(dbdEvent => dbdEvent.id == event.id);
                if (!exists) {
                    state.events.push(event);
                }
            });
        },
        onLogOutCalendar: (state) => {
            state.isLoading = true;
            state.events = [];
            state.activeEvent = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onAddNewEvent,
    onDeletEvent,
    onLoadEvents,
    onSetActiveEvent,
    onUpdateEvent,
    onLogOutCalendar,
} = calendarSlice.actions;