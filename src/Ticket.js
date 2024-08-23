import React from 'react';
import { useDrag } from 'react-dnd';
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Ticket = ({ id, title, date, time, isResolved }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'ticket',
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            className={`ticket ${isDragging ? 'dragging' : ''} ${isResolved ? 'resolved' : ''}`}
            ref={drag}
        >
            <div className="ticket-content">
                <div className="ticket-title">
                    {title} 
                    <FaExternalLinkAlt 
                        style={{ 
                            marginLeft: '5px', 
                            color: isResolved ? '#4cae4c' : '#d9534f' 
                        }} 
                    />
                </div>
                <div className="ticket-datetime">
                    <FaCalendarAlt className="calendar-icon" />
                    <span className="ticket-date">{date}</span>
                    <span className="ticket-time">{time}</span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
