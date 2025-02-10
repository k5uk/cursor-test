import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Room } from "@shared/schema";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={room.imageUrl}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <CardHeader>
        <h3 className="text-xl font-semibold">{room.name}</h3>
        <p className="text-sm text-muted-foreground">{room.description}</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {room.amenities.map((amenity, index) => (
            <li key={index} className="text-sm">
              • {amenity}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">
            ¥{room.price.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">1泊あたり / 税込</p>
        </div>
        <Button>予約する</Button>
      </CardFooter>
    </Card>
  );
}
