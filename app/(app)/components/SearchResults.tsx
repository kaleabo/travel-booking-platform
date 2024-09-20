"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaneIcon, BuildingIcon, StarIcon } from "lucide-react";
import toast from "react-hot-toast";
import { getFlights, getHotels, Flight, Hotel } from "@/lib/api";
import Loading from "../components/Loading";

export function SearchResults() {
  const [activeTab, setActiveTab] = useState("flights");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [flightData, hotelData] = await Promise.all([
          getFlights(),
          getHotels(),
        ]);
        setFlights(flightData);
        setHotels(hotelData);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBook = (item: Flight | Hotel) => {
    toast.success(
      `Booked "${"destination" in item ? item.destination : item.name}!"`
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2 h-[60px] px-2 mb-8">
        <TabsTrigger value="flights" className="text-lg py-2">
          <PlaneIcon className="mr-2" />
          Flights
        </TabsTrigger>
        <TabsTrigger value="hotels" className="text-lg py-2">
          <BuildingIcon className="mr-2" />
          Hotels
        </TabsTrigger>
      </TabsList>
      <TabsContent value="flights">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flights.map((flight) => (
            <Card
              key={flight.id}
              className="overflow-hidden p-1 border-0 transition-shadow duration-200 hover:shadow-lg"
            >
              <CardHeader className="bg-blue-100 dark:bg-gray-900 rounded-xl">
                <CardTitle className="flex items-center">
                  <PlaneIcon className="mr-2" />
                  {flight.destination}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <p className="mb-2">Departure: {flight.departure}</p>
                <p className="text-2xl font-bold mb-4">${flight.price}</p>
                <Button onClick={() => handleBook(flight)} className="w-full">
                  Book Flight
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="hotels">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <Card
              key={hotel.id}
              className="overflow-hidden p-1 border-0 transition-shadow duration-200 hover:shadow-lg"
            >
              <CardHeader className="bg-blue-100 dark:bg-gray-900 rounded-xl">
                <CardTitle className="flex items-center">
                  <BuildingIcon className="mr-2" />
                  {hotel.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <p className="mb-2">Location: {hotel.location}</p>
                <p className="flex items-center mb-2">
                  <StarIcon className="text-yellow-400 mr-1" />
                  {hotel.rating}/5
                </p>
                <p className="text-2xl font-bold mb-4">${hotel.price}/night</p>
                <Button onClick={() => handleBook(hotel)} className="w-full">
                  Book Hotel
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
