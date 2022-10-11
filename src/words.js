import React from "react";

let programminglanguage=[
"java ",
"python",
"visualbasic" ,
"javaScript",
"php",
"sql",
"cobal",
"react",
"javaScript",
"node",
"c",
"mangodb",
"salesforce",
"blockchain",
"visualbasic"
]

export function randomword()
{
    var index=Math.floor(Math.random()*programminglanguage.length);
    return programminglanguage[index];
}