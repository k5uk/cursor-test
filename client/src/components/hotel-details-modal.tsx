import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HotelDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function HotelDetailsModal({ open, onOpenChange }: HotelDetailsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-2">ニュートホテル東京について</DialogTitle>
          <DialogDescription>
            <div className="space-y-4">
              <section>
                <h3 className="font-semibold text-lg mb-2">ホテル概要</h3>
                <p className="text-muted-foreground">
                  東京・大手町の中心に位置する当ホテルは、最高級のおもてなしと快適なご滞在を提供いたします。
                  ビジネスにも観光にも便利なロケーションで、上質な空間とサービスをお楽しみいただけます。
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-2">施設・サービス</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>24時間フロントデスク</li>
                  <li>レストラン＆バー</li>
                  <li>フィットネスセンター</li>
                  <li>スパ＆サウナ</li>
                  <li>会議室・宴会場</li>
                  <li>無料Wi-Fi</li>
                  <li>ルームサービス</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-2">周辺施設</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>東京メトロ大手町駅（徒歩1分）</li>
                  <li>JR東京駅（徒歩8分）</li>
                  <li>皇居（徒歩15分）</li>
                  <li>銀座エリア（電車で10分）</li>
                </ul>
              </section>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
