if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      // 路径问题要注意
      .register("/dist/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
import "./demo/avatar.ts";
import "./demo/babel.ts";
import "./demo/tree_shaking.ts";
