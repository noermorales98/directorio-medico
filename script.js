// MOSTRAR INFORMACIÓN DE LOS DOCTORES
const containerCards = document.querySelector(".container-cards");
doctoresInfo.forEach((doctor) => {
  const card = `
    <div class="card">
    <div class="doctor-info">
      <h4>${doctor.nombre}</h4>
      <p>${doctor.especialidad}</p>
    </div>
    <button onclick="openPopup(${doctor.id})" class="btn btn-primary" type="button" name="button">
      <span>Más Información</span>
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  </div>
  
  <div class="container-popup" id="${doctor.id}" style="display:none;">
    <div class="card-popup">
        <div class="card-popup-content">
            <div class="close">
                <h3>Información del doctor</h3>
                <i onclick="closePopup(${doctor.id})" class="fa-solid fa-times"></i>
            </div>
            <div class="doctor-info">
                <h4>${doctor.nombre}</h4>
                <p>${doctor.especialidad}</p>
            </div>
            <div class="contacto">
                <a href="tel:${doctor.telefono}" target="_blank">
                    <div class="header">
                        <i class="fa-solid fa-phone"></i>
                        <span class="title">Teléfono</span>
                        <span class="info">${doctor.telefono}</span>
                    </div>
                    <span class="action">
                        Llamar
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </a>
            </div>
        </div>
    </div>
  </div>
  
  `;

  containerCards.innerHTML += card;
});

// ABRIR POPUP
function openPopup(id) {
  const popup = document.getElementById(id);
  popup.style.zIndex = "9999999";
  popup.style.display = "flex";
  try {
    const header = document.getElementsByTagName("header")[0];
    header.style.zIndex = "2";
    header.style.opacity = "0.1";
    const moreInformation = document.querySelector(".et_pb_row_4");
    moreInformation.style.zIndex = "1";
    const translator = document.getElementById("trp-floater-ls");
    translator.style.zIndex = "1";
    translator.style.opacity = "0.1";
    translator.style.display = "none";
    const mensajeIcon = document.querySelector(".popupform-section");
    mensajeIcon.style.zIndex = "1";
    mensajeIcon.style.opacity = "0.1";
    const whatsappIcon = document.querySelector(".whatsapp-section");
    whatsappIcon.style.zIndex = "1";
    whatsappIcon.style.opacity = "0.1";
  } catch (error) {
    console.log(error);
  }
}

// CERRAR POPUP
function closePopup(id) {
  const popup = document.getElementById(id);
  popup.style.display = "none";
  try {
    const header = document.getElementsByTagName("header")[0];
    header.style.zIndex = "9999999";
    header.style.opacity = "1";
    const translator = document.getElementById("trp-floater-ls");
    translator.style.zIndex = "9999999";
    translator.style.opacity = "1";
    translator.style.display = "block";
    const mensajeIcon = document.querySelector(".popupform-section");
    mensajeIcon.style.zIndex = "9999999";
    mensajeIcon.style.opacity = "1";
    const whatsappIcon = document.querySelector(".whatsapp-section");
    whatsappIcon.style.zIndex = "9999999";
    whatsappIcon.style.opacity = "1";
    const moreInformation = document.querySelector(".et_pb_row_4");
    moreInformation.style.zIndex = "5";
  } catch (error) {
    console.log(error);
  }
}
