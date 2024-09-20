import { SearchResults } from "../components/SearchResults";

export default function SearchPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl text-balance font-bold text-center md:py-10 py-5 mb-8">
        Search Flights and Hotels
      </h1>
      <SearchResults />
    </div>
  )
}