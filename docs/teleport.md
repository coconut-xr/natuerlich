# Teleport

A basic form of teleportation can be easily implemented by changing the `position` attribute of `ImmersiveSessionOrigin`. However, selecting where to teleport can be tricky when the interaction should have a downward bend ray originating from the controller/hand. Therefore, **natuerlich** provides the `TeleportController` and `TeleportHand` components that implement a downward bend ray interaction and a cursor visualization. The `TeleportTarget` component is used to mark objects as teleportable.

The following example uses the `TeleportController`, `TeleportHand`, and `TeleportTarget` to build a simple scene with a flat plane on which the user can teleport. In this case, we use `useState` from react, but any other state management solution can also be used.

[CodeSandbox](https://codesandbox.io/s/natuerlich-teleport-lmml8p?file=/src/app.tsx)

![Screenshot]()

```tsx
import {
  XRCanvas,
  TeleportTarget,
  TeleportController,
  TeleportHand
} from "@coconut-xr/natuerlich/defaults";
import { getInputSourceId } from "@coconut-xr/natuerlich";
import {
  useEnterXR,
  NonImmersiveCamera,
  ImmersiveSessionOrigin,
  useInputSources
} from "@coconut-xr/natuerlich/react";
import { Vector3 } from "three";
import { useState } from "react";

const sessionOptions: XRSessionInit = {
  requiredFeatures: ["local-floor", "hand-tracking"]
};

export default function Index() {
  const enterAR = useEnterXR("immersive-ar", sessionOptions);
  const inputSources = useInputSources();
  const [position, setPosition] = useState(new Vector3(0, 0, 0));
  return (
    <div
      style={{...}}
    >
      <button onClick={enterAR}>Enter AR</button>
      <XRCanvas>
        <TeleportTarget>
          <mesh scale={100} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry />
          </mesh>
        </TeleportTarget>
        <NonImmersiveCamera position={position} />
        <ImmersiveSessionOrigin position={position}>
          {inputSources.map((inputSource) =>
            inputSource.hand != null ? (
              <TeleportHand
                key={getInputSourceId(inputSource)}
                hand={inputSource.hand}
                onTeleport={setPosition}
                inputSource={inputSource}
                id={getInputSourceId(inputSource)}
              />
            ) : (
              <TeleportController
                onTeleport={setPosition}
                id={getInputSourceId(inputSource)}
                key={getInputSourceId(inputSource)}
                inputSource={inputSource}
              />
            )
          )}
        </ImmersiveSessionOrigin>
      </XRCanvas>
    </div>
  );
}

```

---

If your questions were not yet answered, visit our [Discord](https://discord.gg/NCYM8ujndE) ;)