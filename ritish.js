var myTrip = {
    destination: "Hyderabad",
    travelDate: new Date("2024-06-15"),
    returnDate: new Date("2024-07-22"),
    numberOfTravelers: 2
};
function displayBooking(booking) {
    console.log("Travelling to: ".concat(booking.destination));
    console.log("Travel date: ".concat(booking.travelDate.toDateString()));
    console.log("Return date: ".concat(booking.returnDate.toDateString()));
    console.log("Number of Passengers: ".concat(booking.numberOfTravelers));
}
displayBooking(myTrip);
