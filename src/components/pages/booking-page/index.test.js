import BookingPage from "./";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Booking Page", () => {
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    test("The reservation time input should have one or more available options", async () => {
      render(
        <MemoryRouter>
          <BookingPage />
        </MemoryRouter>
      );

      const timeOptions = await screen.findAllByTestId("time-option");

      expect(timeOptions.length).toBeGreaterThanOrEqual(1);

      timeOptions.forEach(timeOption =>
        expect(timeOption.value).toMatch(timeFormat)
      );
    });

    test("The available time options should update when changing the reservation date.", async () => {
      render(
        <MemoryRouter>
          <BookingPage />
        </MemoryRouter>
      );

      const reservationDate = "2023-08-15";
      const dateInput = screen.getByLabelText(/Date/);
      const timeOptions = await screen.findAllByTestId("time-option");

      fireEvent.change(dateInput, { target: { value: reservationDate } });
      fireEvent.blur(dateInput);

      const updatedTimeOptions = await screen.findAllByTestId("time-option");

      expect(dateInput).toHaveValue(reservationDate);
      timeOptions.forEach(timeOption =>
        expect(timeOption.value).toMatch(timeFormat)
      );
      updatedTimeOptions.forEach(timeOption =>
        expect(timeOption.value).toMatch(timeFormat)
      );
      expect(timeOptions.length).not.toBe(updatedTimeOptions.length);
    });
  });