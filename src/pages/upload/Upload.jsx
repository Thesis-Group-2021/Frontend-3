import React, { useState } from "react";
import MainContainer from "../../components/shared/MainContainer";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import AttachmentIcon from "@material-ui/icons/Attachment";
//import { Label, Room } from "@material-ui/icons";

import "react-datepicker/dist/react-datepicker.css";

function Upload() {
  const [startDate, setStartDate] = useState(new Date());
  const [attachmentFile, setAttachmentFile] = useState("");
  const [openTagInput, setOpenTagInput] = useState(false);

  return (
    <MainContainer>
      <h3>Upload</h3>
      <div className="mt-4">
        <Row>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            rows="10"
            placeholder="Description..."
          />
        </Row>
        <Row className="mt-4">
          <div className="shareOption">
            <label
              htmlFor="attachment"
              style={{
                cursor: "pointer",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AttachmentIcon
                htmlColor="tomato"
                className="shareIcon"
                style={{ fontSize: "40px" }}
              />
              File
            </label>
            <input
              type="file"
              name="photo"
              id="attachment"
              onChange={(e) => setAttachmentFile(e.target.files[0].name)}
            />
          </div>
        </Row>

        <Row className="mt-4" xs="1" md="3">
          <Col className="mb-2">
            <FormGroup>
              <Label htmlFor="exampleEmail">Title</Label>
              <Input type="email" name="email" id="exampleEmail1" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Department</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Computer science</option>
                <option>Electrical and computer Engineering</option>
                <option>Software engineering</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Institute</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Addis Ababba Univerisity</option>
                <option>Hawassa Univerisity</option>
                <option>BahirDar Univerisity</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mt-4" xs="1" md="3">
          <Col className="mb-2">
            <FormGroup>
              <Label htmlFor="exampleEmail">Academic Level</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Bachelor</option>
                <option>Masters</option>
                <option>PhD</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Year</Label>
              <Input type="number" maxLength={4} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Date</Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>

        <div className="mt-5 d-flex justify-content-end">
          <Button variant="contained">Submit</Button>
        </div>
      </div>
    </MainContainer>
  );
}

export default Upload;
