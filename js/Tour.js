AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "enola",
        title: "Enola",
        url: "./assets/thumbnails/enola.jpg",
      },
      {
        id: "sherlock",
        title: "Sherlock",
        url: "./assets/thumbnails/sherlock.jpg",
      },

      {
        id: "spidey",
        title: "Spidey",
        url: "./assets/thumbnails/spidey.jpeg",
      },
      {
        id: "wonder woman",
        title: "Wonder woman",
        url: "./assets/thumbnails/wonder woman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
       const borderEl=this.createBorder(position,item.id);
       
      // Thumbnail Element
      const thumbnail=this.createThumbnail(item);
      borderEl.appendChild(thumbnail);


      // Title Text Element
      const titleE1=this.createTitleE1(position,item);
      borderEl.appendChild(titleE1);
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder:function(position,id){
        const entityE1=document.createElement("a-entity");
        entityE1.setAttribute("id",id);
        entityE1.setAttribute("visible",true);
        entityE1.setAttribute("geometry",{
          primitive:"ring",
          radiusInner:9,
          radiusOuter:10
        });
        entityE1.setAttribute("position",position);
        entityE1.setAttribute("visible",true);
        entityE1.setAttribute("material",{
          color:"#0077CC",
          opacity:1
        });
        entityE1.setAttribute("cursor-listener", {});
        return entityE1;
},
  createThumbnail:function(item){
        const entityE1=document.createElement("a-entity");
        entityE1.setAttribute("item",item);
        entityE1.setAttribute("visible",true);
        entityE1.setAttribute("geometry",{
          primitive:"circle",
          radius:9
        });
        entityE1.setAttribute("material",{
          src:item.url
        });
        return entityE1;
  },
  createTitleE1:function(position,item){
       const entityE1=document.createElement("a-entity");
       entityE1.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:70,
        color:"#E65100",
        value:item.title,
       });
        const e1Position=position;
        e1Position.y=-20;
        entityE1.setAttribute("position",e1Position);
        entityE1.setAttribute("visible",true);
        return entityE1;
  }
});
