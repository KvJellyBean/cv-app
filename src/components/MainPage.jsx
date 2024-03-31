import PropTypes from "prop-types";
import Form from "./cvEditor/Form";
import CVPage from "./cvPreviewer/CVPage";
import Button from "./Button";
import "../styles/MainPage.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

function MainPage({ page, datas, events }) {
  const pdfRef = useRef();
  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("CV.pdf");
    });
  };
  return (
    <main>
      {page === 0 ? (
        Object.values(datas).map((data) => {
          return (
            <Form
              key={data.dataKey}
              data={data}
              datas={datas}
              events={events}
            ></Form>
          );
        })
      ) : (
        <>
          <Button
            title="Download as PDF"
            className="fillButton"
            onPress={downloadPdf}
          ></Button>
          <CVPage datas={datas} inputRef={pdfRef}></CVPage>
        </>
      )}
    </main>
  );
}

MainPage.propTypes = {
  page: PropTypes.number.isRequired,
  datas: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
};

export default MainPage;
