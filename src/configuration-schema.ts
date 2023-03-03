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
  required: [
    "dayword",
    "hourword",
    "minuteword",
    "secondword",
    "dayswordplural",
    "hourswordplural",
    "secondswordplural",
    "minuteswordplural"
  ],
  properties: {  
    dayswordplural: {
      type: "string",
      title: "Days Word Plural",
      default: "Days"
    },
    hourswordplural: {
      type: "string",
      title: "Hours Word Plural",
      default: "Hours"
    },
    minuteswordplural: {
      type: "string",
      title: "Minutes Word Plural",
      default: "Minutes"
    },
    secondswordplural: {
      type: "string",
      title: "Seconds Word Plural",
      default: "Seconds"
    },
    dayword: {
      type: "string",
      title: "Day Word",
      default: "Day"
    },
    hourword: {
      type: "string",
      title: "Hour Word",
      default: "Hour"
    },
    minuteword: {
      type: "string",
      title: "Minute Word",
      default: "Minute"
    },
    secondword: {
      type: "string",
      title: "Second Word",
      default: "Second"
    },
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
    boxescolortext: {
      type: "string",
      title: "Text Color",
      default: "#000000"
    },
    boxescolorbg: {
      type: "string",
      title: "Background Color",
      default: "#FFFFFF",
    },
    showbackground: {
      type: "boolean",
      title: "Show Background Color as App Theme",
      enum:[true,false]
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  dayswordplural: {
    "ui:help": "Choose a word to display for number of day left in countdown."
  },
  hourswordplural: {
    "ui:help": "Choose a word to display for number of hours left in countdown."
  },
  minuteswordplural: {
    "ui:help": "Choose a word to display for number of minutes left in countdown."
  },
  secondswordplural: {
    "ui:help": "Choose a word to display for number of seconds left in countdown."
  },
  dayword: {
    "ui:help": "Choose a word to display if less that 1 day left in countdown."
  },
  hourword: {
    "ui:help": "Choose a word to display if less that 1 hour left in countdown."
  },
  minuteword: {
    "ui:help": "Choose a word to display if less that 1 minute left in countdown."
  },
  secondword: {
    "ui:help": "Choose a word to display if less that 1 second left in countdown."
  },
  countdowndate: {
    "ui:help": "Choose a date and time for the countdown."
  },
  expiredmessage: {
    "ui:help": "Enter an expired message for the countdown."
  },
  boxescolortext: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the text in the countdown boxes. Default: #FFFFFF"
  },
  boxescolorbg: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the background of the countdown boxes. Default: #FBC91E"
  },
  showbackground: {
    "ui:help": "Do you want to display the Background Color as App them Color?"
  },
};
