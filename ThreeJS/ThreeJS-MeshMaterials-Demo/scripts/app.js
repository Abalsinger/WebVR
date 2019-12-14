var example = (function(){

    "use strict";
    
    //Scene, renderder, camera, light, actors(entities)
    var scene=new THREE.Scene(),
    renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(), //Checks to see if browser supports GL and if not use Canvas
    light= new THREE.DirectionalLight(0xffffff,5),            
    camera,        
    BasicMeshKnot,
    LambertMeshKnot,
    PhongMeshKnot;

    function initScene(){ //setting up the parts of a scene
        renderer.setSize( window.innerWidth, window.innerHeight ); //renderer
        document.getElementById("webgl-container").appendChild(renderer.domElement);

        scene.add(light);
        
        //Camera                 
        camera = new THREE.PerspectiveCamera(
        35, window.innerWidth / window.innerHeight,1,1000
        );
                            
        camera.position.z= 100;            
        scene.add( camera ); //Add Camera to Scene
        
        //Actor
        BasicMeshKnot = new THREE.Mesh(
        new THREE.TorusKnotGeometry( 10, 3, 100, 16 ),
        new THREE.MeshBasicMaterial({color: 0x2194ce})
        );
        BasicMeshKnot.position.set( -40, 0, 0 );

        BasicMeshKnot.name="BasicMeshKnot";   

        scene.add(BasicMeshKnot); //Add Actor "BasicMeshKnot" to scene
        
        LambertMeshKnot = new THREE.Mesh(
        new THREE.TorusKnotGeometry( 10, 3, 100, 16 ),
        new THREE.MeshLambertMaterial({color: 0x2194ce,
                                       ambient: 0x0088bb,
                                       emissive: 0x002211})
        );
        LambertMeshKnot.position.set( 0, 0, 0 );

        LambertMeshKnot.name="Box2";   

        scene.add(LambertMeshKnot);//Add Actor "LambertMeshKnot" to scene
        
        
        PhongMeshKnot = new THREE.Mesh(
        new THREE.TorusKnotGeometry( 10, 3, 100, 16 ),
        new THREE.MeshPhongMaterial({color: 0x2194ce,
                                    emissive: 0x0,
                                    specular: 0x111111,
                                    shininess: 50 })
        );
        PhongMeshKnot.position.set( 40, 0, 0 );

        PhongMeshKnot.name="PhongMeshKnot";   

        scene.add(PhongMeshKnot);//Add Actor "PhongMeshKnot" to scene
    

        render();
    }

    function render(){ //tell the renderer to render this scene 
        BasicMeshKnot.rotation.y +=0.01;
        BasicMeshKnot.rotation.x +=0.01;
        LambertMeshKnot.rotation.y += 0.01;
        LambertMeshKnot.rotation.x += 0.01;
        PhongMeshKnot.rotation.y += 0.01;
        PhongMeshKnot.rotation.x += 0.01;
        
        
        renderer.render(scene, camera); 
        requestAnimationFrame(render);        
    }

    window.onload = initScene; //Init scene
    
    return { //Not critical but good for debugging
        scene: scene
    }

})();
