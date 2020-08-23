import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Used when delivering a video file as an image format that supports animation, such as animated WebP.
 *
 * Plays all frames rather than just delivering the first one as a static image.
 * Use this flag in addition to the flag or parameter controlling the delivery format,
 * for example f_auto or fl_awebp.
 *
 * Note: When delivering a video in GIF format, it is delivered as an animated GIF by default and this flag is not
 * necessary. To deliver a single frame of a video in GIF format, use the page parameter.
 *
 * @return FlagAction
 */
function animated(): IFlagAction{
  return new FlagAction('animated');
}

export default animated;
