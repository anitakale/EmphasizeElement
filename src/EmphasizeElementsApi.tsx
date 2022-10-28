/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { ColorDef, FeatureOverrideType } from "@itwin/core-common";
import { EmphasizeElements, ScreenViewport } from "@itwin/core-frontend";


export class EmphasizeElementsApi {


  public static emphasizeSelectedElements(vp: ScreenViewport) {
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.emphasizeSelectedElements(vp);
  }

  public static clearEmphasizedElements(vp: ScreenViewport) {
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.clearEmphasizedElements(vp);
  }



  public static hideSelectedElements(vp: ScreenViewport) {
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.hideSelectedElements(vp);
  }

  public static clearHiddenElements(vp: ScreenViewport) {
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.clearHiddenElements(vp);
  }



  public static isolateSelectedElements(vp: ScreenViewport) {
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.isolateSelectedElements(vp);
  }

  public static clearIsolatedElements(vp: ScreenViewport) {
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.clearIsolatedElements(vp);
  }



  public static overrideSelectedElements(colorValue: ColorDef, vp: ScreenViewport) {
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.overrideSelectedElements(vp, colorValue, FeatureOverrideType.ColorOnly, false, true);
  }

  public static clearOverriddenElements(vp: ScreenViewport) {
    const provider = EmphasizeElements.getOrCreate(vp);
    provider.clearOverriddenElements(vp);
  }

}

