<#--
 * Copyright 2022 Thoughtworks, Inc.
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
 -->
<#-- @ftlvariable name="modification_extra_attrs" type="java.lang.String" -->
<div id="tab-content-of-materials" class="widget" ${modification_extra_attrs}>
    <script type="text/javascript">
        var json = ${presenter.getMaterialRevisionsJson()};
    </script>
    <script type="text/javascript">
        Event.observe(window, 'load', function(){
            $('tab-content-of-materials').innerHTML = $('tab-content-of-materials-template').value.process({revisions:json});
        });
    </script>
    <#include '_material_revisions_jstemplate.ftl'>
</div>
