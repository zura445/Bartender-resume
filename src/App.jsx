import Education from "./components/Education";
import Skills from "./components/Skills";
import Employment from "./components/Employment";
import Contacts from "./components/Contacts";

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
              <div>
                <Education />
                <Skills />
              </div>
              <Employment />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/image/bar2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
