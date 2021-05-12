import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a commment box", () => {
  //crea un div imaginario en JSDOM
  const div = document.createElement("div");

  //Mete App adentro del div imaginario
  ReactDOM.render(<App />, div);

  // Mira dentro del div, y checkea que CommentBox este ahi dentro.
  expect(div.innerHTML).toContain("Comment Box");

  //Realiza limpieza una vez terminado el test
  ReactDOM.unmountComponentAtNode(div);
});
