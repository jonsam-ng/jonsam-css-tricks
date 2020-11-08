// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import RhythmLoading from "./RhythmLoading";
import { RhythmLoadingProps } from "./RhythmLoading.types";

describe("Test Component", () => {
  let props: RhythmLoadingProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<RhythmLoading {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("RhythmLoading");

    expect(component).toHaveTextContent("harvey was here");
  });
});
