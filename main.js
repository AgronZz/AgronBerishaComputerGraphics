import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 10);
scene.add(light);


const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -5; 
scene.add(cube);


const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 0; 
scene.add(sphere);


const torusGeometry = new THREE.TorusGeometry(1.2, 0.4, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.x = 5; 
scene.add(torus);


function animate() {
  requestAnimationFrame(animate);

  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  sphere.rotation.y += 0.02;

  torus.rotation.x += 0.01;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
