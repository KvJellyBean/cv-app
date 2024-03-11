import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { useState } from "react";
import formData from "./components/data/form";

function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(formData);

  const eventHandler = {
    changePage: (pageTitle) => {
      if (pageTitle === "Edit CV") {
        setPage(0);
      } else {
        setPage(1);
      }
    },
    showSample: () => {
      alert("Sample Copied");
    },
    changeData: (value) => {
      setData(value);
    },
  };

  return (
    <>
      <Header events={eventHandler}></Header>
      <MainPage page={page} datas={data} events={eventHandler}></MainPage>
      <Footer></Footer>
    </>
  );
}

export default App;
