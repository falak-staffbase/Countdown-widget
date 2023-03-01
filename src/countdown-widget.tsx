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

import React, { ReactElement, useState, useEffect } from "react";
import { ColorTheme, WidgetApi } from "widget-sdk";
import CSS from "csstype";
/**
 * React Component
 */
export interface CountdownWidgetProps {
  countdowndate: string;
  expiredmessage: string;
  boxescolortext: string;
  boxescolorbg: string;
  showbackground: string;
  dayword: string;
  hourword: string;
  minuteword: string;
  secondword: string;
  dayswordplural: string;
  hourswordplural: string;
  secondswordplural: string;
  minuteswordplural: string;
  widgetApi: WidgetApi;
}


export const CountdownWidget = ({ dayword, hourword, minuteword, secondword, dayswordplural, hourswordplural, minuteswordplural, secondswordplural, widgetApi, boxescolortext, countdowndate, expiredmessage, boxescolorbg, showbackground }: CountdownWidgetProps): ReactElement => {
  // Setup date values
  const targetDate = new Date(countdowndate).getTime();
  // Setup state variables
  const [distance, setDistance] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [theme, setTheme] = React.useState<ColorTheme | null>(null);

  // Timer function to count down
  const timeCountdown = () => {
    const now = new Date().getTime();
    setDistance(targetDate - now);

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));

    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }

  useEffect(() => {
    timeCountdown()
    setTheme(widgetApi.getLegacyAppTheme());

  });

  const textcustomize: CSS.Properties = {
    // textAlign: "center",
    paddingTop: "5px",
    color: boxescolortext,
    fontSize: "16px",
    display: "inline-block",
    paddingRight: "20px",
  };

  const numbercustomize: CSS.Properties = {
    // textAlign: "center",
    paddingLeft: "15px",
    color: boxescolortext,
    display: "inline-block",
    width: "70px"
  };

  const parentcustomize: CSS.Properties = {
    // textAlign: "center",s
    paddingBottom: "20px",
    display: "inline-block",
  };

  return <div className="cw-countdown-main">
    {distance < 0 ? (
      <div className="cw-countdown-expired">{expiredmessage}</div>)
      :
      <div style={parentcustomize}>
        <div style={showbackground ? { backgroundColor: boxescolorbg } : { backgroundColor: theme?.bgColor, display: "inline-block" }}>

          <div>
            <br />
            <div className="cw-countdown-number cw-countdown-days" style={numbercustomize}>{days}</div>
            <span className="cw-countdown-number-text cw-countdown-days-text" style={textcustomize}>
              {days <= 1 ? dayword : dayswordplural}
            </span>
            <br />
          </div>

          <div>
            <br />
            <div className="cw-countdown-number cw-countdown-hours" style={numbercustomize}>{hours}</div>
            <span className="cw-countdown-number-text cw-countdown-hours-text" style={textcustomize}>
              {hours <= 1 ? hourword : hourswordplural}
            </span>
            <br />
          </div>

          <div>
            <br />
            <div className="cw-countdown-number cw-countdown-minutes" style={numbercustomize}>{minutes}</div>
            <span className="cw-countdown-number-text cw-countdown-minutes-text" style={textcustomize}>
              {minutes <= 1 ? minuteword : minuteswordplural}
            </span>
            <br />
          </div>

          <div>
            <br />
            <div className="cw-countdown-number cw-countdown-seconds" style={numbercustomize}>{seconds}</div>
            <span className="cw-countdown-number-text cw-countdown-seconds-text" style={textcustomize}>
              {seconds <= 1 ? secondword : secondswordplural}
            </span>
            <br />
          </div>
        </div>
      </div>
    }
  </div>;
};