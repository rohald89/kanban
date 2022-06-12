import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { BoardProvider } from "@src/context";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <BoardProvider>
        <Component {...pageProps} />
      </BoardProvider>
    </ThemeProvider>
  );
}

export default MyApp;
