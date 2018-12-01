      function showMonde()
      {
        document.getElementById("monde-img").style.display = "block";
        document.getElementById("monde-button").classList.add("button-map-active");

        document.getElementById("france-button").classList.remove("button-map-active");
        document.getElementById("france-img").style.display = "none";
      }

      function showFrance()
      {
        document.getElementById("monde-img").style.display = "none";

        document.getElementById("france-button").classList.add("button-map-active");
        document.getElementById("monde-button").classList.remove("button-map-active");
        document.getElementById("france-img").style.display = "block";

      }