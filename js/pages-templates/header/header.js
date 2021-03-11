import { currentTheme } from '../../utils.js';

const template = `
    <span class='header' id='main'><a>Главная</a></span>
    <span class='header' id='search'>
        <form id = 'search-form'>
            <button type'submit'><i class='material-icons search ${currentTheme()}'>search</i></button>
            <input class='${currentTheme()}' name='search' placeholder='Поиск по описанию...'>
            <div id='results' class='${currentTheme()}'>
                <ul id='list'></ul>
            </div>
        </form>
    </span>
    
    <span class='header' id='auth'>
        <a></a>
        <ul id='cabinet-wrap' class='${currentTheme()}'>
            <li class='${currentTheme()}'><span id='usr-name'></span></li>
            <li id='cabinet' class='${currentTheme()}'></li>
            <li class='${currentTheme()}'><a id='logout' class='cabinet-a'>Выйти</a><img id='theme-toggler' src='/img/nightlight_48dp.svg' title='Переключить на темную тему' alt='Theme toggler'></li>
        </ul>
    </span>
`
export default template;

