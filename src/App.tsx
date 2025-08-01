import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VenturaMarine from "./pages/VenturaMarine";
import Pontoon250 from "./pages/Pontoon250";
import V195Comfort from "./pages/V195Comfort";
import MonteOSeu from "./pages/MonteOSeu";
import ProductConfigurator from "./pages/ProductConfigurator";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ventura-marine" element={<VenturaMarine />} />
          <Route path="/pontoon250" element={<Pontoon250 />} />
          <Route path="/v195comfort" element={<V195Comfort />} />
          <Route path="/monte-o-seu" element={<MonteOSeu />} />
          <Route path="/monte-o-seu/:category/:model" element={<ProductConfigurator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
