import BookingForm from "./BookingForm";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Booking Form", () => {
    const todayDate = new Date().toISOString().split("T")[0];
    const availableTimes = ["18:00", "18:30", "19:00"];
    const dispatchWhenDateChanges = jest.fn();
    const submitData = jest.fn();

    test("The fields and their default values should be rendered.", async () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                submitData={submitData}
            />
        );

        const dateInput = screen.getByLabelText(/Date/);
        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute("type", "date");
        expect(dateInput).toHaveAttribute("id", "res-date");
        expect(dateInput).toHaveValue(todayDate);

        const timeInput = screen.getByLabelText(/Time/);
        expect(timeInput).toBeInTheDocument();
        expect(timeInput).toHaveAttribute("id", "res-time");

        const timeOptions = await screen.findAllByTestId("time-option");
        expect(timeOptions.length).toBe(3);

        const numOfGuestsInput = screen.getByLabelText(/Number of guests/);
        expect(numOfGuestsInput).toBeInTheDocument();
        expect(numOfGuestsInput).toHaveAttribute("type", "number");
        expect(numOfGuestsInput).toHaveAttribute("id", "guests");
        expect(numOfGuestsInput).toHaveValue(1);

        const occasionInput = screen.getByLabelText(/Occasion/);
        expect(occasionInput).toBeInTheDocument();
        expect(occasionInput).toHaveAttribute("id", "occasion");

        const occasionOptions = await screen.findAllByTestId("occasion-option");
        expect(occasionOptions.length).toBe(4);

        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute("type", "submit");
        expect(submitButton).toBeEnabled();
    });

    test("The form can be submitted with default values.", () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                submitData={submitData}
            />
        );

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);
        expect(submitData).toHaveBeenCalledWith({
            date: todayDate,
            time: availableTimes[0],
            numOfGuests: 1,
            occasion: "Casual",
        });
    });

    test("An error message should be displayed when the date field's value is empty.", () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchWhenDateChanges={dispatchWhenDateChanges}
                submitData={submitData}
            />
        );

        const dateInput = screen.getByLabelText(/Date/);
        fireEvent.change(dateInput, { target: { value: "" }});
        fireEvent.blur(dateInput);
        const errorMessage = screen.getByTestId("error-message");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent("Please choose a valid date");
    });

    test("The sumbit button should be disabled when the date field's value is empty", () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchWhenDateChanges={dispatchWhenDateChanges}
                submitData={submitData}
            />
        );

        const dateInput = screen.getByLabelText(/Date/);
        const submitButton = screen.getByRole("button");

        fireEvent.change(dateInput, { target: { value: "" } });
        fireEvent.blur(dateInput);
        expect(submitButton).toBeDisabled();
    });

    test(`An error message should be displayed when the number of guests
        field's value is empty.`, () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchWhenDateChanges={dispatchWhenDateChanges}
                submitData={submitData}
            />
        );

        const numOfGuestsInput = screen.getByLabelText(/Number of guests/);
        fireEvent.change(numOfGuestsInput, { target: { value: "" } });
        fireEvent.blur(numOfGuestsInput);
        const errorMessage = screen.getByTestId("error-message");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent("Please enter a number between 1 and 10");
    });

    test(`An error message should be displayed when the number of guests
        field's value is less than 1.`, () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchWhenDateChanges={dispatchWhenDateChanges}
                submitData={submitData}
            />
        );

        const numOfGuestsInput = screen.getByLabelText(/Number of guests/);
        fireEvent.change(numOfGuestsInput, { target: { value: "0" } });
        fireEvent.blur(numOfGuestsInput);
        const errorMessage = screen.getByTestId("error-message");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent("Please enter a number between 1 and 10");
    });

    test(`An error message should be displayed when the number of guests
        field's value is greater than 10.`, () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchWhenDateChanges={dispatchWhenDateChanges}
                submitData={submitData}
            />
        );

        const numOfGuestsInput = screen.getByLabelText(/Number of guests/);
        fireEvent.change(numOfGuestsInput, { target: { value: "11" } });
        fireEvent.blur(numOfGuestsInput);
        const errorMessage = screen.getByTestId("error-message");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent("Please enter a number between 1 and 10");
    });

    test(`The submit button should be disabled when the number
        of guests field's value is empty.`, () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchWhenDateChanges={dispatchWhenDateChanges}
                submitData={submitData}
            />
        );

        const numOfGuestsInput = screen.getByLabelText(/Number of guests/);
        const submitButton = screen.getByRole("button");

        fireEvent.change(numOfGuestsInput, { target: { value: "" } });
        fireEvent.blur(numOfGuestsInput);
        expect(submitButton).toBeDisabled();
    });

    test(`The submit button should be disabled when the number
        of guests field's value is less than 1.`, () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchWhenDateChanges={dispatchWhenDateChanges}
                submitData={submitData}
            />
        );

        const numOfGuestsInput = screen.getByLabelText(/Number of guests/);
        const submitButton = screen.getByRole("button");

        fireEvent.change(numOfGuestsInput, { target: { value: "0" } });
        fireEvent.blur(numOfGuestsInput);
        expect(submitButton).toBeDisabled();
    });

    test(`The submit button should be disabled when the number
        of guests field's value is greater than 10.`, () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatchWhenDateChanges={dispatchWhenDateChanges}
                submitData={submitData}
            />
        );

        const numOfGuestsInput = screen.getByLabelText(/Number of guests/);
        const submitButton = screen.getByRole("button");

        fireEvent.change(numOfGuestsInput, { target: { value: "11" } });
        fireEvent.blur(numOfGuestsInput);
        expect(submitButton).toBeDisabled();
    });
  });