"use strict";(self.webpackChunknatuerlich_docs=self.webpackChunknatuerlich_docs||[]).push([[729],{847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var o=t(7462),r=(t(7294),t(3905)),a=t(5714);const i={},s="Input Sources",u={unversionedId:"input-sources",id:"input-sources",title:"Input Sources",description:"The Hands and Controllers components are easy to use but offer only few customizations. Instead, developers can use the GrabHand, TouchHand, Pointerhand, GrabController, PointerController, TeleportHand, and TeleportController and the useInputSources hook for more control over each hand/controller. Each inputSource represents one hand or controller. Developers can map each inputSource to a custom hand or controller implementation. If you application requires custom hands/controllers components, please read the custom input sources documentation.",source:"@site/docs/input-sources.md",sourceDirName:".",slug:"/input-sources",permalink:"/natuerlich/input-sources",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Tracked Images",permalink:"/natuerlich/images"},next:{title:"Interaction with @coconut-xr/koestlich",permalink:"/natuerlich/koestlich-interaction"}},p={},c=[],l={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"input-sources"},"Input Sources"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Hands")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Controllers")," components are easy to use but offer only few customizations. Instead, developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GrabHand"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchHand"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointerhand"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GrabController"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PointerController"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TeleportHand"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"TeleportController")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"useInputSources")," hook for more control over each hand/controller. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"inputSource")," represents one hand or controller. Developers can map each ",(0,r.kt)("inlineCode",{parentName:"p"},"inputSource")," to a custom hand or controller implementation. If you application requires custom hands/controllers components, please read the ",(0,r.kt)("a",{parentName:"p",href:"/natuerlich/custom-input-sources"},"custom input sources")," documentation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useInputSources")," hook allows to retrieve all active input sources, which represent both hands and controllers. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"inputSources.map"),", we map each controller/hand to its implementation. This allows developers to provide different implementations based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputSource.handedness"),". We can differentiate between hands and controllers based on the existence of the ",(0,r.kt)("inlineCode",{parentName:"p"},"hand")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputSource"),"."),(0,r.kt)("p",null,"The following code, shows how to assign different hand/controller interactions to different hands and provides more granular control over interactions and visualizations for controllers/hands."),(0,r.kt)("admonition",{title:"Important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"All objects tracked using WebXR, such as the controllers and hands, must be placed inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"ImmersiveSessionOrigin"),".\nWhen using hands inside a WebXR session, the ",(0,r.kt)("inlineCode",{parentName:"p"},'"hand-tracking"')," feature needs to be requested inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"sessionOptions"),".")),(0,r.kt)(a.w,{path:"natuerlich-input-sources-gwgzhg",mdxType:"CodesandboxEmbed"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  XRCanvas,\n  GrabHand,\n  GrabController,\n  PointerController,\n  PointerHand,\n  Grabbable\n} from "@coconut-xr/natuerlich/defaults";\nimport {\n  useEnterXR,\n  NonImmersiveCamera,\n  ImmersiveSessionOrigin,\n  useInputSources\n} from "@coconut-xr/natuerlich/react";\nimport { getInputSourceId } from "@coconut-xr/natuerlich";\n\nconst sessionOptions: XRSessionInit = {\n  requiredFeatures: ["local-floor", "hand-tracking"]\n};\n\nexport default function Index() {\n  const enterAR = useEnterXR("immersive-ar", sessionOptions);\n  const inputSources = useInputSources();\n  return (\n    <div\n      style={{...}}\n    >\n      <button onClick={enterAR}>Enter AR</button>\n      <XRCanvas>\n        <Grabbable position={[0, 1.5, 1]}>\n          <mesh>\n            <boxGeometry />\n            <meshBasicMaterial color="red" />\n          </mesh>\n        </Grabbable>\n        <NonImmersiveCamera position={[0, 1.5, 4]} />\n        <ImmersiveSessionOrigin position={[0, 0, 4]}>\n          {inputSources.map((inputSource) =>\n            inputSource.hand != null ? (\n              inputSource.handedness === "left" ? (\n                <GrabHand\n                  id={getInputSourceId(inputSource)}\n                  key={getInputSourceId(inputSource)}\n                  inputSource={inputSource}\n                  hand={inputSource.hand}\n                />\n              ) : (\n                <PointerHand\n                  id={getInputSourceId(inputSource)}\n                  key={getInputSourceId(inputSource)}\n                  inputSource={inputSource}\n                  hand={inputSource.hand}\n                />\n              )\n            ) : inputSource.handedness === "left" ? (\n              <GrabController\n                id={getInputSourceId(inputSource)}\n                key={getInputSourceId(inputSource)}\n                inputSource={inputSource}\n              />\n            ) : (\n              <PointerController\n                id={getInputSourceId(inputSource)}\n                key={getInputSourceId(inputSource)}\n                inputSource={inputSource}\n              />\n            )\n          )}\n        </ImmersiveSessionOrigin>\n      </XRCanvas>\n    </div>\n  );\n}\n\n')),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Question not answered?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If your questions were not yet answered, visit our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/NCYM8ujndE"},"Discord")," \ud83d\ude09")))}m.isMDXComponent=!0}}]);