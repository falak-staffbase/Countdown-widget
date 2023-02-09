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

import { count } from "console";
import React, { ReactElement,useState, useEffect } from "react";
import { BlockAttributes } from "widget-sdk";
import CSS from "csstype";

/**
 * React Component
 */
export interface CountdownWidgetProps extends BlockAttributes {
  title: string;
  showtitle: boolean;
  titlecolor: string;
  countdowndate: string;
  expiredmessage: string;
  boxescolorbg: string;
  boxescolortext: string;
  boxescolorborder: string;
}

export const CountdownWidget = ({title, showtitle, titlecolor, boxescolorbg, boxescolorborder, boxescolortext, countdowndate, expiredmessage  }: CountdownWidgetProps): ReactElement => {

  // Setup date values
  const targetDate = new Date(countdowndate).getTime();

  // Setup state variables
  const [distance, setDistance] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  
  // Timer function to count down
  const timeCountdown = () => {
      const now = new Date().getTime();
      setDistance(targetDate - now);

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));

      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }

  // Execute timer once on mount
  useEffect(() => {        
      setInterval(timeCountdown, 1000);    
  });

  const titlecustomize: CSS.Properties = {
    // textAlign: "center",
    textSizeAdjust :boxescolortext,
    color: titlecolor,
    border:boxescolorborder, 
    fontSize: "22.4px",
  };

  const countdowncustomize: CSS.Properties = {
    // textAlign: "center",
    textSizeAdjust :boxescolortext,
    backgroundColor: boxescolorbg,
    color: 'black',
    fontSize: "22.4px",
    paddingTop : "5px",
  };

  const textcustomize: CSS.Properties = {
    // textAlign: "center",
    paddingTop : "5px",
    color: 'black',
    borderRadius:"3px", 
    fontSize: "16px",
    border:"1px",
    borderStyle:"dotted",
    borderBlockColor:boxescolorborder,
    display: "inline-block"
  };


  return <div>
   { 
    showtitle ? (
    <div><span style= {titlecustomize}>{title} </span> </div>
    ) :
    <div> </div>
   }
      { distance < 0? (
      <div>{expiredmessage}</div>
    ) :
    <div>
      <div style = {countdowncustomize}>
        <span style={textcustomize}>&nbsp;{days}&nbsp;Days&nbsp;</span><span style={textcustomize}>&nbsp;{hours}&nbsp;Hours&nbsp;</span><span style={textcustomize}>&nbsp;{minutes}&nbsp;Minutes&nbsp;</span><span style={textcustomize}>&nbsp;{seconds}&nbsp;Seconds&nbsp;</span>  
      </div>      
    </div>
   }
   
    </div>;
};