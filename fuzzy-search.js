(() => {
  console.log(
    "PoE Fuzzy Search  |  Wiki: https://github.com/nv7z2/PoE-Fuzzy-Search-Wiki"
  );

  document.addEventListener("keyup", (e) => {
    const el = e.target;
    const parentElem = el.parentElement?.parentElement;

    if (
      !parentElem ||
      !parentElem.classList.contains("filter-select") ||
      !parentElem.classList.contains("filter-select-mutate")
    )
      return;

    if (el.type !== "text") return;
    if (el.value.startsWith("~")) return;

    console.log(el.value);

    el.value = "~" + el.value;
  });
})();
