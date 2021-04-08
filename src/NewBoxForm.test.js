import { render, fireEvent  } from '@testing-library/react';

import NewBoxForm from "./NewBoxForm";




describe(" test NewBoxForm renders correctly", function(){

  test("render NewBoxForm", function(){
    render(<NewBoxForm />)
  })
  test("NewBoxForm snapshot test", function(){
    const {container} = render(<NewBoxForm/>)
    expect(container).toMatchSnapshot();
  });
})