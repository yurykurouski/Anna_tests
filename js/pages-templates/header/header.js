const template = `
    <span class='header' id='main'><a>Главная</a></span>
    <span class='header' id='search'>
        <form id = 'search-form'>
            <button type'submit'><i class="material-icons search">search</i></button>
            <input name='search'>
            <div id='results'>
                <ul id='list'></ul>
            </div>
        </form>
    </span>
    
    <span class='header' id='auth'>
        <a></a>
        <div id='cabinet-wrap'>
            <span id='usr-name'></span>
            <span id='cabinet'></span>
            <span id='logout'><a class='cabinet-a'>Выйти</a></span>
        </div>
    </span>
`
export default template;