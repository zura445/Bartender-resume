import EmploymentList from "../data/Employment.json";

function Employment() {
  return (
    <div>
      <div>
        <h1 className="flex justify-center text-2xl font-semibold">
          Employment
        </h1>
        <div>
          {EmploymentList.map((EmploymentItem, index) => (
            <div className="grid grid-cols-2 gap-8 mt-4" key={index}>
              <p>{EmploymentItem.date}</p>
              <div className="">
                <p>{EmploymentItem.position}</p>
                <p>{EmploymentItem.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employment;
