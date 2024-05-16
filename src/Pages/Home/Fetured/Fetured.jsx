import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import feturedImg from "../../../assets/home/featured.jpg";
import "./fetured.css"

const Fetured = () => {
  return (
    <div className="feturedImg">          
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Fetured item"}
      ></SectionTitle>
      <div className="md:flex items-center text-white justify-center py-20 px-36 md:gap-10">
        <div>
          <img src={feturedImg} alt="" />
        </div>
        <div>
          <p>May 20,2024</p>
          <p className="uppercase text-xl">Whare can i get some</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            blanditiis quod odit fugit similique minus quam aperiam deleniti
            eligendi adipisci, autem doloribus voluptas. Ullam velit sint
            exercitationem ex nihil non obcaecati a consequatur similique nisi,
            nulla molestias id laboriosam fugiat!
          </p>
          <button className="btn btn-outline">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
