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

import React, {  FunctionComponent, ReactElement,useState, useEffect } from "react";
import { BlockAttributes, ColorTheme,WidgetApi } from "widget-sdk";
import CSS from "csstype";
import apiMock from '../dev/widget-api-mock/index';
/**
 * React Component
 */
export interface CountdownWidgetProps extends BlockAttributes {
  countdowndate: string;
  expiredmessage: string;
  boxescolortext: string;
  boxescolorborder: string;
}


export const CountdownWidget = ({boxescolorborder, boxescolortext, countdowndate, expiredmessage }: CountdownWidgetProps): ReactElement => {
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
    timeCountdown();
    setTheme(apiMock.getLegacyAppTheme());
});

const textcustomize: CSS.Properties = {
  // textAlign: "center",
  paddingTop : "5px",
  color: boxescolortext,
  fontSize: "16px",
  display: "inline-block",
  borderColor: boxescolorborder,

};

const numbercustomize: CSS.Properties = {
  // textAlign: "center",
  color: boxescolortext,
  borderColor: boxescolorborder,
};


  return <div>
    { distance < 0? (
      <div>{expiredmessage}</div>) 
      :
    <div style={{backgroundColor: theme?.bgColor}}>

        <div>
        <br />
        <div style={numbercustomize}>{days}</div>
        <span style={textcustomize}>Days</span>
        <br />
        </div>

        <div>
        <br />
        <div style={numbercustomize}>{hours}</div>
        <span style={textcustomize}>Hours</span>
        <br />
        </div>

        <div>
        <br />
        <div style={numbercustomize}>{minutes}</div>
        <span style={textcustomize}>Minutes</span>
        <br />
        </div>

        <div>
        <br />
        <div style={numbercustomize}>{seconds}</div>
        <span style={textcustomize}>Seconds</span> 
        <br />
        </div>

    </div>
   }
   
    </div>;
};
