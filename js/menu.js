class Menu {
    constructor(elementClass) {
        const IS_ACTIVE_CLASS = 'is-active';
        const ACTIVE_CLASS = 'active';

        this._element = document.querySelector(elementClass);
        this._hamburger = new Hamburger('.js-menu__hamburger');
        this._menuItems = new MenuListItems('.menu-item');
        this._checkMobileClass = this._checkMobileClass.bind(this);

        this._hamburger._element.addEventListener('click', () => {
            this._hamburger._element.classList.toggle(IS_ACTIVE_CLASS);
            (!this._element.classList.contains(ACTIVE_CLASS)) ?
            this._element.classList.add(ACTIVE_CLASS): this._element.classList.remove(ACTIVE_CLASS)
        });

        window.addEventListener('resize', this._checkMobileClass);
        window.addEventListener('load', this._checkMobileClass);

        console.log(this._menuItems);

        for (let item of this._menuItems._element) {
            item.addEventListener('click', () => {
                for (let item of this._menuItems._element) {
                    item.classList.remove(ACTIVE_CLASS);
                }
                item.classList.toggle(ACTIVE_CLASS);
            })
        }

        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('menu__link')) {
                return;
            } else {
                for (let item of this._menuItems._element) {
                    item.classList.remove(ACTIVE_CLASS);
                }
            }
        });
    }

    _checkMobileClass() {
        if (window.innerWidth < 992) {
            if (this._element.classList.contains('is-mobile')) {
                return;
            } else {
                this._element.classList.add('is-mobile');
            }
        } else {
            if (!this._element.classList.contains('is-mobile')) {
                return;
            } else {
                this._element.classList.remove('is-mobile');
            }
        }
    }
}

class MenuListItems {
    constructor(elementClass) {
        this._element = document.querySelectorAll(elementClass);
    }
}

class Hamburger {
    constructor(elementClass) {
        this._element = document.querySelector(elementClass);
    }
}