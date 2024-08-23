import React from 'react';
import { useDrop } from 'react-dnd';
import Ticket from './Ticket';

const Section = ({ title, tickets, moveTicket }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'ticket',
        drop: (item) => moveTicket(item.id, title),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div className={`section ${isOver ? 'over' : ''}`} ref={drop}>
            <h2>{title}</h2>
            {tickets.map(ticket => (
                <Ticket 
                    key={ticket.id} 
                    id={ticket.id} 
                    title={ticket.title} 
                    date={ticket.date} 
                    time={ticket.time} 
                    isResolved={title === 'Resolved'} 
                />
            ))}
        </div>
    );
};

export default Section;
