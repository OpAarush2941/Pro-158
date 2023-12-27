AFRAME.registerComponent("comics", {
    init:function(){
        this.cardsContainer= this.el;
        this.createCards();
    },
    createCards:function(){
        const thumbnailsRef = [
            {
                id: "Comic1",
                url: "comic1.png",
              },
              {
                id: "Comic2",
                url: "comic2.png",
              },
        
              {
                id: "Comic3",
                url: "comic3.png",
              },
              {
                id: "Comic4",
                url: "comic4.png",
              },
        ];
        let previousXPosition = -60;

        for (var item of thumbnailsRef){
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -30;
            const borderPosition = {x:posX, y:posY+5, z:posZ}
            previousXPosition = posX

            const borderEl = this.createBorder(borderPosition, item.id);

            const thumbnail=this.createPoster(item);
            borderEl.appendChild(thumbnail);

            this.cardsContainer.appendChild(borderEl);
        };
    },

    createBorder:function(borderPosition, id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive:"plane",
            width:15,
            height:20
        })
        entityEl.setAttribute("position", borderPosition);
        entityEl.setAttribute("material", {
            color:"#0077CC",
            opacity:0.5
        });
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
    },
    createPoster:function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry",{
            primitive:"plane", 
            width:13,
            height:18,
        });
        entityEl.setAttribute("position", {x:0, y:0, z:0.1});
        entityEl.setAttribute("material", {src:item.url});

        return entityEl
    }
});