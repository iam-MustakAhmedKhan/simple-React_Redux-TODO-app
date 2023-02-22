import React from 'react';
import { useSelector } from 'react-redux';
import Row from './Row';

export default function Preview() {
    const state = useSelector(state => state.bookingReducer);
    return (
        <div className={`table-container ${state.length>0?'':'hidden'}`}>
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
                    {state.map((data) => <Row key={data.id} data={data} />)}
                </tbody>
            </table>
        </div>
    );
}


