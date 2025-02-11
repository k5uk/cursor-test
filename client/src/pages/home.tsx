import HotelHeader from "../components/hotel-header";
import RoomCard from "../components/room-card";
import LocationSection from "../components/location-section";
import PoliciesSection from "../components/policies-section";
import { useQuery } from "@tanstack/react-query";
import type { Room } from "@shared/schema";

export default function Home() {
  const { data: rooms, isLoading } = useQuery<Room[]>({ 
    queryKey: ['/api/rooms']
  });

  return (
    <div className="min-h-screen bg-background">
      <HotelHeader />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">利用可能なお部屋</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-[400px] bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms?.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
        </section>

        <LocationSection />
        <PoliciesSection />
      </main>
    </div>
  );
}
