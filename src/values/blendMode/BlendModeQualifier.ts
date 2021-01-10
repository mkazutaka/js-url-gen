import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";

/**
 * @description
 * Defines the mode of blending to use when overlaying an image.
 * Even though BlendMode is technically an actionQualifier, it implements exactly the same functionality as an action.
 * This is true because Position is actually compounded of multiple qualifiers
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#overlay_blending_effects|Overlay blending effects}
 *
 * @memberOf Values.BlendMode
 * @extend {SDK.Action}
 */
class BlendModeQualifier extends Action {
  constructor(blendMode:string, level?:number) {
    super();
    this.addQualifier(new Qualifier('e', new QualifierValue([blendMode, level])));
  }
}


export {BlendModeQualifier};
