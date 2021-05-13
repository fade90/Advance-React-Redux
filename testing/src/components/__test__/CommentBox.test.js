import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

// Test: El componente tiene un textarea y un boton?
it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    // simulate(event[, mock]) => self
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    // upadte Re-renderiza el componente
    wrapped.update();
  });

  // El usuario puede escribir en el textarea?
  it("has a text area that users can type in", () => {
    // prop(key) nos permite extraer el valor que se pasa dentro de cualquier
    // elemento dentro del componente.
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submited, text area gets emptied", () => {
    // busca el form, y simula el envio del formulario
    wrapped.find("form").simulate("submit");

    // actualiza el componente
    wrapped.update();

    // busca el text area y mira si esta vacio
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
