import { NavbarComponent, HomeComponent, About, Skills, Footer, Project } from "../components";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HomeComponent />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}
