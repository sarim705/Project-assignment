import React, { useState } from 'react';
import Section from './Section';

const Panel = () => {
    const [tickets, setTickets] = useState([
        { id: 1, title: 'Sidebar not working', status: 'To Do', date: '28/4/2023', time: '1:03pm' },
        { id: 2, title: 'Course search error', status: 'To Do', date: '15/4/2024', time: '2:42pm' },
        { id: 3, title: 'Responsive Issue', status: 'In Progress', date: '29/4/2023', time: '12:09pm' },
        { id: 4, title: 'Undergraduate courses in Malaysia', status: 'Resolved', date: '21/2/2023', time: '4:51pm' },
    ]);

    const moveTicket = (id, newStatus) => {
        setTickets(tickets.map(ticket =>
            ticket.id === id ? { ...ticket, status: newStatus } : ticket
        ));
    };

    return (
        <div className="panel">
            <Section title="To Do" tickets={tickets.filter(ticket => ticket.status === 'To Do')} moveTicket={moveTicket} />
            <Section title="In Progress" tickets={tickets.filter(ticket => ticket.status === 'In Progress')} moveTicket={moveTicket} />
            <Section title="Resolved" tickets={tickets.filter(ticket => ticket.status === 'Resolved')} moveTicket={moveTicket} />
        </div>
    );
}

export default Panel;
