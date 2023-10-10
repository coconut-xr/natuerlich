"use strict";(self.webpackChunknatuerlich_docs=self.webpackChunknatuerlich_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mainSidebar":[{"type":"link","label":"@coconut-xr/natuerlich","href":"/natuerlich/","docId":"main-doc"},{"type":"link","label":"Getting Started","href":"/natuerlich/getting-started","docId":"getting-started"},{"type":"category","label":"How to use natuerlich","collapsed":true,"collapsible":true,"items":[{"type":"link","label":"Anchors","href":"/natuerlich/anchors","docId":"anchors"},{"type":"link","label":"Configuration","href":"/natuerlich/configuration","docId":"configuration"},{"type":"link","label":"Custom Hands and Controllers","href":"/natuerlich/custom-input-sources","docId":"custom-input-sources"},{"type":"link","label":"Guards","href":"/natuerlich/guards","docId":"guards"},{"type":"link","label":"Head Up Display","href":"/natuerlich/head-up-display","docId":"head-up-display"},{"type":"link","label":"Input Sources","href":"/natuerlich/input-sources","docId":"input-sources"},{"type":"link","label":"Interaction with @coconut-xr/koestlich","href":"/natuerlich/koestlich-interaction","docId":"koestlich-interaction"},{"type":"link","label":"Layers","href":"/natuerlich/layers","docId":"layers"},{"type":"link","label":"Interaction with Objects","href":"/natuerlich/object-interaction","docId":"object-interaction"},{"type":"link","label":"Tracked Planes","href":"/natuerlich/tracked-planes","docId":"tracked-planes"},{"type":"link","label":"Tracked Meshes","href":"/natuerlich/tracked-meshes","docId":"tracked-meshes"},{"type":"link","label":"Tracked Images","href":"/natuerlich/tracked-images","docId":"tracked-images"},{"type":"link","label":"Poses","href":"/natuerlich/poses","docId":"poses"},{"type":"link","label":"Teleport","href":"/natuerlich/teleport","docId":"teleport"},{"type":"link","label":"useXR Hook","href":"/natuerlich/use-xr","docId":"use-xr"}],"href":"/natuerlich/category/how-to-use-natuerlich"},{"type":"link","label":"All Natuerlich Components","href":"/natuerlich/all-components","docId":"all-components"},{"type":"link","label":"All Natuerlich Hooks","href":"/natuerlich/all-hooks","docId":"all-hooks"},{"type":"category","label":"Ecosystem","collapsed":true,"collapsible":true,"items":[{"type":"link","label":"koestlich","href":"https://github.com/coconut-xr/koestlich"},{"type":"link","label":"natuerlich","href":"https://github.com/coconut-xr/natuerlich"},{"type":"link","label":"apfel-kruemel","href":"https://github.com/coconut-xr/apfel-kruemel"}]},{"type":"link","label":"Github","href":"https://github.com/coconut-xr/natuerlich"},{"type":"link","label":"Discord","href":"https://discord.gg/RbyaXJJaJM"}]},"docs":{"all-components":{"id":"all-components","title":"All Components Documentation","description":"XRCanvas","sidebar":"mainSidebar"},"all-hooks":{"id":"all-hooks","title":"All Hooks Documentation","description":"useSessionSupported","sidebar":"mainSidebar"},"anchors":{"id":"anchors","title":"Anchors","description":"natuerlich supports WebXR Anchors Module with the useAnchor and usePersistedAnchor hooks. Both hooks return a tuple containing the anchor and a createAnchor function. If no anchor is present, the returned anchor is undefined. A new anchor is created once the createAnchor function is called. If the process is successful, the returned anchor will contain an XRAnchor.","sidebar":"mainSidebar"},"configuration":{"id":"configuration","title":"Configuration","description":"The XRCanvas and also the manual XR component allow to configure the foveation, frameRate, referenceSpace, and frameBufferScaling.","sidebar":"mainSidebar"},"custom-input-sources":{"id":"custom-input-sources","title":"Custom Hands and Controllers","description":"When building a custom hand or controller, we recommend looking at the existing default hands and controllers and modifying them to your needs. In some cases, a completely new interaction type, such as a WhipController, which selects objects with a physical-based whip-pointer, could be required. In such a case, an in-depth understanding of the xinteraction event system should be present.","sidebar":"mainSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"In the following tutorials, we will create several WebXR Experiences using natuerlich and react-three/fiber. Install the dependencies manually via npm i @coconut-xr/natuerlich @react-three/fiber react react-dom three zustand or use the CodeSandbox provided for each example. When developing locally, ensure you host your code using HTTPS, which is required for WebXR sessions.","sidebar":"mainSidebar"},"guards":{"id":"guards","title":"Guards","description":"Guards allow to conditionally display or include content based on the session mode or whether the object is facing the camera of the user. For instance, the SessionModeGuard guard allows only displaying a background when the session is not an AR session. The SessionModeGuard can receive either a list of allow session modes or a list of deny session modes.","sidebar":"mainSidebar"},"head-up-display":{"id":"head-up-display","title":"Head Up Display","description":"Placing content in front of the user\'s camera in an XR session can be achieved using the cameraContent property of the ImmersiveSessionOrigin. This content will be placed at the position of the user\'s head.","sidebar":"mainSidebar"},"input-sources":{"id":"input-sources","title":"Input Sources","description":"The Hands and Controllers components are easy to use but offer only few customizations. Instead, developers can use the GrabHand, TouchHand, Pointerhand, GrabController, PointerController, TeleportHand, and TeleportController and the useInputSources hook for more control over each hand/controller. Each inputSource represents one hand or controller. Developers can map each inputSource to a custom hand or controller implementation. If you application requires custom hands/controllers components, please read the custom input sources documentation.","sidebar":"mainSidebar"},"koestlich-interaction":{"id":"koestlich-interaction","title":"Interaction with @coconut-xr/koestlich","description":"Creating a koestlich UI","sidebar":"mainSidebar"},"layers":{"id":"layers","title":"Layers","description":"WebXR Layers allow rendering content in a specific shape (e.g., plane or cylinder) more efficiently and at a higher resolution. natuerlich provides several components that simplify the use of layers. Furthermore, when the layers feature is unavailable, natuerlich falls back to normal three.js shapes.","sidebar":"mainSidebar"},"main-doc":{"id":"main-doc","title":"@coconut-xr/natuerlich","description":"Version","sidebar":"mainSidebar"},"object-interaction":{"id":"object-interaction","title":"Interaction with Objects","description":"Interactions in natuerlich work through properties, such as onClick. The interaction is based on @coconut-xr/xinteraction. For a more in-depth explanation of the event system and its features, visit the xinteraction documentation.","sidebar":"mainSidebar"},"poses":{"id":"poses","title":"Poses","description":"Our implementation is based on handy-work","sidebar":"mainSidebar"},"teleport":{"id":"teleport","title":"Teleport","description":"A basic form of teleportation can be easily implemented by changing the position attribute of ImmersiveSessionOrigin. However, selecting where to teleport can be tricky when the interaction should have a downward bend ray originating from the controller/hand. Therefore, natuerlich provides the Hands and Controller compoents with type=\\"teleport\\" that implement a downward bend ray interaction and a cursor visualization. The TeleportTarget component is used to mark objects as teleportable.","sidebar":"mainSidebar"},"tracked-images":{"id":"tracked-images","title":"Tracked Images","description":"The WebXR Image Tracking feature allows tracking images in Augmented Reality. Tracking images in AR requires the image to be present, including its expected width in meters. The image must be submitted as an ImageBitmap when starting the WebXR session. natuerlich provides the TrackedImage component to display content at the place where WebXR found the tracked image. The TrackedImage component takes the same bitmap provided for the start of the session as the image parameter.","sidebar":"mainSidebar"},"tracked-meshes":{"id":"tracked-meshes","title":"Tracked Meshes","description":"natuerlich supports WebXR Mesh Detection Module in the form of TrackedMeshs. The useTrackedMeshes hook allows to retrieve all detected meshes. The TrackedMesh component takes a single mesh and renders the geometry retrieved from the mesh. The material of the TrackedMesh can be customized using R3F, and further content can be placed as its children.","sidebar":"mainSidebar"},"tracked-planes":{"id":"tracked-planes","title":"Tracked Planes","description":"natuerlich supports WebXR Plane Detection Module in the form of TrackedPlanes. The useTrackedPlanes hook allows to retrieve all detected planes. The TrackedPlane component takes a single plane and renders the geometry retrieved from the plane. The material of the TrackedPlane can be customized using R3F, and further content can be placed as its children.","sidebar":"mainSidebar"},"use-xr":{"id":"use-xr","title":"useXR Hook","description":"The useXR hook allows to retrieve the current XR state, including the  mode (immersive-vr, immersive-ar, inline, or none), the session, the inputSources, the active layers, the trackedImages, and the trackedPlanes.","sidebar":"mainSidebar"}}}')}}]);