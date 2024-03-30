import { render } from "preact";
import { App } from "./app.tsx";
import { registerSW } from "virtual:pwa-register";

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available... Reload?")) {
      updateSW(true);
    }
  },
});

render(<App />, document.getElementById("app")!);
