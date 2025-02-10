import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function LocationSection() {
  // 東京駅付近の座標
  const position: [number, number] = [35.6812, 139.7671];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">アクセス</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <div className="aspect-video rounded-lg mb-4 overflow-hidden">
            <MapContainer 
              center={position} 
              zoom={16} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  ニュートホテル東京
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">住所</h3>
                <p className="text-sm text-muted-foreground">
                  〒100-0004 東京都千代田区大手町1-2-3
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">電話番号</h3>
                <p className="text-sm text-muted-foreground">03-1234-5678</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-semibold">メール</h3>
                <p className="text-sm text-muted-foreground">
                  info@newthotel-tokyo.com
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">交通アクセス</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• 東京メトロ大手町駅 直結</li>
            <li>• JR東京駅 徒歩8分</li>
            <li>• 羽田空港から車で約40分</li>
            <li>• 成田空港から車で約60分</li>
          </ul>
        </div>
      </div>
    </section>
  );
}