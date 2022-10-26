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
const faqs = Array(faqData.length);

function showFaq() {
  createFaq();
}

function createFaq() {
  for (let faq = 0; faq < faqs.length; faq++) {
    faqs[faq] = document.createElement("div");
    faqs[faq].setAttribute("class", "faq");
    accordianBody.append(faqs[faq]);

    const faqHeader = document.createElement("div");
    faqHeader.setAttribute("class", "faq_header");
    faqs[faq].append(faqHeader);

    const h3 = document.createElement("h3");
    h3.textContent = faqData[faq].question;
    faqHeader.append(h3);

    const p = document.createElement("p");
    p.setAttribute("class", "hidden");
    p.textContent = faqData[faq].answer;
    faqs[faq].append(p);

    const button = document.createElement("button");
    button.textContent = "+";
    button.setAttribute("class", "show_btn");
    faqHeader.append(button);

    button.addEventListener("click", () => {
      p.classList.toggle("hidden");
      if (p.classList != "hidden") {
        button.textContent = "-";
      } else {
        button.textContent = "+";
      }
    });
  }
}

function btnStatusUpdate() {}

showFaq();
