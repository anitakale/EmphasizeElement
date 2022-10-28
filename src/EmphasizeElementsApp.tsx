/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { authClient } from "./common/AuthorizationClient";
import { default3DSandboxUi } from "./common/DefaultViewerProps";
import { EmphasizeElementsWidgetProvider } from "./EmphasizeElementsWidget";
import { FrontstageManager } from "@itwin/appui-react";
import { mapLayerOptions } from "./common/MapLayerOptions";
import { Viewer } from "@itwin/web-viewer-react";
import { ViewSetup } from "./common/ViewSetup";
import React, { useEffect } from "react";

const uiProviders = [new EmphasizeElementsWidgetProvider()];
const viewportOptions = {
  viewState: ViewSetup.getDefaultView,
};

const iTwinId = process.env.IMJS_ITWIN_ID;
const iModelId = process.env.IMJS_IMODEL_ID;

const EmphasizeElementsApp = () => {
  /** Sign-in */
  useEffect(() => {
    void authClient.signIn();
  }, []);

  /** The sample's render method */

  return <Viewer
    iTwinId={iTwinId}
    iModelId={iModelId}
    authClient={authClient}
    enablePerformanceMonitors={true}
    viewportOptions={viewportOptions}
    mapLayerOptions={mapLayerOptions}
    defaultUiConfig={default3DSandboxUi}
    uiProviders={uiProviders}
    theme="dark"
  />;

};

// Define panel size
FrontstageManager.onFrontstageReadyEvent.addListener((event) => {
  const { bottomPanel } = event.frontstageDef;
  bottomPanel && (bottomPanel.size = 180);
});

export default EmphasizeElementsApp;
