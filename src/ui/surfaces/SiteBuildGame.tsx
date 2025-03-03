import {
  Card,
  CardTitle,
  SiteBuildGameSurface,
} from "@netlify/sdk/ui/react/components";
import { useNetlifySDK } from "@netlify/sdk/ui/react";

export const SiteBuildGame = () => {
  const sdk = useNetlifySDK();

  return (
    <SiteBuildGameSurface>
      <Card>
        <CardTitle>Example Section for {sdk.extension.name}</CardTitle>
        <p>This is an example site configuration.</p>
      </Card>
    </SiteBuildGameSurface>
  );
};
