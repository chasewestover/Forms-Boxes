import { render, fireEvent  } from '@testing-library/react';

import Box from "./Box";


describe(" test Box renders correctly", function(){

  test("render box", function(){
    render(<Box height="200px"
                width="200px"
                backgroundColor="geen"/>)
  })
  test("box snapshot test", function(){
    const {container} = render(<Box height="200px"
                                    width="200px"
                                    backgroundColor="green"/>)
    expect(container).toMatchSnapshot();
  });
})