import education from "../data/educationData.json";

function Education() {
  return (
    <div>
      <h1 className="flex justify-center text-2xl font-semibold">Education</h1>
      {education.map((educationItem, index) => (
        <div key={index} className="grid grid-cols-2 mt-4">
          <p>{educationItem.date}</p>
          <div className="">
            <div>{educationItem.position}</div>
            <p>{educationItem.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
