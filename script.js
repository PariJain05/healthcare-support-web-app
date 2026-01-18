document.getElementById("supportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let issue = document.getElementById("issue").value;
  let desc = document.querySelector("textarea").value.toLowerCase();
  let response = "";

  if (issue === "Emergency") {
    response = "⚠️ Please contact the nearest hospital immediately.";
  } else if (issue === "Mental Health") {
    response = "💙 A mental health volunteer will reach out to you soon.";
  } else {
    response =
      "✅ Your request has been recorded. Our healthcare team will assist you.";
  }

  if (
    desc.includes("fever") ||
    desc.includes("cold") ||
    desc.includes("pain")
  ) {
    response += " Based on symptoms, this case is marked for priority review.";
  }

  document.getElementById("response").innerText = response;
});
