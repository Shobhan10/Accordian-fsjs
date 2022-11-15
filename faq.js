const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

// const faqs = [...faqData];

// better approach
const faqs = new Array(faqData.length);

function createFaq() {
  for (let faq = 0; faq < faqs.length; faq++) {
    faqs[faq] = document.createElement("div");
    faqs[faq].setAttribute("class", "faq");

    const faqHeader = document.createElement("div");
    faqHeader.setAttribute("class", "faq_header");

    const h3 = document.createElement("h3");

    const p = document.createElement("p");
    p.setAttribute("class", "hidden");

    const button = document.createElement("button");
    button.setAttribute("class", "show_btn");

    showFaq(faq, faqHeader, h3, p, button);
  }
}

function showFaq(faq, faqHeader, h3, p, button) {
  accordianBody.append(faqs[faq]);

  faqs[faq].append(faqHeader);

  h3.textContent = faqData[faq].question;
  faqHeader.append(h3);

  p.textContent = faqData[faq].answer;
  faqs[faq].append(p);

  button.textContent = "+";
  faqHeader.append(button);

  button.addEventListener("click", () => {
    btnStatusUpdate(button, p);
  });
}

function btnStatusUpdate(button, p) {
  p.classList.toggle("hidden");
  if (p.classList != "hidden") {
    button.textContent = "-";
  } else {
    button.textContent = "+";
  }
}

createFaq();
