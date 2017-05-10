class Menu {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.hiddenMenu = this.nav.childNodes[1].childNodes[5];
        this.menuItems = this.hiddenMenu.childNodes;
        this.menuButton = this.nav.childNodes[1].childNodes[3];
        
        this.opened = false;

        this.toggle = this.toggle.bind(this);
        this.addEventListeners();
    }

    addEventListeners() {
        this.menuButton.addEventListener('click', this.toggle());

        for (var i = 1; i < this.menuItems.length; i+=2) {
            this.menuItems[i].addEventListener('click', this.toggle());
        }

    }

    toggle() {
        return function() {
           // console.log("toggled");
            if (this.opened) {
                this.moveRight();
            } else {
                this.moveLeft();
            }
            this.opened = !this.opened;
        }.bind(this);
    }

    moveRight() {
        this.hiddenMenu.classList.add('animatable');
        this.hiddenMenu.classList.remove('move__left');
        this.nav.classList.add('shadow');
    }

    moveLeft() {
        this.nav.classList.remove('shadow');
        this.hiddenMenu.classList.add('animatable');
        this.hiddenMenu.classList.add('move__left');
    }

}

new Menu();