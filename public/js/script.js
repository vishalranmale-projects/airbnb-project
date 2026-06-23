// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


setTimeout(() => {
    document.getElementById("flash").classList.add("hide");
  }, 3000);

  // optional: fully remove after fade
  setTimeout(() => {
    document.getElementById("flash").style.display = "none";
  }, 1500);

