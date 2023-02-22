import React from 'react';
import { useSelector } from 'react-redux';
import Tr from './Tr';

export default function Preview() {
    const state = useSelector(state => state);
    return (
        <div className="table-container">
            <table className="booking-table">
                <thead className="bg-gray-100/50">
                    <tr className="text-black text-left">
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th className="text-center">Journey Date</th>
                        <th className="text-center">Guests</th>
                        <th className="text-center">Class</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                    {state.map((v, i) =>
                        <Tr key={i}
                            from={v.from}
                            to={v.to}
                            guests={v.guests}
                            date={v.date}
                            ticketClass={v.ticketClass}
                            id={v.id} />)}
                </tbody>
            </table>
        </div>
    );
}


