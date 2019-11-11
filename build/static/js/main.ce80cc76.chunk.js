(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(8),s=n(1),r=n(5),l=n(3),c=n(2),u=n(4),p=n(6),h=(n(14),function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).renderCounter=0,n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return JSON.stringify(e)!==JSON.stringify(this.props)}},{key:"render",value:function(){var e=this;this.renderCounter++;var t="square",n="Sq".concat(this.props.squareId);this.props.active&&(t+=" active "),this.props.isAvailableDestination&&(t+=" is-available-destination "),this.props.isChosenDestination&&(t+=" is-chosen-destination "),this.props.icon&&(this.props.isBreathing?t+=" breathing":t+=" dead",this.props.isShooting&&(t+=" shooting"));var i="".concat((Math.random()+.5).toFixed(2),"s"),o=this.props.isBreathing?"breathing ".concat(i," alternate infinite linear"):"none",s=this.props.targetPosition,r=5,l=[],c="";if(this.props.targetPosition&&this.props.position&&this.props.isShooting&&(this.props.targetPosition.x!==this.props.position.x||this.props.targetPosition.y!==this.props.position.y)&&s){var u=38*(s.x-this.props.position.x),p=38*(s.y-this.props.position.y),h=Math.sqrt(Math.pow(u,2)+Math.pow(p,2));if("lazer"===this.props.weaponType){var m="projectile".concat(n,"_beam"),d=function(e,t){var n;return t>=0?n=-Math.atan(e/t)*(180/Math.PI):t<0&&(n=180/Math.PI*(Math.atan(e/-t)+Math.PI)),n}(u,p);c="\n            @keyframes pulsing".concat(n," {\n              0%  {opacity: 0.1;}\n              100%  {opacity: 1;}\n            }\n\n            @keyframes elongating").concat(n," {\n              0%  {width: ").concat(h-20,";}\n              100%  {width: ").concat(h+20,";}\n            }\n\n            .").concat(m," {\n              width: ").concat(h,"px;\n              height: 3px;\n              border-radius: 5px;\n              background: #F00;\n              position: absolute;\n              top: 16px;\n              left: 16px;\n\n              transform: rotate(").concat(d+90,"deg);\n              transform-origin: left 0px;\n              animation: pulsing").concat(n," 0.1s linear infinite,\n              elongating").concat(n," 1s linear alternate infinite;\n              box-shadow: 0 0 5px 5px white;\n              z-index: 10;\n            }\n\n            "),l.push(a.a.createElement("div",{key:m,className:m},""))}else{for(c="\n            @keyframes shooting".concat(n," {\n              0%   {transform: scale(1);}\n              100% {transform: translate(\n                ").concat(36*(s.x-this.props.position.x),"px,\n                ").concat(36*(s.y-this.props.position.y),"px\n              )}\n            }\n\n            ");r--;)c+="\n            .projectile".concat(n,"_").concat(r," {\n              position: absolute;\n              top: 5px;\n              left: 0px;\n              width: 100%;\n              height: 100%;\n              line-height: 34px;\n              font-size: 17px;\n              animation: shooting").concat(n," 0.5s linear infinite;\n              animation-delay: ").concat(.5*r,"s;\n              color: white;\n            }");var f=this.props.isShooting?"*":"";for(r=5;r--;){var v="projectile projectile".concat(n,"_").concat(r);l.push(a.a.createElement("div",{key:v,className:v},f))}}}return a.a.createElement("button",{className:t,onClick:function(){return e.props.onClick(e.props.squareId)}},a.a.createElement("div",{className:"blood"},this.props.blood),a.a.createElement("div",{className:"content",style:{animation:o}},this.props.icon),a.a.createElement("style",null,c),l)}}]),t}(a.a.Component)),m=(n(15),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).renderCounter=0,n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){console.log("Handles Click on Board",e),this.props.onClick(e)}},{key:"renderSquare",value:function(e,t,n){var i=this.props.squares[e],o=this.props.squares[e]&&this.props.squares[e].entity;return a.a.createElement(h,{key:e,squareId:e,rowNumber:t,colNumber:n,onClick:this.handleClick,icon:o&&o.icon,active:o&&o.active,isBreathing:o&&o.isBreathing,blood:i&&i.blood,isAvailableDestination:i&&i.isAvailableDestination,isChosenDestination:i&&i.isChosenDestination,isShooting:o&&o.isShooting,weaponType:o&&o.equipment&&o.equipment.hands&&o.equipment.hands.type,position:o&&o.position,targetPosition:o&&o.targetPosition})}},{key:"render",value:function(){var e,t=this,n=0,i=0,o=Array(this.props.size).fill(null).map((function(o,s){e=0;var r=Array(t.props.size).fill(null).map((function(a,o){return t.renderSquare(n++,i,e++)}));return a.a.createElement("div",{key:i++,className:"board-row"},r)})),s="board "+this.props.className;return a.a.createElement("div",{className:s},o)}}]),t}(a.a.PureComponent));n(16);function d(e){var t="linear-display ".concat(e.className||""),n=~~(100*e.current/e.max),i=n>100;i&&(n=100,t+=" overload ");var o={width:"".concat(n,"%")},s=e.title||"".concat(e.current,"/").concat(e.max);return a.a.createElement("div",{className:t},a.a.createElement("div",{className:"linear-display__label"},e.label,":\xa0"),a.a.createElement("div",{className:"linear-display__bar-container",title:s},a.a.createElement("div",{className:"linear-display__bar-progress",style:o},a.a.createElement("span",{className:"linear-display__bar-progress-text"},e.current,i?"/"+e.max:"","\xa0"))),a.a.createElement("div",null,"\xa0"))}n(17);function f(e){var t="inventory-list ".concat(e.className||"");if(!e.inventory)return null;var n=e.inventory.map((function(t){return a.a.createElement("div",{onClick:function(){return e.onClick(t.name||t)},key:t.name,className:"inventory-list__item"},a.a.createElement("span",null,t.name||t))}));return a.a.createElement("div",{className:t},a.a.createElement("div",{className:"inventory-list__label"},e.label,":\xa0"),a.a.createElement("div",{className:"inventory-list__container",title:e.title},n),a.a.createElement("div",null,"\xa0"))}n(18);var v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).renderCount=0,n.handleInventoryClick=function(e){n.props.onInventoryClick(n.props.entity,e)},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.entity,t=" entity ";e.active&&(t+=" active ");var n=e.isBreathing?" ALIVE ":" DEAD ";return t+=e.isFriendly?" friendly ":" unfriendly ",t+=n,a.a.createElement("div",{className:t},a.a.createElement("div",null,a.a.createElement("div",{className:"position",title:"Position"},a.a.createElement("span",null," ",e.position.x," ",e.position.y," ")),a.a.createElement("div",{className:"portrait"},e.icon)),a.a.createElement("strong",{title:"Name"},e.name),a.a.createElement("br",null)," ",n,a.a.createElement("br",null),a.a.createElement("div",{style:{clear:"both",display:"inline-block",textAlign:"right"}},a.a.createElement(d,{label:"HP",current:e.hp,max:e.maxHp}),a.a.createElement("br",null),a.a.createElement(d,{label:"Rounds",current:e.rounds,max:e.maxRounds})),a.a.createElement("div",null,"inHands: ",e.equipment&&e.equipment.hands&&e.equipment.hands.name||e.equipment&&e.equipment.hands),a.a.createElement(f,{label:"Inventory",title:"Inny ni\u017c dupa",onClick:this.handleInventoryClick,inventory:e.inventory}))}}]),t}(a.a.Component),y=(n(19),function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).renderCounter=0,n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.entities.filter((function(e){return e.isFriendly})).map((function(t){return a.a.createElement(v,{onInventoryClick:e.props.onInventoryClick,entity:t,key:t.name})})),n=this.props.entities.filter((function(e){return!e.isFriendly})).map((function(e){return a.a.createElement(v,{entity:e,key:e.name})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",{className:"list-of-entities__header"},"List of Entities:"),a.a.createElement("div",{className:"list-of-entities"},t),a.a.createElement("div",{className:"list-of-entities"},n))}}]),t}(a.a.Component)),g=function e(){Object(s.a)(this,e),this.causesBleeding=2,this.type="projectile"},b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).name="M16",n.rounds=15,n.maxRounds=20,n.damage=1,n}return Object(u.a)(t,e),t}(g),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).name="Assault Lazer Rifle",n.rounds=3,n.maxRounds=3,n.damage=10,n}return Object(u.a)(t,e),t}((function e(){Object(s.a)(this,e),this.type="lazer"})),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).name="M41A Pulse Rifle",n.rounds=40,n.maxRounds=40,n.damage=1,n}return Object(u.a)(t,e),t}(g),k=[{name:"John Rambo",age:40,hp:95,maxHp:100,icon:"\ud83d\ude20",isBreathing:!0,isFriendly:!0,position:{x:8,y:8},inventory:[{name:"KA-BAR"},new b],equipment:{head:"Red Bandana",hands:null},damage:1,rounds:10,maxRounds:15,hasWeapon:!0},{name:"Ellen Replay",age:30,hp:50,maxHp:65,icon:"\ud83d\udc69",isBreathing:!0,isFriendly:!0,position:{x:1,y:8},inventory:[new x,{name:"Motion Detector"}],equipment:{head:"Afro"},damage:1,rounds:10,maxRounds:10,hasWeapon:!0},{name:"Lazer Blady",age:60,hp:75,maxHp:100,icon:"\ud83e\uddd1\ud83c\udffb",isBreathing:!0,isFriendly:!0,position:{x:4,y:8},inventory:[new E],equipment:{},damage:10,rounds:3,maxRounds:3,hasWeapon:!0},{name:"Octo",age:8,hp:288,maxHp:300,icon:"\ud83d\udc19",isBreathing:!0,position:{x:8,y:2}},{name:"Squid",age:5,hp:55,maxHp:55,icon:"\ud83e\udd91",isBreathing:!0,position:{x:5,y:5}},{name:"Ant",age:1,hp:35,maxHp:40,icon:"\ud83d\udc1c",isBreathing:!0,position:{x:7,y:6}},{name:"Spider",age:1,hp:160,maxHp:150,icon:"\ud83d\udd77\ufe0f",isBreathing:!0,position:{x:9,y:3},bleedingReductionPerTurn:1},{name:"Mosquito",age:1,hp:12,maxHp:20,icon:"\ud83e\udd9f",isBreathing:!0,position:{x:2,y:7}},{name:"Microbe",age:1,hp:1,maxHp:5,icon:"\ud83e\udda0",isBreathing:!0,position:{x:3,y:5}}],O=10;function C(e,t,n){return e[S(t,n)]}function N(e,t,n,i){e[S(t,n)]=i}function S(e,t){return t*O+e}function A(e,t,n,i){var a=S(t,n);e[a]||(e[a]={}),e[a].entity=i}var j=10;function q(e,t,n){return e<t&&(e=t),e>n&&(e=n),e}function B(e,t){return Math.floor(Math.random()*(t-e+1))+e}function D(e){return e.name}function F(e,t){return e.filter((function(e){return e.name===t}))[0]}function w(e,t){if(t.isBreathing){var n=t.position.x,i=t.position.y;t.position.x=t.position.x+B(-1,1),t.position.y=t.position.y+B(-1,1),t.position.x=q(t.position.x,0,j-1),t.position.y=q(t.position.y,0,j-1);var a=C(e,t.position.x,t.position.y);a&&a.entity&&(t.position.x=n,t.position.y=i),n===t.position.x&&i===t.position.y||(A(e,n,i,null),A(e,t.position.x,t.position.y,t))}}n(20);var P=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).renderCounter=0,n.stepNumber=0,n.loop=function(){n.stepNumber++,n.processEntities(),n.state.autoLoop&&setTimeout(n.loop,1e3)},n.nextTurn=function(){n.setState({autoLoop:!1}),n.loop()},n.handleBoardClick=function(e){n.setState((function(t){var i=JSON.parse(JSON.stringify(t)),a=i.entities,o=i.squares,s=i.selected;if(o[e]&&o[e].entity)if(s&&!o[e].entity.isFriendly)if(s.name===t.squares[e].entity.name)s=n.setSelected(a,s,!1),console.log(s);else{var r=F(a,D(s));r.targetPosition=t.squares[e].entity.position,r.isShooting=!0}else!function(e){e.forEach((function(e){e.active=!1}))}(a),s=o[e].entity,n.setSelected(a,s,!0),n.resetGivenFieldOnACollection(o,"isChosenDestination");else if(o[e]&&o[e].isAvailableDestination){var l=function(e){var t;return t=Math.floor(e/O),{x:e%O,y:t}}(e),c=n.getEntitiesAtGivenPosition(a,s.position)[0];c&&(c.moveDestination=l),n.resetGivenFieldOnACollection(o,"isChosenDestination"),o[e].isChosenDestination=!0}else n.resetGivenFieldOnACollection(a,"active"),n.resetGivenFieldOnACollection(a,"isShooting"),s=null,n.resetGivenFieldOnACollection(o,"isChosenDestination"),n.resetGivenFieldOnACollection(o,"isAvailableDestination");return{entities:a,squares:o,selected:s}}),(function(){n.processEntities()}))},n.nuke=function(e){n.setState((function(t){var n=JSON.parse(JSON.stringify(t.entities));return n.forEach((function(t){t.hp=t.hp-e})),{entities:n}}),(function(){n.processEntities()}))},n.toggleRotateBoard=function(){n.setState({isBoardRotated:!n.state.isBoardRotated})},n.switchAutoLoop=function(){n.setState((function(e){return{autoLoop:!e.autoLoop}}),(function(){n.state.autoLoop&&n.loop()}))},n.onInventoryClick=function(e,t){n.setState((function(n){var i=JSON.parse(JSON.stringify(n)),a=F(i.entities,D(e)),o=F(a.inventory,t);return a.equipment.hands=o,i})),console.log(e,t)},n.state={selected:null,arenaSize:10,isBoardRotated:!1,entities:k,squares:[],autoLoop:!0},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.loop()}},{key:"setSquaresAccordingToEntities",value:function(){var e=this;this.setState((function(t){var n=JSON.parse(JSON.stringify(t.squares));return e.resetGivenFieldOnACollection(n,"entity"),t.entities.forEach((function(e){A(n,e.position.x,e.position.y,e)})),{squares:n}}))}},{key:"calculateNextGameState",value:function(e){var t=this,n=JSON.parse(JSON.stringify(e)),i=n.entities,a=n.squares,o=n.selected;return this.moveEntities(i,a,o),i.forEach((function(e){t.isEntityShootingProperly(e)&&t.fireAShot(i,e),e=t.applyEffectsOfBleeding(e,a),e=t.stopBreathingForKilledEntities(e),t.markAvailableDestinationsForSelectedEntity(e,a)})),n}},{key:"resetGivenFieldOnACollection",value:function(e,t){e.forEach((function(e){return e&&(e[t]=!1)}))}},{key:"markAvailableDestinationsForSelectedEntity",value:function(e,t){if(e.active){var n=e.position,i=n.x,a=n.y;this.resetGivenFieldOnACollection(t,"isAvailableDestination");for(var o=a-1;o<=a+1;o++)if(!(o<0||o>=this.state.arenaSize))for(var s=i-1;s<=i+1;s++)if(!(s<0||s>=this.state.arenaSize||s==i&&o==a)){var r=C(t,s,o);r||(r={}),r.isAvailableDestination=!0,N(t,s,o,r)}}}},{key:"moveEntities",value:function(e,t,n){var i=this;e.forEach((function(e){return i.moveEntityIntoChosenDestinations(n,e)}));var a=F(e,"John Rambo"),o=F(e,"Squid");w(t,a),w(t,o)}},{key:"moveEntityIntoChosenDestinations",value:function(e,t){t.isBreathing&&t.moveDestination&&(t.position=t.moveDestination,e.position=t.position,delete t.moveDestination)}},{key:"stopBreathingForKilledEntities",value:function(e){return e&&e.hp<=0&&(e.isBreathing=!1,e.hp=0),e}},{key:"applyEffectsOfBleeding",value:function(e,t){e.bleeding&&e.hp>0&&(e.hp-=e.bleeding,function(e,t){e||(e={}),e.blood?e.blood+=t:e.blood=t}(C(t,e.position.x,e.position.y),e.bleeding),e.bleeding-=e.bleedingReductionPerTurn||1);return e}},{key:"isEntityShootingProperly",value:function(e){return e.isShooting&&e.targetPosition&&(e.targetPosition.x!==e.position.x||e.targetPosition.y!==e.position.y)}},{key:"getEntitiesAtGivenPosition",value:function(e,t){return e.filter((function(e){return e.position.x===t.x&&e.position.y===t.y}))}},{key:"applyDamageToTargetEntity",value:function(e,t){t&&(e.hp-=t,e.bleeding=5)}},{key:"ceaseFireNextTurnIfTargetIsKilled",value:function(e,t){t.hp<0&&(e.ceaseFire=!0)}},{key:"checkAmmoAndCalculateDamageApplied",value:function(e){var t=0;return"empty"!==e.rounds&&e.rounds>0&&(e.rounds--,t=e.damage),0===e.rounds?e.rounds="empty":"empty"===e.rounds&&(e.rounds=e.maxRounds,e.isShooting=!1,e.damageApplied=0),t}},{key:"fireAShot",value:function(e,t){var n=this;if(t.ceaseFire)return t.isShooting=!1,void(t.ceaseFire=!1);var i=this.checkAmmoAndCalculateDamageApplied(t);this.getEntitiesAtGivenPosition(e,t.targetPosition).forEach((function(e){n.applyDamageToTargetEntity(e,i),n.ceaseFireNextTurnIfTargetIsKilled(t,e)}))}},{key:"processEntities",value:function(){var e=this;this.setState((function(t){return e.calculateNextGameState(t)}),(function(){return e.setSquaresAccordingToEntities()}))}},{key:"setSelected",value:function(e,t,n){var i=F(e,D(t));return n?t.active=n:(t=null,console.log("Nullified:",t)),i.active=n,t}},{key:"render",value:function(){var e=this,t=this.state.isBoardRotated?"rotated-board":"";return a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(m,{squares:this.state.squares,onClick:function(t){return e.handleBoardClick(t)},size:this.state.arenaSize,className:t})),a.a.createElement("div",{className:"game-info"},a.a.createElement("span",{className:"selected"},"Selected: ",this.state.selected&&this.state.selected.name),a.a.createElement("button",{onClick:function(){e.nuke(40)},className:"button button-nuke"},"Nuke All"),a.a.createElement("button",{onClick:this.toggleRotateBoard,className:"button"},"Rotate Board"),a.a.createElement("button",{onClick:this.nextTurn,className:"button"},"Next Step"),a.a.createElement("span",{className:"step-counter"},"Turn: ",this.stepNumber),a.a.createElement("label",{className:"auto-cycle button"},a.a.createElement("input",{type:"checkbox",checked:this.state.autoLoop?"checked":"",onChange:this.switchAutoLoop}),a.a.createElement("span",null,"Auto Cycle")),a.a.createElement("ul",null,a.a.createElement("li",null,"Click Ellen Replay on the board, to select her."),a.a.createElement("li",null,"Click a target to shoot it."))),a.a.createElement("div",{className:"game-list"},a.a.createElement(y,{entities:this.state.entities,onInventoryClick:this.onInventoryClick})))}}]),t}(a.a.PureComponent);n(21);Object(o.render)(a.a.createElement(P,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.ce80cc76.chunk.js.map