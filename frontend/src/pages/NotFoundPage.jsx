import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
      style={{ backgroundImage: `url('/404.png')` }}
    >
      <header className="absolute top-0 l0 p-4 bg-black w-full">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="netflix" className="h-8" />
        </Link>
      </header>
      <main className="text-center error-page--content z-10">
        <h1 className="text-7xl font-semibold mb-4">Lost your way?</h1>
        <p className="mb-6 text-xl max-w-lg">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <Link to={"/"} className="bg-white text-black py-2 px-4 rounded">
          Netflix Home
        </Link>
      </main>
    </div>
  );
};

export default NotFoundPage;
