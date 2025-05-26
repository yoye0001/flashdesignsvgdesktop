document.addEventListener("DOMContentLoaded", runProgram);

async function runProgram() {
  let selectedIndex = 0; // Husk hvilken der er valgt

  let rawSvg = await fetch("https://schacktales.dk/ice/wp-content/uploads/2025/05/flashdesign1.svg");
  let svg = await rawSvg.text();

  document.querySelector("#flashdesign").innerHTML = svg;
  const baggrund = document.getElementById("baggrund");
  const flash1 = document.getElementById("flash1");
  const flash2 = document.getElementById("flash2");
  const flash3 = document.getElementById("flash3");
  const flash4 = document.getElementById("flash4");
  const flash5 = document.getElementById("flash5");
  const flash6 = document.getElementById("flash6");

  const knap1 = document.getElementById("knap1");
  const knap2 = document.getElementById("knap2");
  const knap3 = document.getElementById("knap3");
  const knap4 = document.getElementById("knap4");
  const knap5 = document.getElementById("knap5");
  const knap6 = document.getElementById("knap6");

  const tekst1 = document.getElementById("tekst1");
  const tekst2 = document.getElementById("tekst2");
  const tekst3 = document.getElementById("tekst3");
  const tekst4 = document.getElementById("tekst4");
  const tekst5 = document.getElementById("tekst5");
  const tekst6 = document.getElementById("tekst6");

  const flashes = [baggrund, flash1, flash2, flash3, flash4, flash5, flash6];
  const tekster = [tekst1, tekst2, tekst3, tekst4, tekst5, tekst6];
  const knapper = [knap1, knap2, knap3, knap4, knap5, knap6];

  // Vis flash1 og sæt første knap som valgt
  // Funktion til at vise det ønskede flash-lag (baggrund skjules altid)
  function visFlash(index) {
    flashes.forEach((flash, i) => {
      if (flash) {
        if (i === 0) {
          // Baggrund skal ALTID skjules
          flash.style.display = "none";
        } else {
          flash.style.display = i === index + 1 ? "block" : "none";
        }
      }
    });

    selectedIndex = index;

    knapper.forEach((knap, i) => {
      if (knap) {
        if (i === index) {
          knap.classList.add("hover-knap");
        } else {
          knap.classList.remove("hover-knap");
        }
      }
    });
  }

  visFlash(0); // Vis flash1 (baggrund forbliver skjult)

  // Tilføj klik-events
  knapper.forEach((knap, i) => {
    if (knap) {
      knap.addEventListener("click", () => visFlash(i));
    }
  });

  tekster.forEach((tekst, i) => {
    if (tekst) {
      tekst.addEventListener("click", () => visFlash(i));
    }
  });

  // Hover-effekt på tekst
  tekster.forEach((tekst, i) => {
    const knap = knapper[i];
    if (tekst && knap) {
      let hoverTimeout;

      tekst.addEventListener("mouseenter", () => {
        hoverTimeout = setTimeout(() => {
          if (selectedIndex !== i) {
            knap.classList.add("hover-knap");
          }
        }, 0);
      });

      tekst.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimeout);
        if (selectedIndex !== i) {
          knap.classList.remove("hover-knap");
        }
      });
    }
  });
}
