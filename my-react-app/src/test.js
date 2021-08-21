import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Home from "./components/Home";

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a nameShop", () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toBe("В ??? вы можете подобрать комплектующие для своего автомобиля!");

  act(() => {
    render(<Hello nameShop="MasterCarShop" />, container);
  });
  expect(container.textContent).toBe("В MasterCarShop вы можете подобрать комплектующие для своего автомобиля!");

  act(() => {
    render(<Hello nameShop="MasterCarInternetShop" />, container);
  });
  expect(container.textContent).toBe("В MasterCarInternetShop вы можете подобрать комплектующие для своего автомобиля!");
});