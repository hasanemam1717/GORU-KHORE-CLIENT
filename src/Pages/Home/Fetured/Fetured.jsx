import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import feturedImg from "../../../assets/home/featured.jpg";
import "./fetured.css"

const Fetured = () => {
  return (
    <div className="feturedImg bg-fixed">          
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Fetured item"}
      ></SectionTitle>
      <div className="md:flex bg-slate-500 bg-opacity-60 items-center  text-white justify-center md:py-20 md:px-36 md:gap-10">
        <div>
          <img  src={feturedImg} alt="" />
        </div>
        <div>
          <p>May 20,2024</p>
          <p className="uppercase text-xl">Whare can i get some</p>
          <p className="text-justify ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            blanditiis quod odit fugit similique minus quam aperiam deleniti
            eligendi adipisci, autem doloribus voluptas. Ullam velit sint
            exercitationem ex nihil non obcaecati a consequatur similique nisi,
            nulla molestias id laboriosam fugiat!
          </p>
          <button className="btn btn-outline border-0 border-b-4 rounded-md border-white mt-5">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
