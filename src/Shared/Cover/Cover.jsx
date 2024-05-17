import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
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
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5"> Aspernatur facilis, recusandae similique soluta eos facere placeat, nam, illum sunt deleniti magnam voluptas cum! Facilis, fugit adipisci nisi dolorem, consectetur maxime saepe minima doloribus necessitatibus eum blanditiis quae, optio numquam! Suscipit eius, distinctio expedita cum dolorem quisquam rerum dignissimos eligendi at quia cupiditate doloremque accusantium ducimus tenetur optio sint debitis tempore consequatur dolorum error non obcaecati. Ab, minima saepe temporibus nihil error neque, cum excepturi aut praesentium corporis ducimus facilis vero voluptas perferendis amet? Incidunt suscipit dolores impedit nihil et repellendus maiores aspernatur consectetur hic iste. Ad in nostrum, </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
