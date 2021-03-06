let scene ,camera ,renderer ,cube;

function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

    renderer = new  THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth , window.innerHeight);

    document.body.appendChild(renderer.domElement);
    document.body.style.backgroundColor = '#foo'
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    let texture = new THREE.TextureLoader().load('http://www.centralazdining.com/content/uploads/plain-glass-window-texture-inside-decor-great-glass-window-texture.jpg')
    const material = new THREE.MeshBasicMaterial({map:texture});
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 7;
}

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.03;

    renderer.render(scene,camera);
}
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth , window.innerHeight);
}
window.addEventListener('resize',onWindowResize,false)
init();
animate();