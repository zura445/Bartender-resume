import skillsList from "../data/skillsData.json";

function Skills() {
  return (
    <div>
      <h1 className="flex justify-center mt-10 text-2xl font-semibold">
        Skills
      </h1>
      {skillsList.map((skillsItem, index) => (
        <div className="grid grid-cols-2 gap-8 mt-4" key={index}>
          <p>{skillsItem.ability}</p>
          <p className="text-center">{skillsItem.quality}</p>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-8 mt-4"></div>
    </div>
  );
}

export default Skills;
