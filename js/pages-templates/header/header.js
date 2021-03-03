const template = `
    <span class='header' id='main'><a>Главная</a></span>
    <span class='header' id='search'>
        <form id = 'search-form'>
            <button type'submit'><i class="material-icons search light-theme">search</i></button>
            <input class='light-theme' name='search' placeholder='Поиск по описанию...'>
            <div id='results' class='light-theme'>
                <ul id='list'></ul>
            </div>
        </form>
    </span>
    
    <span class='header' id='auth'>
        <a></a>
        <ul id='cabinet-wrap' class='light-theme'>
            <li class='light-theme'><span id='usr-name'></span></li>
            <li id='cabinet' class='light-theme'></li>
            <li class='light-theme'><a id='logout' class='cabinet-a'>Выйти</a><img id='theme-toggler' src='img/nightlight_48dp.svg' title='Переключить на темную тему' alt='Theme toggler'></li>
        </г>
    </span>
`
export default template;