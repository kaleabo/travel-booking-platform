import { BookingForm } from "../components/BookingForm";

export default function BookPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl text-balance font-bold text-center md:py-10 py-5 mb-8">
      Book Your Trip
      </h1>
      <BookingForm />
    </div>
  )
}