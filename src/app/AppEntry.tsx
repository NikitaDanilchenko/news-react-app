import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./AppStore";
import "@/shared/index.css"
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={AppRouter} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
