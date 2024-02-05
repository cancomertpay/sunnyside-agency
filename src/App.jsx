// sections
import {
  Home,
  Projects,
  Services,
  Workspaces,
  Testimonials,
  Footer,
} from "./sections/index";

export default function App() {
  return (
    <div className="overflow-hidden box-border">
      <Home />
      <Services />
      <Projects />
      <Workspaces />
      <Testimonials />
      <Footer />
    </div>
  );
}
