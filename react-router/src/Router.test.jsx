import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Router } from "./components/Router";
import { getCurrenPath } from "./getCurrenPath";

vi.mock('./getCurrenPath.js', () => (
    {
        getCurrenPath: vi.fn()
    }
))

describe("Router", () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })
    it(`should work`, () => {
        render(<Router router= {[]}></Router>)
        expect(true).toBeTruthy()
    })

    it("should render 404 if no routes matched", () => {
        render(<Router router= {[]} defaultComponent={() => <h1>404</h1>}></Router> )
        expect(screen.getByText("404")).toBeTruthy()
    })

    it("shold render the component of the first root that matched", () => {

       getCurrenPath.mockResolvedValueOnce("/")

        const roots = [
            {
              path:  "/",
              component: () => <h1>Home</h1>
            },
            {
              path: "/about",
              component: () => <h1>About</h1> 
            },
          ]

        render(<Router router={roots} />)  
        expect(screen.getByText(`Home`)).toBeTruthy()
    })
})