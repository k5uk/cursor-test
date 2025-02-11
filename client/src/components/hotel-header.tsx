import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import HotelDetailsModal from "./hotel-details-modal";

export default function HotelHeader() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <header className="relative">
      <div 
        className="h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            ニュートホテル東京
          </h1>
          <p className="text-lg mb-4">
            最高級のおもてなしと快適なご滞在をお約束いたします
          </p>
          <div className="flex gap-4">
            <Button variant="default" size="lg">
              予約を開始
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowDetails(true)}
            >
              詳細を見る
            </Button>
          </div>
        </div>
      </div>

      <HotelDetailsModal
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </header>
  );
}