interface TravelBooking{
    destination : string;
    travelDate : Date;
    returnDate : Date;
    numberOfTravelers : number;
}

const myTrip: TravelBooking= {
    destination : "Hyderabad",
    travelDate : new Date("2024-06-15"),
    returnDate : new Date("2024-07-22"),
    numberOfTravelers : 2
};

function displayBooking(booking: TravelBooking): void{
    
    console.log(`Travelling to: ${booking.destination}`);
    console.log(`Travel date: ${booking.travelDate.toDateString()}`);
    console.log(`Return date: ${booking.returnDate.toDateString()}`);
    console.log(`Number of Passengers: ${booking.numberOfTravelers}`);

}

displayBooking(myTrip);