// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import MagicLoading from "./MagicLoading";
import { MagicLoadingProps } from "./MagicLoading.types";

describe("Test Component", () => {
  let props: MagicLoadingProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<MagicLoading {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("MagicLoading");

    expect(component).toHaveTextContent("harvey was here");
  });
});
