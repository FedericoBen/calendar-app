import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import calendarApi from "../apis/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent, onDeletEvent, onLoadEvents } from "../store";

export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        try {

            if (calendarEvent.id) {
                //*Actualizando
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
                dispatch(onUpdateEvent({ ...calendarEvent }));
                return;
            }

            //*creando
            const { data } = await calendarApi.post('/events', calendarEvent);
            // console.log(data);
            dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));


        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg,'error');
        }

    }

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.eventos);
            dispatch(onLoadEvents(events));
        } catch (error) {
            console.log('Error cargando eventos', error);
        }
    }

    const startDeletEvent = async() => {
        try {
            console.log('llego aqui');
            await calendarApi.delete(`/events/${activeEvent.id}`);
            dispatch(onDeletEvent());
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar este evento', error.response.data?.msg,'error');
        }

    }

    return {
        //*Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //*Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletEvent,
        startLoadingEvents
    }
}
