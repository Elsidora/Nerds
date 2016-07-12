// .popup-show
      var link = document.querySelector(".page-form");    
      var modal = document.querySelector(".popup-show");
      var close = document.querySelector(".popup-show-close");
      var overlay = document.querySelector(".popup-show-overlay");
      var form = modal.querySelector("form");
      var family = modal.querySelector("[name=family]");
      var adress = modal.querySelector("[name=adress]");
      var sms = modal.querySelector("[name=sms]");
      var storageFamily = localStorage.getItem("family");
      var storageAdress = localStorage.getItem("adress");
      var storageSms = localStorage.getItem("sms");
        
      link.addEventListener("click", function(event){
          event.preventDefault();
          modal.classList.add("popup-show-open");
          overlay.classList.add("popup-show-overlay-open");
          if (storageFamily && storageAdress) {
              family.value = storageFamily;
              adress.value = storageAdress;
              sms.focus();
          } else {
              family.focus();
          }
      });
          
          
       

      close.addEventListener("click", function(event) {
          event.preventDefault();
          modal.classList.remove("popup-show-open");
          overlay.classList.remove("popup-show-overlay-open");
          modal.classList.remove("popup-show-error");
          
      }); 

      window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (modal.classList.contains("popup-show-open")) {
            modal.classList.remove("popup-show-open");
            overlay.classList.remove("popup-show-overlay-open");
        }
        }
      });

      form.addEventListener("submit", function(event) {
          if (!family.value || !adress.value || !sms.value) {
          event.preventDefault();
          modal.classList.add("popup-show-error");
          } else {
          localStorage.setItem("family", family.value);
          localStorage.setItem("adress", adress.value);
        }
      });

//.popup-show-map
      var mapLink = document.querySelector(".open-map");
      var mapModal = document.querySelector(".popup-show-map");
      var mapClose = document.querySelector(".popup-show-map-close");
      var mapOverlay = document.querySelector(".popup-show-overlay");
        
      mapLink.addEventListener("click", function (event) {
          event.preventDefault();
          mapModal.classList.add("popup-show-map-open");
          mapOverlay.classList.add("popup-show-overlay-open");
      });
      mapClose.addEventListener("click", function(event) {
          event.preventDefault();
          mapModal.classList.remove("popup-show-map-open");
          mapOverlay.classList.remove("popup-show-overlay-open");
      });
      window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapModal.classList.contains("popup-show-map-open")) {
            mapModal.classList.remove("popup-show-map-open");
            mapOverlay.classList.remove("popup-show-overlay-open");
        }
    }
});
