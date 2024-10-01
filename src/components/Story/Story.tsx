import v1 from "../../../public/assets/v1.webp"
import logo2 from "../../../public/assets/logo2.svg"

function Story() {
  return (
    <section className="relative w-full h-screen py-24 bg-gradient-to-b from-yellow-500 to-yellow-300">
      <div className="flex w-1/2 h-full ml-44 justify-center">
      <img className="w-auto h-auto border-white border-8" src={`${v1}`}/>
      </div>
      <div className="absolute px-12 bottom-0 top-0 self-center left-1/4 w-1/2 h-1/2">
        <div className="flex flex-col w-full h-full bg-white items-center">
            <div className="realtive h-1/4 flex mt-2 mb-6 items-center">
              <div className="flex w-full h-fit justify-center items-center">
                <span className="text-ocean text-center text-xl -rotate-6">Our Poke</span>
              </div>
              <div className="absolute top-6 bottom-0 right-0">
                <img alt="waves decoration" src={`${logo2}`} className="fill-current text-ocean"/>
              </div>
            </div>
            <div className="flex w-full h-1/2 items-center">
              <div className="flex w-full items-center justify-center">
                <span className="w-1/2 h-fit text-center text-ocean">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores velit quasi quo ducimus iure ssumenda laudantium.</span>
              </div>
                <span className="bg-ocean h-full w-1"></span>
                <div className="flex flex-col w-full items-center justify-center">
                <button className="text-ocean border-2 border-ocean px-8 py-2">Voir le menu</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
