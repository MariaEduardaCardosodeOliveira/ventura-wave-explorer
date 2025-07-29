import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Ship, Car, Zap } from "lucide-react";
const categories = [{
  id: 1,
  name: "Marine",
  icon: Ship,
  image: "/src/assets/marine-boat.jpg",
  borderColor: "border-blue-600",
  hoverColor: "hover:border-blue-400 hover:shadow-blue-400/30",
  link: "/marine"
}, {
  id: 2,
  name: "Adventure",
  icon: Car,
  image: "/lovable-uploads/f2adefb4-7c40-4c04-a99d-ffcda84194f2.png",
  borderColor: "border-orange-600",
  hoverColor: "hover:border-orange-400 hover:shadow-orange-400/30",
  link: "/adventure"
}, {
  id: 3,
  name: "Electric",
  icon: Zap,
  image: "/lovable-uploads/4ecac867-4e3b-41a2-a52c-988669e1bc11.png",
  borderColor: "border-green-500",
  hoverColor: "hover:border-green-400 hover:shadow-green-400/30",
  link: "/electric"
}];
const CategoriesSlider = () => {
  const [api, setApi] = useState<any>();
  return;
};
export default CategoriesSlider;