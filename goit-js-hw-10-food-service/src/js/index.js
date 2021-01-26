import itemsTemplate from '../templates/menu-items.hbs';
import '../styles.css';
import menu from './menu.json';

const markup = itemsTemplate(menu);
const refs = {
    body: document.querySelector('body'),
    menuItems: document.querySelector('.js-menu'),
}
