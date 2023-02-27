window.addEventListener("DOMContentLoaded", () => {
  const install_app_overlay = document.querySelector(".overlay");
  const install_app_container = document.querySelectorAll(
    ".install-app-btn-container"
  );
  const install_app = document.querySelectorAll(
    ".install-app-btn-container > p"
  );

  let defferred_prompt, device_index;

  var mobile = /iphone|ipad|ipod|android/i.test(
    navigator.userAgent.toLowerCase()
  );
  var device_inf = navigator.userAgent.toLowerCase();

  console.log(`${mobile}\n${device_inf}`);
  if (mobile) {
    console.log(device_inf);
    if (device_inf.indexOf("android") > -1) {
      device_index = 0;
      console.log("Android");
      if (isRunningStandalone()) {
        console.log("Standalone");
      } else {
        install_app_overlay.classList.add("visible");
        install_app_container[0].classList.add("visible");
        console.log("Not Standalone");
      }
    } else if (
      device_inf.indexOf("iphone") > -1 ||
      device_inf.indexOf("ipad") > -1 ||
      device_inf.indexOf("ipod") > -1
    ) {
      device_index = 1;
      console.log("iOS");
      if (isRunningStandalone()) {
        console.log("Standalone");
      } else {
        install_app_overlay.classList.add("visible");
        install_app_container[1].classList.add("visible");
        install_app[1].classList.add("hide");
        console.log("Not Standalone");
      }
    } else {
      console.log("Other OS");
      console.log("Not Compatible");
    }
  } else {
    device_index = 2;
    console.log("Desktop");
    if (isRunningStandalone()) {
      console.log("Standalone");
    } else {
      install_app_overlay.classList.add("visible");
      install_app_container[2].classList.add("visible");
      console.log("Not Standalone");
    }
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    beforeInstallPrompt(e, device_index);
  });

  function beforeInstallPrompt(e, index) {
    e.preventDefault();

    defferred_prompt = e;
    install_app_container[index].style.display = "block";

    install_app[index].addEventListener("click", () => {
      installApp();
    });
  }

  function installApp() {
    defferred_prompt.prompt();
    defferred_prompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      defferred_prompt = null;
    });
  }

  function isRunningStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches;
  }
});

export default {
  name: "AppInstaller",
  props: {
    msg: String,
  },
};
