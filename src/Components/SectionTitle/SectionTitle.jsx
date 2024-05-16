

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="space-y-3 mb-5">
            <p className="text-yellow-600 text-xl text-center">---{subHeading}---</p>
            <h1 className=" text-2xl lg:text-4xl uppercase  border-y-4 py-3 w-full lg:w-4/12 mx-auto text-center">{heading}</h1>
        </div>
    );
};

export default SectionTitle;