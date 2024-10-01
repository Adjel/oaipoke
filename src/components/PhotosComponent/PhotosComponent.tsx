import p1 from "../../../public/assets/p1.webp"
import p2 from "../../../public/assets/p2.webp"
import p3 from "../../../public/assets/p3.webp"
import p4 from "../../../public/assets/p4.webp"
import p5 from "../../../public/assets/p5.webp"
import p6 from "../../../public/assets/p6.webp"
import p7 from "../../../public/assets/p7.webp"
import p8 from "../../../public/assets/p8.webp"

function PhotosComponent() {
  return <section className="flex flex-wrap w-full h-fit py-12 px-8 justify-center items-center">
    <img src={`${p4}`} className="mx-12 my-6 size-60"/>
    <img src={`${p1}`} className="mx-12 my-6 size-60"/>
    <img src={`${p3}`} className="mx-12 my-6 size-60"/>
    <img src={`${p5}`} className="mx-12 my-6 size-60"/>
    <img src={`${p6}`} className="mx-12 my-6 size-60"/>
    <img src={`${p7}`} className="mx-12 my-6 size-60"/>
    <img src={`${p8}`} className="mx-12 my-6 size-60"/>
    <img src={`${p2}`} className="mx-12 my-6 size-60"/>
  </section>;
}

export default PhotosComponent;
