
export const CalendarEvent = ({ event }) => {


    const { title, user, notes } = event;
    return (
        <>
            <strong>{title}</strong>
            <div className="mt-2">
                <span>{user.name}</span>
            </div>
            <hr></hr>
            <div className="mt-2">
                <p>{notes}</p>
            </div>
        </>
    )
}
