import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(     
    75,  //FOV - kendi
    window.innerWidth / window.innerHeight,  //aspect ratio
    0.1,  //near/far plane , near z-score=0.1, gjithcka jashte keti kendi nuk do vizatohet
    1000 
);
camera.position.z = 10;  //e largojme kameren, e vendosim me perpara nga ne
//te kamera ortografike=left,right,top,bottom, near,far


const sphereGeometry = new THREE.SphereGeometry(2,48,48);
const sphereMaterial = new THREE.MeshToonMaterial({
    color: 0xff0000
})
const sphereMesh = new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphereMesh);


const coneGeometry = new THREE.ConeGeometry(2,5,5);
const coneMaterial = new THREE.MeshToonMaterial({
    color: 0x00ff00,
})
const coneMesh = new THREE.Mesh(coneGeometry,coneMaterial);
coneMesh.position.set(5,1);
scene.add(coneMesh);


const cilinderGeometry = new THREE.CylinderGeometry(2,2,7);
const cilinderMaterial = new THREE.MeshToonMaterial({
    color: 0xff00ff
})
const cilinderMesh = new THREE.Mesh(cilinderGeometry,cilinderMaterial);
cilinderMesh.position.set(-6,1);
scene.add(cilinderMesh);













const ambientLight = new THREE.AmbientLight(0x00ff00,1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xff0000,1);
directionalLight.position.set(0,0,10); //pozita si camera.position.z
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.render(scene,camera);

//document.body.appendChild( renderer.domElement );  //kjo kur nuk kemi div me id ne html, ne kete rast kemi div
document.body.append(renderer.domElement);
//document.getElementById("id").append();