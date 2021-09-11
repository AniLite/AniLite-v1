import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pagination } from "@material-ui/lab";
import Footer from "../Components/Footer";
import { ReactComponent as Loader } from "../Media/Loader.svg";
import { useLocation } from "react-router";

function LatestAnimePage() {
  const movieParam = useLocation();
  const animeList = useSelector((state) => state.animeList);
  const { animes, error, loading } = animeList;
  const data = [...animes];
  const movies = data.filter((value) => {
    return value.type.includes("Anime (MOVIE)");
  });
  const itemsPerPage = 15;
  const [page, setPage] = React.useState(1);

  const [noOfPages] = React.useState(
    movieParam.pathname === "/latest-anime"
      ? Math.ceil(data.length / itemsPerPage)
      : Math.ceil(movies.length / itemsPerPage)
  );
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return loading === true ? (
    <div className="w-full h-full absolute ">
      <Loader
        style={{ maxWidth: "10%" }}
        className="top-1/2 left-1/2 relative transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  ) : error ? (
    <h1>Error: {error}</h1>
  ) : (
    <>
      <div className="grid grid-cols-12 gap-2 relative top-20 mb-60 w-full">
        <div className="col-span-2" />
        <div className="col-span-6">
          <p className="text-purple-500 font-quicksand text-5xl font-medium ">
            Latest Anime
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-white relative top-1/2 font-quicksand text-sm font-medium text-right">
            Showing {(page - 1) * itemsPerPage + 1}-{page * itemsPerPage} /{" "}
            {movieParam.pathname === "/latest-anime"
              ? data.length
              : movies.length}{" "}
            animes
          </p>
        </div>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <div className="col-span-8">
          <div className="grid grid-cols-5 gap-1 relative w-full">
            {movieParam.pathname === "/latest-anime"
              ? data
                  .sort((a, b) => (a.started < b.started ? 1 : -1))
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((item, id) => (
                    <div key={id} className="my-3">
                      <div className="mx-3 h-full col-span-1" key={id}>
                        <Link to={`/anime-about/${item.slug}`}>
                          <img
                            id="listitems"
                            className="rounded-md w-full"
                            style={{ height: "220px" }}
                            src={item.poster_image}
                            alt=""
                          />
                        </Link>
                        <p className="text-white text-center font-quicksand">
                          {item.name_en}
                        </p>
                        <hr className="text-white mx-5" />
                        <p className="text-white text-center font-quicksand">
                          {item.is_completed ? "Completed" : "Ongoing"}
                        </p>
                      </div>
                      <div className=""></div>
                    </div>
                  ))
              : movies
                  .sort((a, b) => (a.started < b.started ? 1 : -1))
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((item, id) => (
                    <div key={id} className="my-3">
                      <div className="mx-3 h-full col-span-1" key={id}>
                        <Link to={`/anime-about/${item.slug}`}>
                          <img
                            id="listitems"
                            className="rounded-md w-full"
                            style={{ height: "220px" }}
                            src={item.poster_image}
                            alt=""
                          />
                        </Link>
                        <p className="text-white text-center font-quicksand">
                          {item.name_en}
                        </p>
                        <hr className="text-white mx-5" />
                        <p className="text-white text-center font-quicksand">
                          {item.is_completed ? "Completed" : "Ongoing"}
                        </p>
                      </div>
                      <div className=""></div>
                    </div>
                  ))}
          </div>
          <Pagination
            id="pagination"
            count={noOfPages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            variant="outlined"
            color="primary"
            size="large"
            showFirstButton
            showLastButton
            className="flex items-center justify-center"
          />
        </div>
        <div className="col-span-2" />
      </div>
      <Footer />
    </>
  );
}

export default LatestAnimePage;
