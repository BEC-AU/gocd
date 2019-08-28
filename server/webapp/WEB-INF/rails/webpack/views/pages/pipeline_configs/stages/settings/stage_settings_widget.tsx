/*
 * Copyright 2019 ThoughtWorks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {MithrilComponent} from "jsx/mithril-component";
import m from "mithril";
import Stream from "mithril/stream";
import {StageConfig} from "models/new_pipeline_configs/stage_configuration";
import * as Icons from "views/components/icons/index";
import {StageSettingsModal} from "views/pages/pipeline_configs/stages/settings/stage_settings_modal";

interface State {
  onStageSettingsClick: (e: MouseEvent) => void;
}

interface Attrs {
  stageConfig: Stream<StageConfig>;
}

export class StageSettingsWidget extends MithrilComponent<Attrs, State> {
  oninit(vnode: m.Vnode<Attrs, State>) {
    vnode.state.onStageSettingsClick = (e: MouseEvent) => {
      e.stopPropagation();
      new StageSettingsModal(vnode.attrs.stageConfig).render();
    };

    // vnode.state.onStageSettingsClick({stopPropagation: function () {}} as MouseEvent);
  }

  view(vnode: m.Vnode<Attrs, State>) {
    return <div data-test-id="stage-settings-container">
      <p>Click the gear icon to see the stage settings</p>
      <Icons.Settings iconOnly={true} onclick={vnode.state.onStageSettingsClick}/>
    </div>;
  }
}