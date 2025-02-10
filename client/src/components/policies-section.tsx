import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PoliciesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">ホテルポリシー</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">チェックイン・チェックアウト</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium">チェックイン</p>
              <p className="text-sm text-muted-foreground">15:00 - 24:00</p>
            </div>
            <div>
              <p className="font-medium">チェックアウト</p>
              <p className="text-sm text-muted-foreground">11:00まで</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">キャンセルポリシー</h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• ご宿泊日の7日前まで：無料</li>
              <li>• 6日前 〜 4日前：宿泊料の30%</li>
              <li>• 3日前 〜 前日：宿泊料の50%</li>
              <li>• 当日：宿泊料の100%</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <h3 className="text-lg font-semibold">その他の注意事項</h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 未成年の方のみでのご宿泊はお断りしております。</li>
              <li>• 貴重品はフロントにてお預かりいたします。</li>
              <li>• 館内は全面禁煙となっております。</li>
              <li>• ペットの同伴はお断りしております。</li>
              <li>• 駐車場は予約制となっております。</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
