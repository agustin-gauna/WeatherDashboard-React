import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div className="m-auto max-w-5xl">
      <main className=" m-auto mb-12 flex flex-col pt-8 pb-4 md:flex-row md:justify-between md:items-center">
        <SearchInput className="w-full" />
      </main>

      <footer className="mb-4  m-auto  ">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
