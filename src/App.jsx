import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/image/bar1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center text-white px-4 py-10">
          <h1 className="text-4xl font-bold mt-10">Zura Tetrashvili</h1>
          <p className="mt-4 font-bold text-xl">Bartender</p>
          <div className="mt-10 w-full max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-black p-10 opacity-90 rounded-lg">
              {/* Education და Skills */}
              <div>
                <Education />

                <Skills />
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
                  <p>Sep 2024 - Present</p>
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
        <div className="relative flex flex-col justify-center items-center text-white px-4 ">
          <div className="py-10 bg-black opacity-90 flex flex-col items-center px-10 mt-10 rounded-md">
            <h1 className="text-4xl font-bold mt-4">Contact details</h1>
            <p className="text-lg mt-4 underline underline-offset-4">
              Email address
            </p>
            <a href="mailto:zuratetra@gmail.com?subject=The%20subject%20of%20the%20mail mt-4">
              zuratetra@gmail.com
            </a>

            <p className="text-lg mt-4 underline underline-offset-4">
              Phone number
            </p>
            <a className="cursor-pointer mt-4" href="tel: +995597000540">
              597 000 540
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
