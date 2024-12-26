/**
 * @copyright 2024 paskahtjandra
 * @license Apache-2.0
 */

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/favicon.svg"
                width={40}
                height={40}
                alt="Jei's Portrait"
                className="img-cover"
              />
            </figure>

            <div className="">
              <span className="">
                <span className=""></span>
              </span>
              Ini Kata-Katanya
            </div>
          </div>

          <h2 className="">Ini Kata-Katanya 2</h2>

          <div className="">ButtonPrimary ButtonOutline</div>
        </div>
        <div className="">
          <figure className="">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Jei"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
