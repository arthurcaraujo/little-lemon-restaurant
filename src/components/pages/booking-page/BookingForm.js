import { useState } from "react";

export default function BookingForm({availableTimes, dispatchWhenDateChanges, submitData}) {
    const minDate = new Date().toISOString().split("T")[0];
    const minTime = availableTimes[0];
    const minNumOfGuests = 1;
    const maxNumOfGuests = 10;
    const occasionsList = ["Anniversary", "Birthday", "Business meeting", "Casual"];

    const dateErrorMessage = "Please choose a valid date";
    const timeErrorMessage = "Please choose a valid time";
    const occasionErrorMessage = "Please choose a valid occasion";
    const numOfGuestsErrorMessage = "Please enter a number between 1 and 10";

    const [date, setDate] = useState(minDate);
    const [time, setTime] = useState(minTime);
    const [numOfGuests, setNumOfGuests] = useState(minNumOfGuests);
    const [occasion, setOccasion] = useState(occasionsList[3]);

    /*  Checking if fields are valid  */

    const dateIsValid = () => {
        return date !== "" && date >= minDate;
    }

    const timeIsValid = () => time !== "";

    const numOfGuestsIsValid = () => {
        return numOfGuests !== ""
            && numOfGuests >= minNumOfGuests
            && numOfGuests <= maxNumOfGuests;
    }

    const occasionIsValid = () => occasion !== "";

    const fieldsAreValid = () => {
        return dateIsValid()
            && timeIsValid()
            && numOfGuestsIsValid()
            && occasionIsValid();
    }

    /* ---------- */

    const handleDateChange = e => {
        setDate(e.target.value);
        dispatchWhenDateChanges(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        submitData({date, time, numOfGuests, occasion});
    }

    return (
        <form className="booking-form" onSubmit={handleFormSubmit}>
            <label
                htmlFor="res-date"
                style={{marginBottom: !dateIsValid() ? "0" : "1.3rem"}}
            >
                Date <span className="required-icon">*</span>
                <input
                    id="res-date"
                    min={minDate}
                    name="reservation-date"
                    onChange={handleDateChange}
                    required
                    type="date"
                    value={date}
                />
                {
                    !dateIsValid() && dateErrorMessage
                        ? <p className="error-message" data-testid="error-message">{dateErrorMessage}</p>
                        : null
                }
            </label>

            <label
                htmlFor="res-time"
                style={{marginBottom: !timeIsValid() ? "0" : "1.3rem"}}
            >
                Time <span className="required-icon">*</span>
                <select
                    id="res-time"
                    name="reservation-time"
                    onChange={e => setTime(e.target.value)}
                    required
                    value={time}
                >
                    {availableTimes.map(timeOption =>
                        <option data-testid="time-option" key={timeOption}>
                            {timeOption}
                        </option>
                    )}
                </select>
                {
                    !timeIsValid() && timeErrorMessage
                        ? <p className="error-message" data-testid="error-message">{timeErrorMessage}</p>
                        : null
                }
            </label>

            <label
                htmlFor="guests"
                style={{marginBottom: !numOfGuestsIsValid() ? "0" : "1.3rem"}}
            >
                Number of guests <span className="required-icon">*</span>
                <input
                    id="guests"
                    max={maxNumOfGuests}
                    min={minNumOfGuests}
                    name="num-of-guests"
                    onChange={e => setNumOfGuests(e.target.value)}
                    required
                    type="number"
                    value={numOfGuests}
                />
                {
                    !numOfGuestsIsValid() && numOfGuestsErrorMessage
                        ? <p className="error-message" data-testid="error-message">{numOfGuestsErrorMessage}</p>
                        : null
                }
            </label>

            <label
                htmlFor="occasion"
                style={{marginBottom: !occasionIsValid() ? "1.2rem" : "2.5rem"}}
            >
                Occasion <span className="required-icon">*</span>
                <select
                    id="occasion"
                    name="reservation-occasion"
                    onChange={e => setOccasion(e.target.value)}
                    required
                    value={occasion}
                >
                    {occasionsList.map((item, index) =>
                        <option data-testid="occasion-option" key={index}>
                            {item}
                        </option>
                    )}
                </select>
                {
                    !occasionIsValid() && occasionErrorMessage
                        ? <p className="error-message" data-testid="error-message">{occasionErrorMessage}</p>
                        : null
                }
            </label>

            <button
                className="btn"
                disabled={!fieldsAreValid()}
                type="submit"
            >
                Make your reservation
            </button>
        </form>
    )
}