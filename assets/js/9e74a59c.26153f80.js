(self.webpackChunknatuerlich_docs=self.webpackChunknatuerlich_docs||[]).push([[801],{1617:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/tracked-image.c79d778.640.jpeg 640w,"+a.p+"assets/ideal-img/tracked-image.65f3b51.899.jpeg 899w",images:[{path:a.p+"assets/ideal-img/tracked-image.c79d778.640.jpeg",width:640,height:641},{path:a.p+"assets/ideal-img/tracked-image.65f3b51.899.jpeg",width:899,height:900}],src:a.p+"assets/ideal-img/tracked-image.c79d778.640.jpeg",toString:function(){return a.p+"assets/ideal-img/tracked-image.c79d778.640.jpeg"},placeholder:void 0,width:640,height:641},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwUG/8QAIRAAAQQCAgMBAQAAAAAAAAAAAQIDBBEFIQAGBxIxMkH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABkRAQACAwAAAAAAAAAAAAAAAAEAAhEhMf/aAAwDAQACEQMRAD8AiYLrENrx5FVBxEaUl1DSnHnPS3vcWTZFneqB0BwTyuNxTOTmNIlqaSh5aQiwfUBRFX/a5pulZrKxfH3YI8XJTWWEfltt9aUpsboA1vh192fvK2TBqE7P/9k="}},936:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>g});var n=a(7462),i=(a(7294),a(3905)),r=a(5851),s=a(1361);const o={},m="Tracked Images",p={unversionedId:"tracked-images",id:"tracked-images",title:"Tracked Images",description:"The WebXR Image Tracking feature allows tracking images in Augmented Reality. Tracking images in AR requires the image to be present, including its expected width in meters. The image must be submitted as an ImageBitmap when starting the WebXR session. natuerlich provides the TrackedImage component to display content at the place where WebXR found the tracked image. The TrackedImage component takes the same bitmap provided for the start of the session as the image parameter.",source:"@site/docs/tracked-images.md",sourceDirName:".",slug:"/tracked-images",permalink:"/natuerlich/tracked-images",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Tracked Meshes",permalink:"/natuerlich/tracked-meshes"},next:{title:"Poses",permalink:"/natuerlich/poses"}},d={},g=[],c={toc:g},A="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(A,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tracked-images"},"Tracked Images"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/immersive-web/marker-tracking/blob/main/explainer.md"},"WebXR Image Tracking")," feature allows tracking images in Augmented Reality. Tracking images in AR requires the image to be present, including its expected width in meters. The image must be submitted as an ",(0,i.kt)("inlineCode",{parentName:"p"},"ImageBitmap")," when starting the WebXR session. ",(0,i.kt)("strong",{parentName:"p"},"natuerlich")," provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"TrackedImage")," component to display content at the place where WebXR found the tracked image. The ",(0,i.kt)("inlineCode",{parentName:"p"},"TrackedImage")," component takes the same bitmap provided for the start of the session as the ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," parameter."),(0,i.kt)("p",null,"The following example shows how to load a tracked image as a texture, convert the texture to a bitmap, and use the texture to display a plane containing the loaded texture at the position of the tracked image."),(0,i.kt)("p",null,"The following image was used for tracking in the ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/natuerlich-images-q6zknf?file=/src/app.tsx"},"CodeSandbox"),"."),(0,i.kt)(r.Z,{img:a(1617),mdxType:"Image"}),(0,i.kt)("admonition",{title:"Important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The image tracking on WebXR currently only works in Android Chrome. The ",(0,i.kt)("inlineCode",{parentName:"p"},"TrackedImage")," must be placed inside ",(0,i.kt)("inlineCode",{parentName:"p"},"ImmersiveSessionOrigin")," if an ",(0,i.kt)("inlineCode",{parentName:"p"},"ImmersiveSessionOrigin")," is present. Furthermore, the ",(0,i.kt)("inlineCode",{parentName:"p"},'"image-tracking"')," feature must be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionOptions")," for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/immersive-web/marker-tracking/blob/main/explainer.md"},"WebXR Image Tracking")," to be active if supported by the device.")),(0,i.kt)(s.w,{path:"natuerlich-images-q6zknf",mdxType:"CodesandboxEmbed"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { XRCanvas } from "@coconut-xr/natuerlich/defaults";\nimport {\n  useEnterXR,\n  NonImmersiveCamera,\n  ImmersiveSessionOrigin,\n  TrackedImage\n} from "@coconut-xr/natuerlich/react";\nimport { useLoader } from "@react-three/fiber";\nimport { useMemo } from "react";\nimport { TextureLoader } from "three";\nimport { suspend } from "suspend-react";\n\nconst widthInMeters = 0.2;\n\nconst createImageBitmapSymbol = Symbol("createImageBitmap")\n\nexport default function Index() {\n  const texture = useLoader(TextureLoader, "/image.jpg");\n  const bitmap = suspend((i) => createImageBitmap(i), [\n    texture.image,\n    createImageBitmapSymbol\n  ]);\n  const options = useMemo(\n    () => ({\n      requiredFeatures: ["local-floor", "image-tracking"],\n      trackedImages: [\n        {\n          image: bitmap,\n          widthInMeters\n        }\n      ]\n    }),\n    [bitmap]\n  );\n  const enterAR = useEnterXR("immersive-ar", options);\n  return (\n    <div\n      style={{...}}\n    >\n      <button onClick={enterAR}>Enter AR</button>\n      <XRCanvas>\n        <NonImmersiveCamera position={[0, 1.5, 4]} />\n        <ImmersiveSessionOrigin position={[0, 0, 4]}>\n          <TrackedImage image={bitmap}>\n            <mesh scale={widthInMeters}>\n              <planeGeometry />\n              <meshBasicMaterial map={texture} toneMapped={false} />\n            </mesh>\n          </TrackedImage>\n        </ImmersiveSessionOrigin>\n      </XRCanvas>\n    </div>\n  );\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"Question not answered?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If your questions were not yet answered, visit our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/NCYM8ujndE"},"Discord")," \ud83d\ude09")))}h.isMDXComponent=!0}}]);