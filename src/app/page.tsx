"use client"
import { TollBooth } from "@/services/TollBooth";
import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Home() {
  const tollBooth = new TollBooth();

  const getTollBooth = useDebouncedCallback(() => tollBooth.getTollBooth(), 1000);

  useEffect(() => {
    getTollBooth();
  }, [])

  return (
    <main>
      <p>{tollBooth.store.loading.toString()}</p>
    </main>
  );
}
