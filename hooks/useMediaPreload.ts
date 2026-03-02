import { useEffect } from "react";

interface MediaItem {
  url: string;
  id: number;
}

export const useMediaPreload = (
  items: MediaItem[],
  currentIndex: number,
  type: "video" | "image",
) => {
  useEffect(() => {
    // Pré-carrega próximos 2 itens
    const preloadIndices = [
      (currentIndex + 1) % items.length,
      (currentIndex + 2) % items.length,
    ];

    preloadIndices.forEach((index) => {
      const item = items[index];

      if (type === "video") {
        // Pré-carrega vídeo
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "video";
        link.href = item.url;
        document.head.appendChild(link);
      } else {
        // Pré-carrega imagem
        const img = new Image();
        img.loading = "eager";
        img.src = item.url;
      }
    });
  }, [currentIndex, items, type]);
};
