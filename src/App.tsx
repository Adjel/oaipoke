import Hero from "./components/Hero/Hero"
import PhotosComponent from "./components/PhotosComponent/PhotosComponent"
import Story from "./components/Story/Story"

export const App = () => {
  return (
    <section className="w-full h-auto">
      <Hero />
      <Story/>
      <PhotosComponent/>
    </section>
  )
}


