/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  properties: {  
    countdowndate: {
      type: "string",
      title: "Countdown Date + Time",
      format: "date-time"
    },
    expiredmessage: {
      type: "string",
      title: "Expired Message",
      default: "Countdown is done."
    },
    boxescolorborder: {
      type: "string",
      title: "Border Color",
      default: "#FBC91E"
    },
    boxescolortext: {
      type: "string",
      title: "Text Color",
      default: "#FFFFFF"
    },
    boxescolorbg: {
      type: "string",
      title: "Background Color",
      default: "#FBC91E"
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  countdowndate: {
    "ui:help": "Choose a date and time for the countdown."
  },
  expiredmessage: {
    "ui:help": "Enter an expired message for the countdown."
  },
  boxescolorbg: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the background of the countdown boxes. Default: #FBC91E"
  },
  boxescolorborder: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the border of the countdown boxes. Default: #FBC91E"
  },
  boxescolortext: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the text in the countdown boxes. Default: #FFFFFF"
  },
};
