// sections
import PhotoGallery from "./sections/PhotoGallery";
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
      <main>
        <Services />
        <Projects />
        <Workspaces />
        <Testimonials />
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  );
}
