import React from 'react'
import {render} from "@testing-library/react";
import DeveloperTeam from "./DeveloperTeam";

test('check that the list of depvelopers renders propertly', async () => {
    const userList = ["Carlos Díez Fernández","Raúl Fernández España","Omar Teixeira González","David Leszek Warzynski Abril"]
    const {getByText} = render(<DeveloperTeam/>);
    expect(getByText(userList[0])).toBeInTheDocument();
    expect(getByText(userList[1])).toBeInTheDocument();
    expect(getByText(userList[2])).toBeInTheDocument();
    expect(getByText(userList[3])).toBeInTheDocument();
});