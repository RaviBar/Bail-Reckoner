import React, { useState } from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { Button, Modal, Box, Typography } from '@mui/material';

// Modal Styles
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const previewBoxStyle = {
  bgcolor: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '4px',
  p: 2,
  mt: 2,
  maxHeight: '300px',
  overflowY: 'auto',
};

const BailApplication = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const generateBailApplication = () => {
    const caseData = {
      caseNumber: '123/2024',
      petitionerName: 'XYZ',
      convictionSection: '379',
      sentence: '3 years',
      place: 'Bhopal',
      date: '06/09/2024',
      fatherName: 'ABC',
      address: '123 Main Street, Bhopal',
    };

    // Create a new Document instance
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "BAIL PETITION — PETITION FOR BAIL UNDER SECTION 389 OF CODE OF CRIMINAL PROCEDURE, 1973.",
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("IN THE COURT OF SESSIONS JUDGE……………………………"),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`Case No: ${caseData.caseNumber}`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("IN THE MATTER OF: Petition for bail of the accused — petitioner pending hearing of appeal."),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("State………………………………………………………. Petitioner"),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("versus"),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`${caseData.petitionerName}………………………………………………….. Respondent`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("Most Respectfully Showeth:"),
                new TextRun({
                  text: `That the petitioner was convicted under section ${caseData.convictionSection} IPC and sentenced to undergo ${caseData.sentence} rigorous imprisonment.`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("PRAYER"),
                new TextRun({
                  text: "It is therefore humbly prayed that this Hon'ble Court may be pleased to grant ad interim bail pending the hearing of the appeal.",
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`Petitioner: ${caseData.petitionerName}`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`Place: ${caseData.place}`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`Dated: ${caseData.date}`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("VERIFICATION"),
                new TextRun({
                  text: `I, ${caseData.petitionerName}, son of ${caseData.fatherName}, residing at ${caseData.address}, solemnly affirm and state as follows:`,
                }),
              ],
            }),
          ],
        },
      ],
    });

    // Create and save the document as a .docx file
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'Bail_Application.docx');
    });
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
      Bail Application Template
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            Bail Application Template
          </Typography>
          <Box sx={previewBoxStyle}>
            <Typography variant="body2" component="p">
              <strong>BAIL PETITION — PETITION FOR BAIL UNDER SECTION 389 OF CODE OF CRIMINAL PROCEDURE, 1973.</strong>
            </Typography>
            <Typography variant="body2" component="p">
              IN THE COURT OF SESSIONS JUDGE……………………………
            </Typography>
            <Typography variant="body2" component="p">
              Case No: 123/2024
            </Typography>
            <Typography variant="body2" component="p">
              IN THE MATTER OF: Petition for bail of the accused — petitioner pending hearing of appeal.
            </Typography>
            <Typography variant="body2" component="p">
              State………………………………………………………. Petitioner
            </Typography>
            <Typography variant="body2" component="p">
              versus
            </Typography>
            <Typography variant="body2" component="p">
              XYZ………………………………………………….. Respondent
            </Typography>
            <Typography variant="body2" component="p">
              Most Respectfully Showeth:
            </Typography>
            <Typography variant="body2" component="p">
              That the petitioner was convicted under section 379 IPC and sentenced to undergo 3 years rigorous imprisonment.
            </Typography>
            <Typography variant="body2" component="p">
              PRAYER
            </Typography>
            <Typography variant="body2" component="p">
              It is therefore humbly prayed that this Hon'ble Court may be pleased to grant ad interim bail pending the hearing of the appeal.
            </Typography>
            <Typography variant="body2" component="p">
              Petitioner: XYZ
            </Typography>
            <Typography variant="body2" component="p">
              Place: Bhopal
            </Typography>
            <Typography variant="body2" component="p">
              Dated: 06/09/2024
            </Typography>
            <Typography variant="body2" component="p">
              VERIFICATION
            </Typography>
            <Typography variant="body2" component="p">
              I, XYZ, son of ABC, residing at 123 Main Street, Bhopal, solemnly affirm and state as follows:
            </Typography>
          </Box>
          <Button variant="contained" color="primary" onClick={generateBailApplication} sx={{ mt: 2 }}>
            Download Bail Application
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BailApplication;
