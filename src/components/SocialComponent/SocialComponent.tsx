import tripadvisor from "../../../public/assets/tripadvisor_logo.svg"
import x_logo from "../../../public/assets/X_logo.svg"
import insta from "../../../public/assets/instagram_logo.svg"

function SocialComponent() {
  return <section className='h-2/3 p-4 flex flex-col gap-4 justify-center items-end'>
    <button>
      <img alt='go to tripadvisor button' src={`${tripadvisor}`} className='fill-curent text-white size-8'/>
    </button>
    <button>
      <img alt='go to x button' src={`${x_logo}`} className='fill-curent text-white size-8'/>
    </button>
    <button>
      <img alt="go to instagram button" src={`${insta}`} className='fill-curent text-white size-8'/>
    </button>
  </section>;
}

export default SocialComponent;
