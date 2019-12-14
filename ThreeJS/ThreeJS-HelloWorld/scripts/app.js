var example = (function(){

    "use strict";
    
    //Scene, renderder, camera, light, actors(entities)
    var scene=new THREE.Scene(),
    renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(), //Checks to see if browser supports GL and if not use Canvas
    light= new THREE.DirectionalLight(0xffffff,0.5),            
    camera,        
    box,
    box2,
    box3;

    function initScene(){ //setting up the parts of a scene
        renderer.setSize( window.innerWidth, window.innerHeight ); //renderer
        document.getElementById("webgl-container").appendChild(renderer.domElement);

        scene.add(light);
        //Camera                 
        camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        1000
        );
                            
        camera.position.z= 100;            
        scene.add( camera ); //Add Camera to Scene
        
        //Actor
        box = new THREE.Mesh(
        new THREE.BoxGeometry(20,20,20),
        new THREE.MeshBasicMaterial({color: 0x2194ce})
        );
        box.position.set( -40, 0, 0 );

        box.name="box";   

        scene.add(box); //Add Actor "Box" to scene
        
        box2 = new THREE.Mesh(
        new THREE.BoxGeometry(20,20,20),
        new THREE.MeshLambertMaterial({color: 0x2194ce,
                                       ambient: 0x0088bb,
                                       emissive: 0x002211})
        );
        box2.position.set( 0, 0, 0 );

        box2.name="Box2";   

        scene.add(box2);//Add Actor "Box2" to scene
        
        box3 = new THREE.Mesh(
        new THREE.BoxGeometry(20,20,20),
        new THREE.MeshPhongMaterial({color: 0x2194ce,
                                    emissive: 0x0,
                                    specular: 0x111111,
                                    shininess: 30 })
        );
        box3.position.set( 40, 0, 0 );

        box3.name="Box3";   

        scene.add(box3);//Add Actor "Box3" to scene

        render();
    }

    function render(){ //tell the renderer to render this scene 
        box.rotation.y +=0.01;
        box.rotation.x +=0.01;
        box2.rotation.y += 0.01;
        box2.rotation.x += 0.01;
        box3.rotation.y += 0.01;
        box3.rotation.x += 0.01;
        
        
        renderer.render(scene, camera); 
        requestAnimationFrame(render);        
    }

    window.onload = initScene; //Init scene
    
    return { //Not critical but good for debugging
        scene: scene
    }

})();
