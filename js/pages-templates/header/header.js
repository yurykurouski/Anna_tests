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
    <span class='header' id='cabinet'><a></a></span>
    <span class='header' id='auth'><a></a></span>
`
export default template;

{/* <span class="material-icons">close</span> */}