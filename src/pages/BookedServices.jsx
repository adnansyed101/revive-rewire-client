import { useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BookedServices = () => {
  const bookingData = useLoaderData();
  const bookings = bookingData.data.data;

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-8">
        <div className="max-w-7xl w-full bg-base-200 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Booked Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="card bg-base-100 shadow-md border border-gray-200 rounded-lg p-4"
                >
                  <figure className="mb-4">
                    <img
                      src={booking.imgURL}
                      alt={booking.serviceName}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </figure>
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    {booking.serviceName}
                  </h3>
                  <p>Price: ${booking.price}</p>
                  <p>Area: {booking.serviceArea}</p>
                  <div className="flex items-center mt-2">
                    <img
                      src={booking.provider.imgURL}
                      alt={booking.provider.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-md font-semibold">
                        {booking.provider.name}
                      </h4>
                      <p>{booking.provider.email}</p>
                    </div>
                  </div>
                  <p className="mt-2">
                    Date:{" "}
                    {format(new Date(booking.bookingDetails.serviceDate), "PP")}
                  </p>
                  <p className="mt-2">
                    <u>Special Instructions:</u>
                  </p>
                  <p className="mb-4">
                    {booking.bookingDetails.serviceInstruction}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-semibold">Status: </p>
                    
                  </div>
                </div>
              ))
            ) : (
              <h1>No Bookings Made Yet</h1>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookedServices;
