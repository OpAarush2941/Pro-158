AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      console.log("welcome")
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handleComicListState: function () {
        const id = this.el.getAttribute("id");
        const comicId = ["Comic1", "Comic2", "Comic3", "Comic4"];
        if (comicId.includes(id)) {
            console.log("true")
          const comicContainer = document.querySelector("#comics_container");
          comicContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#D76B30",
            opacity: 1,
          });
        }
    },
    handleComicList: function(){
      const id = this.el.getAttribute("id");
      const comicId = ["Comic1", "Comic2", "Comic3", "Comic4"];
      if (comicId.includes(id)) {
          console.log("true")
        const comicContainer = document.querySelector("#comics_container");
        comicContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#0077CC",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
        // Mouse Enter Events
        this.el.addEventListener("mouseenter", () => {
          console.log("mouse entered")
          this.handleComicListState();
        });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", ()=> {
        console.log("mouse left")
        this.handleComicList();
      })
    },
  });
  