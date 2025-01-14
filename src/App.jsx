function App() {
  return (
    <div>
      {/* მთავარი სექცია ფონის სურათით */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/image/bar1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center text-white px-4 py-10">
          <h1 className="text-4xl font-bold mt-10">Zura Tetrashvili</h1>
          <p className="mt-4 font-bold text-xl">Bartender</p>
          <div className="mt-10 w-full max-w-screen-xl">
            {/* ინფორმაცია განათლებისა და გამოცდილების შესახებ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Education და Skills */}
              <div>
                <h1 className="flex justify-center text-2xl font-semibold">
                  Education
                </h1>
                <div className="grid grid-cols-2 gap-8 mt-4">
                  <p>Mar 2013 - Nov 2013</p>
                  <div>
                    <div className="">Bartender</div>
                    <p>College "ICARUS", Tbilisi</p>
                  </div>
                  <p>Mar 2014 - Nov 2014</p>
                  <div>
                    <div className="">Sommelier</div>
                    <p>College "ICARUS", Tbilisi</p>
                  </div>
                  <p>Mar 2015 - Nov 2015</p>
                  <div>
                    <div className="">Restaurant Management</div>
                    <p>College "ICARUS", Tbilisi</p>
                  </div>
                </div>
                <h1 className="flex justify-center mt-6 text-2xl font-semibold">
                  Skills
                </h1>
                <div className="grid grid-cols-2 gap-8 mt-4 max-w-[600px]">
                  <p>Beverage Preparation</p>
                  <p>Excellent</p>
                  <p>Customer Relations</p>
                  <p>Excellent</p>
                  <p>Adherence to Hygiene Standards</p>
                  <p>Excellent</p>
                  <p>Fast Work</p>
                  <p>Excellent</p>
                  <p>Cash Handling</p>
                  <p>Excellent</p>
                  <p>Inventory Management</p>
                  <p>Excellent</p>
                  <p>Conflict Resolution</p>
                  <p>Excellent</p>
                  <p>Teamwork</p>
                  <p>Excellent</p>
                </div>
              </div>
              {/* Employment */}
              <div>
                <h1 className="flex justify-center text-2xl font-semibold">
                  Employment
                </h1>
                <div className="grid grid-cols-2 gap-8 mt-4">
                  <p>Apr 2014 - Jun 2015</p>
                  <div>
                    <div className="">Bartender</div>
                    <p>Adjarabet, Tbilisi</p>
                  </div>
                  <p>Jun 2015 - Nov 2016</p>
                  <div>
                    <div className="">Bartender, Sommelier</div>
                    <p>Konka, Tbilisi</p>
                  </div>
                  <p>Nov 2016 - Sep 2017</p>
                  <div>
                    <div className="">Bartender</div>
                    <p>Bar SINATRA, Tbilisi</p>
                  </div>
                  <p>Sep 2017 - Jul 2018</p>
                  <div>
                    <div className="">Bartender</div>
                    <p>Hard Rock Cafe Tbilisi, Tbilisi</p>
                  </div>
                  <p>Jul 2018 - May 2019</p>
                  <div>
                    <div className="">Sommelier</div>
                    <p>Strada, Tbilisi</p>
                  </div>
                  <p>Jan 2018 - Nov 2019</p>
                  <div>
                    <div className="">Teacher "Restaurant Manager"</div>
                    <p>College "Ikaros", Tbilisi</p>
                  </div>
                  <p>Jun 2019 - Aug 2019</p>
                  <div>
                    <div className="">Bar manager</div>
                    <p>Dreamland Oasis Hotel, Chakvi</p>
                  </div>
                  <p>May 2024 - Aug 2024</p>
                  <div>
                    <div className="">Bartender</div>
                    <p>Saint-Tropez, Tbilisi</p>
                  </div>
                  <p>Sep 2024 - Current</p>
                  <div>
                    <div className="">Bartender</div>
                    <p>Samkervalo bar, Tbilisi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* მეორე სექცია */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/image/bar2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center text-white px-4 py-10">
          <h1 className="text-4xl font-bold mt-6">Personal details</h1>
          <p className="text-lg mt-4 underline underline-offset-4">
            Email address
          </p>
          <p>zuratetra@gmail.com</p>
          <p className="text-lg mt-4 underline underline-offset-4">
            Phone number
          </p>
          <p>+995597000540</p>
          <p className="text-lg mt-4 underline underline-offset-4">Address</p>
          <p>Vladimer lobjanidze street, 0113 Tbilisi</p>
        </div>
      </div>
    </div>
  );
}

export default App;
