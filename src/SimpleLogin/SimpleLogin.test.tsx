// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SimpleLogin from "./SimpleLogin";
import { SimpleLoginProps } from "./SimpleLogin.types";

describe("Test Component", () => {
  let props: SimpleLoginProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SimpleLogin {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SimpleLogin");

    expect(component).toHaveTextContent("harvey was here");
  });
});
