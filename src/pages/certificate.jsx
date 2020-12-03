import React from 'react';
import { PDFDocument,rgb,StandardFonts } from 'pdf-lib';
import certificateImage from '../assets/bg.jpg';
// import Form from './form'

async function createPdf() {
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 30;
    page.drawText('Creating PDFs in JavaScript is awesome!', {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    })
  
    const pdfBytes = await pdfDoc.save();
    // download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
  }
const Certificate=(props)=>{
    return(
        <div>
            <h1>Certificate</h1>
            <button onClick={createPdf}>Create certificate</button>
        </div>
    );
}

export default Certificate;