// neat-css — inject classless styles via <script> tag
(function () {
  if (typeof document === "undefined") return;
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    document.currentScript && document.currentScript.src
      ? document.currentScript.src.replace(/index\.js$/, "neat.min.css")
      : "https://unpkg.com/neat-css/neat.min.css";
  document.head.appendChild(link);
})();
