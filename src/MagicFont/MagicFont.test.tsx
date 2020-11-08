// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import MagicFont from "./MagicFont";
import { MagicFontProps } from "./MagicFont.types";

describe("Test Component", () => {
  let props: MagicFontProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<MagicFont {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("MagicFont");

    expect(component).toHaveTextContent("harvey was here");
  });
});
