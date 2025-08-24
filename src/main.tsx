import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/index.tsx";
import { ThemeProvider } from "./providers/theme.provider.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "@/components/ui/sonner";
import JoyrideWrapper from "./components/JoyrideWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JoyrideWrapper>
      <ReduxProvider store={store}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
          <Toaster richColors />
        </ThemeProvider>
      </ReduxProvider>
    </JoyrideWrapper>
  </StrictMode>
);
