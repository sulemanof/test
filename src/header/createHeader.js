import './style.less'

export function createHeader(string) {
    const el = document.createElement('h1');

    el.innerHTML = string;
    el.classList.add('title');

    return el;
}