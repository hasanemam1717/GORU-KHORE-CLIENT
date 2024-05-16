import { Parallax } from "react-parallax";

const Cover = ({ img, subHeading, heading }) => {
  console.log(img);
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div
          className="hero h-[400px] md:h-[700px]"
        
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{subHeading}</h1>
              <p className="mb-5">{heading}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
