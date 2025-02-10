import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express) {
  // Get all rooms
  app.get("/api/rooms", async (_req, res) => {
    const dummyRooms = [
      {
        id: 1,
        name: "デラックスルーム",
        description: "40平米の広々とした空間で快適なご滞在を",
        amenities: ["キングサイズベッド", "50インチTV", "ミニバー", "レインシャワー"],
        price: 45000,
        imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80"
      },
      {
        id: 2,
        name: "プレミアムルーム",
        description: "都心の景色を一望できる50平米の贅沢な空間",
        amenities: ["キングサイズベッド", "バスタブ", "専用ラウンジ利用可", "ワークデスク"],
        price: 65000,
        imageUrl: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80"
      },
      {
        id: 3,
        name: "スイートルーム",
        description: "80平米の広さを誇る最上級のお部屋",
        amenities: ["リビング別", "ダイニングエリア", "バトラーサービス", "シャンパン付き"],
        price: 120000,
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
      }
    ];

    res.json(dummyRooms);
  });

  const httpServer = createServer(app);
  return httpServer;
}
