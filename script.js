(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();

  
  document.getElementById("toggleButton").addEventListener("click", function() {
    const mainButton = document.getElementById("mainButton");
  
    if (mainButton.disabled) {
      mainButton.disabled = false;
      this.textContent = "Заблокувати";
    } else {
      mainButton.disabled = true;
      this.textContent = "Розблокувати";
    }
  });

 

