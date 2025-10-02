import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(     
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 
);
camera.position.z = 10;

// Cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cubeMesh = new THREE.Mesh(geometry, material);
cubeMesh.position.x = -6;
scene.add(cubeMesh);

// Sphere
const sphereGeometry = new THREE.SphereGeometry(1, 16, 16);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    wireframe: true
});
const sphereCubeMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereCubeMesh.position.x = 4;
scene.add(sphereCubeMesh);

// Cone
const coneGeometry = new THREE.ConeGeometry(3, 3, 3); 
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial); 
cone.position.x = 12; // Start on the right
scene.add(cone);

// Torus
const torusGeometry = new THREE.TorusGeometry(1.2, 0.4, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.x = 8;
scene.add(torus);

// Light
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(3, 2, 4);
scene.add(light);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Movement direction for cone
let coneDirection = -0.05;

function animate() {
    requestAnimationFrame(animate);

    cubeMesh.rotation.x += 0.01;

    // Move cone back and forth
    cone.position.x += coneDirection;

    // Reverse direction at bounds
    if (cone.position.x < -12 || cone.position.x > 12) {
        coneDirection *= -1;
    }

    renderer.render(scene, camera);
}

animate();
