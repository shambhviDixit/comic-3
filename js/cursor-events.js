AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
  
    handlePlacesListState: function () {
      const id = this.e1.getAttribute("id");
      const placesId = ["enola", "spidey", "sherlock", "wonder woman"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.e1.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.e1.addEventListener("mouseleave",() => {
        const {selectedItemId}=this.data;
        if(selectedItemId){
           const e1=document.querySelector(`#${selectedItemId}`);
           const id=e1.getAttribute("id");
           if(id==selectedItemId){
               e1.setAttribute("material", {
                color:"#0077CC",
                opacity:1,
  
               })
          
           }
        }
      });
    },
  });
  