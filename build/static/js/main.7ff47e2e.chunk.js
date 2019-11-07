(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(21)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(8),s=n(1),r=n(2),c=n(4),l=n(3),u=n(6),p=n(5),h=(n(14),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(i)))).renderCounter=0,n}return Object(p.a)(e,t),Object(r.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return JSON.stringify(t)!==JSON.stringify(this.props)}},{key:"render",value:function(){var t=this;this.renderCounter++;var e="square",n="Sq".concat(this.props.squareId);this.props.active&&(e+=" active"),this.props.icon&&(this.props.isBreathing?e+=" breathing":e+=" dead",this.props.isShooting&&(e+=" shooting"));var a="".concat((Math.random()+.5).toFixed(2),"s"),o=this.props.isBreathing?"breathing ".concat(a," alternate infinite linear"):"none",s=this.props.targetPosition,r=5,c=[],l="";if(this.props.targetPosition&&this.props.position&&this.props.isShooting&&(this.props.targetPosition.x!==this.props.position.x||this.props.targetPosition.y!==this.props.position.y)&&s){var u=38*(s.x-this.props.position.x),p=38*(s.y-this.props.position.y),h=Math.sqrt(Math.pow(u,2)+Math.pow(p,2));if("Lazer"===this.props.weaponType){var d="projectile".concat(n,"_beam"),m=function(t,e){var n;return e>=0?n=-Math.atan(t/e)*(180/Math.PI):e<0&&(n=180/Math.PI*(Math.atan(t/-e)+Math.PI)),n}(u,p);l="\n            @keyframes pulsing".concat(n," {\n              0%  {opacity: 0.1;}\n              100%  {opacity: 1;}\n            }\n\n            @keyframes elongating").concat(n," {\n              0%  {width: ").concat(h-20,";}\n              100%  {width: ").concat(h+20,";}\n            }\n\n            .").concat(d," {\n              width: ").concat(h,"px;\n              height: 3px;\n              border-radius: 5px;\n              background: #F00;\n              position: absolute;\n              top: 16px;\n              left: 16px;\n\n              transform: rotate(").concat(m+90,"deg);\n              transform-origin: left 0px;\n              animation: pulsing").concat(n," 0.1s linear infinite,\n              elongating").concat(n," 1s linear alternate infinite;\n              box-shadow: 0 0 5px 5px white;\n              z-index: 10;\n            }\n\n            "),c.push(i.a.createElement("div",{key:d,className:d},""))}else{for(l="\n            @keyframes shooting".concat(n," {\n              0%   {transform: scale(1);}\n              100% {transform: translate(\n                ").concat(36*(s.x-this.props.position.x),"px,\n                ").concat(36*(s.y-this.props.position.y),"px\n              )}\n            }\n\n            ");r--;)l+="\n            .projectile".concat(n,"_").concat(r," {\n              position: absolute;\n              top: 5px;\n              left: 0px;\n              width: 100%;\n              height: 100%;\n              line-height: 34px;\n              font-size: 17px;\n              animation: shooting").concat(n," 0.5s linear infinite;\n              animation-delay: ").concat(.5*r,"s;\n              color: white;\n            }");var y=this.props.isShooting?"*":"";for(r=5;r--;){var f="projectile projectile".concat(n,"_").concat(r);c.push(i.a.createElement("div",{key:f,className:f},y))}}}return i.a.createElement("button",{className:e,onClick:function(){return t.props.onClick(t.props.squareId)}},i.a.createElement("div",{className:"blood"},this.props.blood),i.a.createElement("div",{className:"content",style:{animation:o}},this.props.icon),i.a.createElement("style",null,l),c)}}]),e}(i.a.Component)),d=(n(15),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).renderCounter=0,n.handleClick=n.handleClick.bind(Object(u.a)(n)),n}return Object(p.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){console.log("Handles Click on Board",t),this.props.onClick(t)}},{key:"renderSquare",value:function(t,e,n){var a=this.props.squares[t],o=this.props.squares[t]&&this.props.squares[t].entity;return i.a.createElement(h,{key:t,squareId:t,rowNumber:e,colNumber:n,onClick:this.handleClick,icon:o&&o.icon,active:o&&o.active,isBreathing:o&&o.isBreathing,blood:a&&a.blood,isShooting:o&&o.isShooting,weaponType:o&&o.inventory&&o.inventory[0],position:o&&o.position,targetPosition:o&&o.targetPosition})}},{key:"render",value:function(){var t,e=this,n=0,a=0,o=Array(this.props.size).fill(null).map((function(o,s){t=0;var r=Array(e.props.size).fill(null).map((function(i,o){return e.renderSquare(n++,a,t++)}));return i.a.createElement("div",{key:a++,className:"board-row"},r)})),s="board "+this.props.className;return i.a.createElement("div",{className:s},o)}}]),e}(i.a.PureComponent));n(16);function m(t){var e="linear-display ".concat(t.className||""),n=~~(100*t.current/t.max),a=n>100;a&&(n=100,e+=" overload ");var o={width:"".concat(n,"%")},s=t.title||"".concat(t.current,"/").concat(t.max);return i.a.createElement("div",{className:e},i.a.createElement("div",{className:"linear-display__label"},t.label,":\xa0"),i.a.createElement("div",{className:"linear-display__bar-container",title:s},i.a.createElement("div",{className:"linear-display__bar-progress",style:o},i.a.createElement("span",{className:"linear-display__bar-progress-text"},t.current,a?"/"+t.max:"","\xa0"))),i.a.createElement("div",null,"\xa0"))}n(17);var y=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(i)))).renderCount=0,n}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.props.entity,e="entity";t.active&&(e+=" active");var n=t.isBreathing?"ALIVE":"DEAD";return i.a.createElement("div",{className:e},i.a.createElement("div",null,i.a.createElement("div",{className:"portrait"},t.icon),i.a.createElement("div",{className:"position",title:"Position"},i.a.createElement("span",null,"[",t.position.x,", ",t.position.y,"]"))),i.a.createElement("strong",{title:"Name"},t.name),i.a.createElement("em",{title:"Age"}," (",t.age,")"),i.a.createElement("br",null)," ",n,i.a.createElement("br",null),i.a.createElement("div",{style:{clear:"both",display:"inline-block",textAlign:"right"}},i.a.createElement(m,{label:"HP",current:t.hp,max:t.maxHp}),i.a.createElement("br",null),i.a.createElement(m,{label:"Rounds",current:t.rounds,max:t.maxRounds})))}}]),e}(i.a.Component),f=(n(18),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(i)))).renderCounter=0,n}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.props.entities.map((function(t){return i.a.createElement(y,{entity:t,key:t.name})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",{className:"list-of-entities__header"},"List of Entities:"),i.a.createElement("div",{className:"list-of-entities"},t))}}]),e}(i.a.Component)),g=[{name:"John Rambo",age:40,hp:95,maxHp:100,icon:"\ud83d\ude20",isBreathing:!0,isFriendly:!0,position:{x:0,y:0},inventory:["KA-BAR","M16"],equipment:{head:"Red Bandana"},damage:1,rounds:10,maxRounds:15,hasWeapon:!0},{name:"Ellen Replay",age:30,hp:50,maxHp:65,icon:"\ud83d\udc69",isBreathing:!0,isFriendly:!0,position:{x:0,y:1},inventory:["Lazer","Motion Detector"],equipment:{head:"Afro"},damage:1,rounds:10,maxRounds:10,hasWeapon:!0},{name:"Lazer Blady",age:60,hp:75,maxHp:100,icon:"\ud83e\uddd1\ud83c\udffb",isBreathing:!0,isFriendly:!0,position:{x:4,y:8},inventory:["Lazer"],equipment:{},damage:10,rounds:3,maxRounds:3,hasWeapon:!0},{name:"Octo",age:8,hp:288,maxHp:300,icon:"\ud83d\udc19",isBreathing:!0,position:{x:8,y:8}},{name:"Squid",age:5,hp:55,maxHp:55,icon:"\ud83e\udd91",isBreathing:!0,position:{x:5,y:5}},{name:"Ant",age:1,hp:35,maxHp:40,icon:"\ud83d\udc1c",isBreathing:!0,position:{x:7,y:6}},{name:"Spider",age:1,hp:60,maxHp:50,icon:"\ud83d\udd77\ufe0f",isBreathing:!0,position:{x:9,y:3}},{name:"Mosquito",age:1,hp:12,maxHp:20,icon:"\ud83e\udd9f",isBreathing:!0,position:{x:2,y:7}},{name:"Microbe",age:1,hp:1,maxHp:5,icon:"\ud83e\udda0",isBreathing:!0,position:{x:3,y:5}}],v=(n(19),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(c.a)(this,Object(l.a)(e).call(this,t))).renderCounter=0,n.stepNumber=0,n.nextTurn=function(){n.setState({autoLoop:!1}),n.loop()},n.addBlood=function(t,e){t&&(t.blood?t.blood++:t.blood=1)},n.switchAutoLoop=function(){n.setState((function(t){return{autoLoop:!t.autoLoop}}),(function(){n.state.autoLoop&&n.loop()}))},n.state={selected:null,arenaSize:10,isBoardRotated:!1,entities:g,squares:[],autoLoop:!0},n.loop=n.loop.bind(Object(u.a)(n)),n.getSquare=n.getSquare.bind(Object(u.a)(n)),n.setSquare=n.setSquare.bind(Object(u.a)(n)),n.setEntityWithinASquare=n.setEntityWithinASquare.bind(Object(u.a)(n)),n.toggleRotateBoard=n.toggleRotateBoard.bind(Object(u.a)(n)),n}return Object(p.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.loop()}},{key:"setSquaresAccordingToEntities",value:function(){var t=this;this.setState((function(e){var n=JSON.parse(JSON.stringify(e.squares));return e.entities.forEach((function(e){t.setEntityWithinASquare(n,e.position.x,e.position.y,e)})),{squares:n}}))}},{key:"getSquare",value:function(t,e,n){return t[this.targetSquareIndex(e,n)]}},{key:"setSquare",value:function(t,e,n,a){t[this.targetSquareIndex(e,n)]=a}},{key:"setEntityWithinASquare",value:function(t,e,n,a){var i=this.targetSquareIndex(e,n);t[i]||(t[i]={}),t[i].entity=a}},{key:"targetSquareIndex",value:function(t,e){return e*this.state.arenaSize+t}},{key:"loop",value:function(){var t=this;this.stepNumber++,this.setState((function(e){var n=JSON.parse(JSON.stringify(e)),a=n.entities,i=n.squares,o=a[0],s=t.findEntityById(a,"Squid");return o.isBreathing&&(t.moveEntityRandomly(i,o),t.moveEntityRandomly(i,s)),{entities:a,squares:i}})),this.processEntities(),this.state.autoLoop&&setTimeout(this.loop,1e3)}},{key:"moveEntityRandomly",value:function(t,e){var n=e.position.x,a=e.position.y;e.position.x=e.position.x+Math.floor(2*Math.random())-Math.floor(2*Math.random()),e.position.y=e.position.y+Math.floor(2*Math.random())-Math.floor(2*Math.random()),e.position.x<0&&(e.position.x=0),e.position.y<0&&(e.position.y=0),e.position.x>this.state.arenaSize-1&&(e.position.x=this.state.arenaSize-1),e.position.y>this.state.arenaSize-1&&(e.position.y=this.state.arenaSize-1),this.getSquare(t,e.position.x,e.position.y)&&(e.position.x=n,e.position.y=a),n===e.position.x&&a===e.position.y||this.setEntityWithinASquare(t,n,a,null)}},{key:"processEntities",value:function(){var t=this;this.setState((function(e){var n=JSON.parse(JSON.stringify(e.entities)),a=JSON.parse(JSON.stringify(e.squares));return n.forEach((function(e){if(e.isShooting&&e.targetPosition&&(e.targetPosition.x!==e.position.x||e.targetPosition.y!==e.position.y)){var i=0;"empty"!==e.rounds&&e.rounds>0?(console.log("firing"),e.rounds--,i=e.damage):0===e.rounds?(e.rounds="empty",e.isShooting=!1,e.damageApplied=0):"empty"===e.rounds&&(e.rounds=e.maxRounds,e.isShooting=!1,e.damageApplied=0),n.filter((function(t){return t.position.x===e.targetPosition.x&&t.position.y===e.targetPosition.y})).forEach((function(t){if(i&&(t.isBleeding=!0),t.hp-=i,t.hp<=0)return e.isShooting=!1,void console.log("target eliminated")}))}if(e.isBleeding){if(e.hp>0){e.hp-=1;var o=t.getSquare(a,e.position.x,e.position.y);t.addBlood(o,1)}console.log(e.position.x,e.position.y)}e.hp<=0&&(e.hp=0,e.isBreathing=!1)})),{entities:n,squares:a}}),(function(){t.setSquaresAccordingToEntities()}))}},{key:"getEntityId",value:function(t){return t.name}},{key:"findEntityById",value:function(t,e){return t.filter((function(t){return t.name===e}))[0]}},{key:"setSelected",value:function(t,e,n){var a=this.findEntityById(t,this.getEntityId(e));return n?e.active=n:(e=null,console.log("Nullified:",e)),a.active=n,e}},{key:"handleBoardClick",value:function(t){var e=this,n=function(t){t.forEach((function(t){t.active=!1}))};this.setState((function(a){var i=JSON.parse(JSON.stringify(a)),o=i.entities,s=i.squares,r=i.selected;if(s[t]&&s[t].entity)if(r&&!s[t].entity.isFriendly)if(r.name===a.squares[t].entity.name)r=e.setSelected(o,r,!1),console.log(r);else{var c=e.findEntityById(o,e.getEntityId(r));c.targetPosition=a.squares[t].entity.position,c.hasWeapon&&(c.isShooting=!0)}else n(o),r=s[t].entity,e.setSelected(o,r,!0);else n(o),o.forEach((function(t){t.isShooting=!1})),r=null;return{entities:o,squares:s,selected:r}}),(function(){e.processEntities()}))}},{key:"nuke",value:function(t){var e=this;this.setState((function(e){var n=JSON.parse(JSON.stringify(e.entities));return n.forEach((function(e){e.hp=e.hp-t})),{entities:n}}),(function(){e.processEntities()}))}},{key:"toggleRotateBoard",value:function(){this.setState({isBoardRotated:!this.state.isBoardRotated})}},{key:"render",value:function(){var t=this,e=this.state.isBoardRotated?"rotated-board":"";return i.a.createElement("div",{className:"game"},i.a.createElement("div",{className:"game-board"},i.a.createElement(d,{squares:this.state.squares,onClick:function(e){return t.handleBoardClick(e)},size:this.state.arenaSize,className:e})),i.a.createElement("div",{className:"game-info"},i.a.createElement("span",{className:"selected"},"Selected: ",this.state.selected&&this.state.selected.name),i.a.createElement("button",{onClick:function(){t.nuke(40)},className:"button button-nuke"},"Nuke All"),i.a.createElement("button",{onClick:this.toggleRotateBoard,className:"button"},"Rotate Board"),i.a.createElement("button",{onClick:this.nextTurn,className:"button"},"Next Step"),i.a.createElement("span",{className:"step-counter"},"Turn: ",this.stepNumber),i.a.createElement("label",{className:"auto-cycle button"},i.a.createElement("input",{type:"checkbox",checked:this.state.autoLoop?"checked":"",onChange:this.switchAutoLoop}),i.a.createElement("span",null,"Auto Cycle")),i.a.createElement("ul",null,i.a.createElement("li",null,"Click Ellen Ripley on the board, to select her."),i.a.createElement("li",null,"Click a target to shoot it."))),i.a.createElement("div",{className:"game-list"},i.a.createElement(f,{entities:this.state.entities})))}}]),e}(i.a.PureComponent));n(20);Object(o.render)(i.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7ff47e2e.chunk.js.map