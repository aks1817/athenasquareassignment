import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import getText from "../actions/text";

const ScrollableText = ({ getText, texts }) => {
  useEffect(() => {
    getText();
  }, [getText]);
  return (
    <div className="content" style={{ width: "600px" }}>
      {texts.map((text) => (
        <div className="container" id="panel1">
          <div style={{ backgroundColor: "White", width: "100%" }}>
            <Card className="mb-2 border-0">
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem" }}>
                  {text.heading}
                </Card.Title>
                <Card.Text
                  style={{
                    fontWeight: "600",
                    fontSize: "4.5rem",
                  }}
                >
                  {text.subHeading}
                </Card.Text>

                <Card.Text
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "40px",
                  }}
                >
                  {text.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

ScrollableText.propTypes = {
  getText: PropTypes.func.isRequired,
  texts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  texts: state.text,
});
export default connect(mapStateToProps, { getText })(ScrollableText);
