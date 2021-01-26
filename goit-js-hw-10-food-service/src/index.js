import './css/styles.css';
import itemsTemplate from './templates/menu-items.hbs';
import menu from './data/menu.json';
import theme from './js/theme';

const refs = {
    body: document.querySelector('body'),
    menuItems: document.querySelector('.js-menu'),
}

const markup = itemsTemplate(menu);
