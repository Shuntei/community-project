import React,{ useState, useRef, useEffect } from 'react'


export const GameLevel=({thStages}) =>{
   const level =[];
   for(let i=0; i < thStages; i++) {
    const stage = [];
    const thOptions = 1+1;
    for (let j = 0; j < thOptions; j++) {
      let obj = null;
      while (!obj || stage.includes(obj)){
        obj = objs[Math.floor(Math.random() * objs.length)];
      }
      stage.push(obj);
    }
    stage[Math.floor(Math.random() * stage.length)].correct = true; level.push(stage);
   }
   return level;
  }