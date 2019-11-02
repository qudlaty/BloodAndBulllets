(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,,,,function(t,e,i){t.exports=i(20)},,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),s=i(8),o=i(1),r=i(2),c=i(4),l=i(3),u=i(6),p=i(5),h=(i(14),function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e="square";this.props.active&&(e+=" active"),this.props.value&&(this.props.isBreathing?e+=" breathing":e+=" dead",this.props.isShooting&&(e+=" shooting"));var i="".concat((Math.random()+.5).toFixed(2),"s"),n=this.props.isBreathing?"breathing ".concat(i," alternate infinite"):"none",s=this.props.targetPosition,o=5,r=[],c="";if(s){for(c="\n        @keyframes shooting {\n          0%   {transform: scale(1);}\n          100% {transform: translate(\n            ".concat(35*s.x,"px,\n            ").concat(36*(s.y-1),"px\n          )}\n        }\n\n        ");o--;)c+="\n        .projectile".concat(o," {\n          position: absolute;\n          top: 16px;\n          left: 16px;\n          animation: shooting 0.5s linear infinite;\n          animation-delay: ").concat(.5*o,"s;\n          color: white;\n        }");var l=this.props.isShooting?"*":"";for(o=5;o--;){var u="projectile projectile".concat(o);r.push(a.a.createElement("div",{key:u,className:u},l))}}return a.a.createElement("button",{className:e,onClick:function(){return t.props.onClick(t.props.squareId)}},a.a.createElement("div",{className:"content",style:{animation:n}},this.props.value),a.a.createElement("style",null,c),r)}}]),e}(a.a.PureComponent)),m=(i(15),function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(c.a)(this,Object(l.a)(e).call(this,t))).renderCounter=0,i.handleClick=i.handleClick.bind(Object(u.a)(i)),i}return Object(p.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){console.log("Handles Click on Board",t),this.props.onClick(t)}},{key:"renderSquare",value:function(t,e,i){return a.a.createElement(h,{squareId:t,position:this.props.squares[t]&&this.props.squares[t].position,value:this.props.squares[t]&&this.props.squares[t].value,active:this.props.squares[t]&&this.props.squares[t].active,isBreathing:this.props.squares[t]&&this.props.squares[t].isBreathing,isShooting:this.props.squares[t]&&this.props.squares[t].isShooting,targetPosition:this.props.squares[t]&&this.props.squares[t].targetPosition,onClick:this.handleClick,key:t,rowNumber:e,colNumber:i})}},{key:"render",value:function(){var t,e=this,i=0,n=0,s=Array(this.props.size).fill(null).map((function(s,o){t=0;var r=Array(e.props.size).fill(null).map((function(a,s){return e.renderSquare(i++,n,t++)}));return a.a.createElement("div",{key:n++,className:"board-row"},r)})),o="board "+this.props.className;return a.a.createElement("div",{className:o},s)}}]),e}(a.a.PureComponent)),d=(i(16),function(t){function e(){var t,i;Object(o.a)(this,e);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(i=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).renderCount=0,i}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t="entity";this.props.entity.active&&(t+=" active");var e=this.props.entity,i=e.isBreathing?"ALIVE":"DEAD";return a.a.createElement("div",{className:t},a.a.createElement("div",{className:"position",title:"Position"},a.a.createElement("span",null,"[",e.position.x,", ",this.props.entity.position.y,"]")),a.a.createElement("div",{className:"portrait"},this.props.entity.value),a.a.createElement("strong",{title:"Name"},this.props.entity.name),a.a.createElement("em",{title:"Age"}," (",this.props.entity.age,")")," ",i,a.a.createElement("br",null),a.a.createElement("span",null,"HP: ",this.props.entity.hp,"/",this.props.entity.maxHp),a.a.createElement("progress",{title:"HP",max:this.props.entity.maxHp,value:this.props.entity.hp,percent:~~(100*this.props.entity.hp/this.props.entity.maxHp)}))}}]),e}(a.a.Component)),f=(i(17),function(t){function e(){var t,i;Object(o.a)(this,e);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(i=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).renderCounter=0,i}return Object(p.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.props.entities.map((function(t){return a.a.createElement(d,{entity:t,key:t.name})}));return a.a.createElement("div",{className:"listOfEntities"},"List of Entities: ",t)}}]),e}(a.a.Component)),v=(i(18),function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(c.a)(this,Object(l.a)(e).call(this,t))).renderCounter=0,i.stepNumber=0,i.squares=Array(25).fill(null),i.state={arenaSize:10,isBoardRotated:!1,entities:[{position:{x:0,y:0},value:"\ud83d\ude20",name:"John Rambo",age:40,hp:95,maxHp:100,inventory:["KA-BAR","M16"],equipment:{head:"Red Bandana"},isBreathing:!0},{position:{x:0,y:1},value:"\ud83d\udc69",name:"Ellen Ripley",age:30,hp:50,maxHp:65,inventory:["Motion Detector"],equipment:{head:"Afro"},isBreathing:!0,isShooting:!1,targetPosition:{x:5,y:10},damage:10},{position:{x:8,y:8},value:"\ud83d\udc19",name:"Octo",age:8,hp:88,maxHp:100,inventory:[],equipment:{},isBreathing:!0},{position:{x:5,y:5},value:"\ud83e\udd91",name:"Squid",age:5,hp:55,maxHp:100,inventory:[],equipment:{},isBreathing:!0}]},i.loop=i.loop.bind(Object(u.a)(i)),i.getSquare=i.getSquare.bind(Object(u.a)(i)),i.setSquare=i.setSquare.bind(Object(u.a)(i)),i.toggleRotateBoard=i.toggleRotateBoard.bind(Object(u.a)(i)),i}return Object(p.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.setSquaresAccordingToEntities(),this.loop()}},{key:"setSquaresAccordingToEntities",value:function(){var t=this;this.squares=Array(this.state.arenaSize*this.state.arenaSize).fill(null),this.state.entities.forEach((function(e){t.setSquare(e.position.x,e.position.y,e)}))}},{key:"getSquare",value:function(t,e){return this.squares[t*this.state.arenaSize+e]}},{key:"setSquare",value:function(t,e,i){var n=e*this.state.arenaSize+t;this.squares[n]=i}},{key:"loop",value:function(){var t=this;this.stepNumber++,this.setState((function(e){var i=JSON.parse(JSON.stringify(e.entities)),n=i[0];return n.isBreathing&&(n.position.x=n.position.x+1*Math.floor(2*Math.random())-1*Math.floor(2*Math.random()),n.position.y=n.position.y+1*Math.floor(2*Math.random())-1*Math.floor(2*Math.random()),n.position.y<0&&(n.position.y=0),n.position.x<0&&(n.position.x=0),n.position.y>t.state.arenaSize-1&&(n.position.y=4),n.position.x>t.state.arenaSize-1&&(n.position.x=4)),{entities:i}})),this.processEntities(),setTimeout(this.loop,1e3)}},{key:"processEntities",value:function(){this.setState((function(t){var e=JSON.parse(JSON.stringify(t.entities));return e.forEach((function(t){if(t.isShooting&&t.targetPosition){var i=e.filter((function(e){return e.position.x===t.targetPosition.x&&e.position.y===t.targetPosition.y}));console.log(i),i.forEach((function(e){e.hp-=t.damage,e.hp<=0&&(t.isShooting=!1)}))}t.hp<=0&&(t.hp=0,t.isBreathing=!1)})),{entities:e}})),this.setSquaresAccordingToEntities()}},{key:"handleBoardClick",value:function(t){var e=this,i=JSON.parse(JSON.stringify(this.state.entities));i.forEach((function(t){t.active=!1})),this.squares[t]?(this.selected&&(i.forEach((function(i){i.targetPosition=e.squares[t].position,"Ellen Ripley"===i.name&&(i.isShooting=!0)})),console.log("TARGET CHOSEN",this.selected.target)),this.selected=this.squares[t],this.selected.active=!0):(i.forEach((function(t){t.isShooting=!1})),this.selected=this.squares[t]),this.setState({entities:i})}},{key:"nuke",value:function(t){var e=this;this.setState((function(e){var i=JSON.parse(JSON.stringify(e.entities));return i.forEach((function(e){e.hp=e.hp-t})),{entities:i}}),(function(){e.processEntities()}))}},{key:"toggleRotateBoard",value:function(){this.setState({isBoardRotated:!this.state.isBoardRotated})}},{key:"render",value:function(){var t=this,e=this.state.isBoardRotated?"rotated-board":"";return a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(m,{squares:this.squares,onClick:function(e){return t.handleBoardClick(e)},size:this.state.arenaSize,className:e}),a.a.createElement(f,{entities:this.state.entities}),a.a.createElement("div",{className:"step-counter"},this.stepNumber)),a.a.createElement("div",{className:"game-info"},a.a.createElement("span",{className:"selected"},"Selected: ",this.selected&&this.selected.name),a.a.createElement("button",{onClick:function(){t.nuke(40)},className:"button button-nuke"},"Nuke All"),a.a.createElement("button",{onClick:this.toggleRotateBoard,className:"button"},"Rotate Board"),a.a.createElement("ul",null,a.a.createElement("li",null,"Click Ellen Ripley on the board, to select her."),a.a.createElement("li",null,"Click a target to shoot it."))))}}]),e}(a.a.PureComponent));i(19);Object(s.render)(a.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.4a71df3b.chunk.js.map