import ProductPage from "@/pages/about";
import { describe } from "node:test";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => {
  return {
    useRouter: () => {
      return {
        router: "/",
        query: "",
        pathname: "",
        asPath: "",
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null),
        isReady: true,
      };
    },
  };
});

describe("Product Page", () => {
  it("render product page", () => {
    const page = render(<ProductPage />);
    expect(page).toMatchSnapshot();
  });
});
