import { render, fireEvent  } from '@testing-library/react';

import BoxList from "./BoxList";


describe(" test BoxList renders correctly", function(){

  test("render BoxList", function(){
    render(<BoxList />)
  })
  test("BoxList snapshot test", function(){
    const {container} = render(<BoxList/>)
    expect(container).toMatchSnapshot();
  });
})

describe("entering box data into form", function(){
  test("adding a new box", function(){
    const {getByLabelText, queryByText, container, debug} = render(<BoxList/>);
    debug();
    expect(container.querySelector(".Box-box")).not.toBeInTheDocument();
    expect(container.querySelector(".Box-box")).toEqual(null);

    const heightInput = getByLabelText("height:");
    const widthInput = getByLabelText("width:");
    const backgroundColorInput = getByLabelText("background color:");
    const submitBtn = queryByText("Submit");

    fireEvent.change(heightInput, {target: {value: "200"}});
    fireEvent.change(widthInput, {target: {value: "200"}});
    fireEvent.change(backgroundColorInput, {target: {value: "green"}});
    fireEvent.click(submitBtn);

    const box = container.querySelector(".Box-box");
    expect(box).toBeInTheDocument();
  });
});

describe("tests validation of form", function(){
  test("check form data is numeric, won't render box with bad data",function(){

    const {getByLabelText, queryByText, container, debug} = render(<BoxList/>);

    const heightInput = getByLabelText("height:");
    const widthInput = getByLabelText("width:");
    const backgroundColorInput = getByLabelText("background color:");
    const submitBtn = queryByText("Submit");


    fireEvent.change(heightInput, {target: {value: "two hundred"}});
    fireEvent.change(widthInput, {target: {value: "one hundred"}});
    fireEvent.change(backgroundColorInput, {target: {value: "green"}});
    fireEvent.click(submitBtn);

    const box = container.querySelector(".Box-box");
    expect(box).not.toBeInTheDocument();
    expect(container.querySelector(".Box-error")).toBeInTheDocument();

  
  });
})