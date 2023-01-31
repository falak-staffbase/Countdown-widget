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
import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";
import CSS from "csstype";
import * as ReactDOM from 'react-dom';

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
  
  const targetDate = new Date(countdowndate);

  function countdown() {
    const currentDate = new Date();
    const timeDiff = Number(targetDate) - Number(currentDate);
  
    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    return [timeDiff,days,hours,minutes,seconds];
  }
  
  React.useEffect(()=>{
    setInterval(()=>{countdown(),1000})
  }
  )

  const [timeDiff,days,hours,minutes,seconds] = countdown();


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
      { 
    timeDiff < 0? (
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

