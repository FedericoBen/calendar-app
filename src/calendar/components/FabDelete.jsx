import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {

    const {startDeletEvent, hasEventSelected} = useCalendarStore()

    return (

        <button
            className="btn btn-danger fab-danger"
            onClick={startDeletEvent}
            style={{'display':
            hasEventSelected
            ?''
            :'none'
        }}
        >
            <i className="fas fa-trash-alt"></i>
        </button>

    )
}
