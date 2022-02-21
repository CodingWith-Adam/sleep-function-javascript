const spinner = document.getElementById("spinner");
const doneText = document.getElementById("doneText");

async function loadData() {
  spinner.style.display = "block";
  await sleep(2);
  spinner.style.display = "none";
  doneText.style.display = "block";
}

async function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

loadData();
