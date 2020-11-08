// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import MagicShare from "./MagicShare";
import { MagicShareProps } from "./MagicShare.types";

describe("Test Component", () => {
  let props: MagicShareProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<MagicShare {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("MagicShare");

    expect(component).toHaveTextContent("harvey was here");
  });
});
