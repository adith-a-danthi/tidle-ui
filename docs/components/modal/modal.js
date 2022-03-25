const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");

const openBtnDialog = document.getElementById("open-modal-dialog");
const closeBtnDialog = document.getElementById("close-modal-dialog");

const modal = document.getElementById("demo-modal");
const modalWindow = document.querySelector(".modal-window");

openBtn.addEventListener("click", () => {
  modalWindow.classList.add("is-active");
});
closeBtn.addEventListener("click", () => {
  modalWindow.classList.remove("is-active");
});

openBtnDialog.addEventListener("click", () => modal.showModal());
closeBtnDialog.addEventListener("click", () => modal.close());
