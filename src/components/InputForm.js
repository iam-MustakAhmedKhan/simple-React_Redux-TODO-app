import React from 'react';
import { add } from '../redux/Booking/bookingActions';
import change from '../redux/formField/formAction';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid4 } from 'uuid';

import frame from '../img/icons/Frame.svg';
import vector1 from '../img/icons/Vector (1).svg';
import vector3 from '../img/icons/Vector (3).svg';


function InputForm() {

    const stateLength = useSelector(state => state.bookingReducer.length);
    const booking = useSelector(state => state.formField);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        return dispatch(change(name, value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(add({ ...booking,id:uuid4()}));
    };

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform">
                    {/* <!-- From --> */}
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src={frame} alt="" />
                            <select value={booking.from} onChange={handleChange} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- To --> */}
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src={frame} alt="" />
                            <select value={booking.to} onChange={handleChange} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Date --> */}
                    <div className="des-from">
                        <p>Journey Date</p>
                        <input value={booking.date} onChange={handleChange} type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
                    </div>

                    {/* <!-- Guests --> */}
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src={vector1} alt="" />
                            <select value={booking.guests} onChange={handleChange} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Class --> */}
                    <div className="des-from !border-r-0">
                        <p>Class</p>
                        <div className="flex flex-row">
                            <img src={vector3} alt="" />
                            <select value={booking.ticketClass} onChange={handleChange} className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                                <option value="" hidden>Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button className="addCity" type="submit" id="lws-addCity" disabled={stateLength >= 3 ? true : false} onClick={handleSubmit}>
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default InputForm;