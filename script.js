var cena = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);

var canvas = render.domElement;
document.body.appendChild(canvas);