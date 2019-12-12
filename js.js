function toggleMenu() {
    var el = document.getElementById("toggle").checked;
    var menu = document.getElementById("menu");
  
    if (el) {
      this.menu.classList.remove("menu-closed");
      this.menu.classList.add("menu-open");
    } else {
      this.menu.classList.remove("menu-open");
      this.menu.classList.add("menu-closed");
    }
  }
  