import { j as e, r as n } from "./index-be53bf13.js";
function c({ movie: a, onClose: s, sendDataToParent: t }) {
  const l = () => {
    const d = { message: "Child data", movieId: a.id };
    t(d);
  };
  return e.jsxs("div", {
    className: "modal",
    onClick: s,
    children: [
      e.jsx("button", { onClick: onclose, children: " X " }),
      e.jsxs("h3", { children: [" ", a.title] }),
      e.jsxs("p", {
        className: "p-details",
        children: ["RATING: ", a.vote_average],
      }),
      e.jsxs("p", {
        className: "p-details",
        children: ["RELEASE DATE: ", a.release_date],
      }),
      n.createPortal(
        e.jsxs("p", {
          className: "card--desc",
          children: [a.overview ? a.overview : "No description available", ","],
        }),
        document.getElementById("modal"),
      ),
      e.jsx("button", { onClick: l, children: "Send Data to Parent" }),
    ],
  });
}
export { c as default };
