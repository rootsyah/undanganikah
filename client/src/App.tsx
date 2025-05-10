import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import Templates from "@/pages/Templates";
import TemplateDetail from "@/pages/TemplateDetail";
import HowToOrder from "@/pages/HowToOrder";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/templates" component={Templates} />
        <Route path="/templates/:id" component={TemplateDetail} />
        <Route path="/cara-pesan" component={HowToOrder} />
        <Route path="/tentang-kami" component={AboutUs} />
        <Route path="/kontak" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </TooltipProvider>
  );
}

export default App;
