import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const ScrollableText = (props) => {
  return (
    <div className="content" style={{ width: "600px" }}>
      <div className="container" id="panel1">
        <div style={{ backgroundColor: "White", width: "100%" }}>
          <Card className="mb-2 border-0">
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                Kula Outreach
              </Card.Title>
              <Card.Text
                style={{
                  fontWeight: "600",
                  fontSize: "4.5rem",
                }}
              >
                Automated Candidate Follow-up
              </Card.Text>

              <Card.Text
                style={{
                  fontSize: "1.5rem",
                  marginTop: "40px",
                }}
              >
                For prospective candidates, send automated, periodic follow-ups
                and value-adds to nurture long-term relationships
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container" id="panel1">
        <div style={{ backgroundColor: "White", width: "100%" }}>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                Kula Outreach
              </Card.Title>
              <Card.Text
                style={{
                  fontWeight: "600",
                  fontSize: "4.5rem",
                }}
              >
                Automated Candidate Follow-up
              </Card.Text>

              <Card.Text
                style={{
                  fontSize: "1.5rem",
                  marginTop: "40px",
                }}
              >
                For prospective candidates, send automated, periodic follow-ups
                and value-adds to nurture long-term relationships
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

ScrollableText.propTypes = {};

export default ScrollableText;
