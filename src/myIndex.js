import './styles.css'
import { sayHello } from './sayHello';
import {createHeader} from './header/createHeader';
import img from '../davidich.jpg';

alert('Hello from webpack watch mode')

const header = createHeader("Hello world");

document.body.appendChild(header);


document.getElementById('button').addEventListener('click', () => {
    const image = new Image();
    image.src = img;
    
    document.body.appendChild(image);
})