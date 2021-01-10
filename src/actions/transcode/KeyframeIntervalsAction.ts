import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {toFloatAsString} from "../../internal/utils/toFloatAsString";

/**
 * @extend {SDK.Action}
 * @memberOf Actions.Transcode
 * @description Controls the keyframe interval of the delivered video.
 */
class KeyframeIntervalsAction extends Action {
  constructor(interval: number) {
    super();
    this.addQualifier(new Qualifier('ki', toFloatAsString(interval)));
  }
}

export default KeyframeIntervalsAction;
