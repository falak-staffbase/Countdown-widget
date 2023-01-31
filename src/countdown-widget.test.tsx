import React from "react"
import {screen, render} from "@testing-library/react"

import {CountdownWidget} from "./countdown-widget";

describe("CountdownWidget", () => {
    it("should render the component", () => {


        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
