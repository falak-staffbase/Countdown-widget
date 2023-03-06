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
  showbackground: boolean;
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
  const [showbackgroundValue, setShowBackground] = React.useState(false);


  useEffect(() => {
    console.log("to test: if this use effect hitting on live")
    setShowBackground((prevState) => !prevState);
    }, [showbackground]);

  // Timer function to count down
  const timeCountdown = () => {
    const now = new Date().getTime();
    setDistance(targetDate - now);

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));

    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }

  setTimeout(()=>{timeCountdown()},1000)
  useEffect(() => {
    setTheme(widgetApi.getLegacyAppTheme())

  },[]);

  const textcustomize: CSS.Properties = {
    // textAlign: "center",
    color: boxescolortext,
    fontSize: "16px",
    display: "inline-block",
    textAlign:"center",
    width: "23.33%",
  };

  const numbercustomize: CSS.Properties = {
    // textAlign: "center",
    color: boxescolortext,
    display: "inline-block",
    width: "23.33%",
    textAlign:"center"
  };

  const parentcustomize: CSS.Properties = {
    // textAlign: "center",s
    padding: "20px",
    display: "block",
    width: "100%",
    background:showbackgroundValue? boxescolorbg: theme?.bgColor
  };

//  <div style={parentcustomize} ></div> 

  console.log("showbackground",showbackground)
  console.log("backgroundColor",boxescolorbg)
  console.log("backgroundColorapp",theme?.bgColor)
  console.log("showbackgroundValue",showbackgroundValue)
  console.log("setShowBackground",setShowBackground)
  console.log("theme",theme)
  console.log("boxescolorbg",boxescolorbg)

  return <div className="cw-countdown-main">
    {distance < 0 ? (
      <div className="cw-countdown-expired">{expiredmessage}</div>)
      :
      <div className="countdown-master"  style={parentcustomize} >
          <div className="cw-countdown-number" >
            <br />
            <span  style={numbercustomize}>{days}</span>
            <span  style={numbercustomize}>{hours}</span>
            <span  style={numbercustomize}>{minutes}</span>
            <span style={numbercustomize}>{seconds}</span>
            <br />
          </div>

          <div className="cw-countdown-text">
            <br />
            <span style={textcustomize}>
              {days <= 1 ? dayword : dayswordplural}
            </span>
            <span style={textcustomize}>
              {hours <= 1 ? hourword : hourswordplural}
            </span>
            <span style={textcustomize}>
              {minutes <= 1 ? minuteword : minuteswordplural}
            </span>
            <span style={textcustomize}>
              {seconds <= 1 ? secondword : secondswordplural}
            </span>
            <br />
          </div>

      </div>
    }
  </div>;
};