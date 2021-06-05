(()=>{"use strict";var t={198:(t,e,s)=>{s.d(e,{Z:()=>n});var i=s(645),o=s.n(i)()((function(t){return t[1]}));o.push([t.id,'body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    font-family: monospace;\r\n    font-size: 10px;\r\n    overflow: hidden;\r\n}\r\n\r\n#bar {\r\n    height: 20px;\r\n    width: 100%;\r\n    background-color: #352020;\r\n    color: #c0b0a0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: stretch;\r\n}\r\n\r\n#bar > button.action {\r\n    border: 0;\r\n    height: 100%;\r\n    background-color: #352020;\r\n    color: #c0b0a0;\r\n    cursor: pointer;\r\n}\r\n\r\n#bar > button.action:last-of-type {\r\n    border: 0;\r\n    height: 100%;\r\n    background-color: #352020;\r\n    color: #c0b0a0;\r\n    cursor: pointer;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n#bar > button.action:hover {\r\n    background-color: #c0b0a0;\r\n    color: #352020;\r\n}\r\n\r\n#bar > input[type=text].action {\r\n    border: 0;\r\n    border-bottom: solid 2px #c0b0a0;\r\n    color: #c0b0a0;\r\n    background: #00000000;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n#view {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.display {\r\n    display: inline;\r\n    position: fixed;\r\n    font-weight: bold;\r\n    top: 20px;\r\n    right: 0;\r\n    width: 30%;\r\n    max-height: 50%;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    background: #251a1a;\r\n    color: #c0b0a0;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    padding-bottom: 10px;\r\n    margin: 0;\r\n}\r\n\r\n.display_hide {\r\n    display: none;\r\n}\r\n\r\ncanvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\ncanvas:hover {\r\n    cursor: crosshair;\r\n}\r\n\r\ncanvas.grab:hover {\r\n    cursor: move;\r\n}\r\n\r\npre {\r\n    white-space: break-spaces;\r\n    font-family: "Liberation Mono", monospace;\r\n}\r\n\r\npre > em[type="note"] {\r\n    font-style: normal;\r\n    font-weight: lighter;\r\n}\r\n\r\npre > em[type="error"] {\r\n    color: #cf1510;\r\n    font-weight: lighter;\r\n}\r\n\r\npre > em[type="warn"] {\r\n    color: #d56f10;\r\n    font-weight: lighter;\r\n}\r\n\r\npre > em > b {\r\n    color: inherit;\r\n    font-weight: bold;\r\n}',""]);const n=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=t(e);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(t,s,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var n=0;n<this.length;n++){var r=this[n][0];null!=r&&(o[r]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);i&&o[h[0]]||(s&&(h[2]?h[2]="".concat(s," and ").concat(h[2]):h[2]=s),e.push(h))}},e}},662:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var i=s(379),o=s.n(i),n=s(198);o()(n.Z,{insert:"head",singleton:!1});const r=n.Z.locals||{}},379:(t,e,s)=>{var i,o=function(){var t={};return function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}t[e]=s}return t[e]}}(),n=[];function r(t){for(var e=-1,s=0;s<n.length;s++)if(n[s].identifier===t){e=s;break}return e}function a(t,e){for(var s={},i=[],o=0;o<t.length;o++){var a=t[o],h=e.base?a[0]+e.base:a[0],l=s[h]||0,c="".concat(h," ").concat(l);s[h]=l+1;var d=r(c),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(n[d].references++,n[d].updater(m)):n.push({identifier:c,updater:u(m,e),references:1}),i.push(c)}return i}function h(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var n=s.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,c=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,s,i){var o=s?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=c(e,o);else{var n=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(n,r[e]):t.appendChild(n)}}function m(t,e,s){var i=s.css,o=s.media,n=s.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,f=0;function u(t,e){var s,i,o;if(e.singleton){var n=f++;s=p||(p=h(e)),i=d.bind(null,s,n,!1),o=d.bind(null,s,n,!0)}else s=h(e),i=m.bind(null,s,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(s)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var s=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<s.length;i++){var o=r(s[i]);n[o].references--}for(var h=a(t,e),l=0;l<s.length;l++){var c=r(s[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}s=h}}}}},e={};function s(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={id:i,exports:{}};return t[i](n,n.exports,s),n.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t={editor:{0:{name:"empty",color:"#d0c8c0"},1:{name:"p_start",color:"#e04040"},2:{name:"i_door_hori",color:"#c0a850"},3:{name:"i_door_vert",color:"#c0a850"},4:{name:"o_door_hori",color:"#608040"},5:{name:"o_door_vert",color:"#608040"},6:{name:"e_door_hori",color:"#606040"},7:{name:"e_door_vert",color:"#606040"},8:{name:"ceil_light",color:"#56c025"},9:{name:"flood_light",color:"#369025"},10:{name:"alarm_light",color:"#166025"},16:{name:"light_enemy",color:"#d98080"},24:{name:"small_treasure",color:"#2020b9"},32:{name:"ammobox",color:"#901020"},128:{name:"i_rock_wall",color:"#583030"},129:{name:"i_metal_wall",color:"#785050"},130:{name:"o_planks_wall",color:"#305830"},131:{name:"o_marble_wall",color:"#507850"},132:{name:"i_red_wall",color:"#986060"},133:{name:"i_chip_wall",color:"#983030"},134:{name:"i_pipe_wall",color:"#584848"},254:{name:"e_term_wall",color:"#404040"},255:{name:"e_exit_wall",color:"#606060"}},game:{128:"i_rock_wall",129:"i_metal_wall",130:"o_planks_wall",131:"o_marble_wall",132:"i_red_wall",133:"i_chip_wall",134:"i_pipe_wall"},editor_find(t){return this.editor[t]}};class e{constructor(t){this.base_url=t,this.method="POST",this.headers={"Content-Type":"application/json"}}send(t,e,s=(t=>{console.log(t)}),i=(t=>{console.error(t)})){console.log(JSON.stringify(e)),fetch(this.base_url+t,{method:this.method,headers:this.headers,body:JSON.stringify(e)}).then((t=>t.text())).then((t=>{s(JSON.parse(t))})).catch((t=>{i(t)}))}}class i{constructor(t,e,s){this.name="",this.cols=e,this.rows=s,this.start=0,this.score=0,this.tiles=new Uint8Array(this.cols*this.rows)}encode(){return{name:this.name.replaceAll(/:;!@#\$%\^&\*\?<>/g," "),cols:this.cols,rows:this.rows,tiles:[...this.tiles]}}decode(t){this.name=t.name,this.cols=t.cols,this.rows=t.rows,this.tiles=new Uint8Array(t.tiles),this.start=this.tiles.findIndex((t=>1===t))}at(t){return this.tiles[t]}pos(t,e){return t<0||e<0||t>=this.cols||e>=this.rows?-1:e*this.cols+t}coord(t){return[t%this.cols,Math.floor(t/this.cols)]}at_coord(t,e){const s=this.pos(t,e);return-1===s?void 0:this.tiles[s]}adjacent(t){const e=this.cols;return[t-e,t-1,t+1,t+e]}neighbours(t){const e=this.cols;return[t-e-1,t-e,t-e+1,t-1,t+1,t+e-1,t+e,t+e+1]}resize(t,e){const s=this.tiles.slice(),i=Math.min(t,this.cols),o=Math.min(e,this.rows);this.tiles=new Uint8Array(t*e);for(let e=0;e<i;e++)for(let n=0;n<o;n++){const o=e+n*i,r=e+n*t;this.tiles[r]=s[o]}this.cols=t,this.rows=e}change(t,e){this.tiles[t]=e}from(t){this.name=t.name,this.rows=t.rows,this.cols=t.cols,this.tiles=t.tiles}walls(){const t=Array(256).fill(void 0),e=this.cols*this.rows;for(let s=0;s<e;s++){const e=this.tiles[s];try{t[e].push(s)}catch{t[e]=[s]}}return t}}class o{constructor(t=""){this.source=new e(t+"/maps/")}push(t=(()=>{}),e){console.log(e.encode()),this.source.send("push",e.encode(),(e=>{t("<b>Saved '"+e.text+"' map successfully.<b>\n","note")}),(s=>{t("<b>Saving '"+e.name+"' map failed - here's why:</b>\n"+s,"error")}))}pull(t=(()=>{}),e=(()=>{})){this.source.send("pull",{},(s=>{const o=new i("",0,0);o.decode(s),console.log(o),e(o),t("<b>Loaded '"+o.name+"' map successfully.</b>\n","note")}),(e=>{t("<b>Loading '"+name+"' map failed - here's why:</b>\n"+e,"error")}))}}s(662);const n=new i("NEWMAP",10,10),r=new class{constructor(t){this.map=t,this.dom={load:this._button_dom("load",this.level_load),save:this._button_dom("save",this.level_save),test:this._button_dom("test",this.level_test),name:this._text_input_dom("map name","name"),resize:this._button_dom("resize",this.level_resize),cols:this._number_input_dom("10","cols"),rows:this._number_input_dom("10","rows"),status:this._button_dom("status ≡",this.show_status),display:this._display_dom()},this.params={name:"",status_msg:[{type:"note",msg:"<b>welcome to the editor</b>\n\nif you don't know something\nyou can press <b>[h]</b> for help.\n\nclick <b>status</b> to hide this display.\n"}],maps:[],cols:10,rows:10},this.maps=new o(""),this.show_status()}level_load(){this.maps.pull(this.add_status.bind(this),function(t){console.log(t),this.map.from(t),console.log(this,this.map)}.bind(this))}level_save(){this.map.name=this.params.name,this.maps.push(this.add_status.bind(this),this.map)}level_test(){window.location="/game"}level_resize(){this.map.resize(this.params.cols,this.params.rows),console.log(this.map)}show_status(){"display_hide"===this.dom.display.className?(console.log("show"),this.update_status(),this.dom.display.className="display"):(console.log("hide"),this.dom.display.className="display_hide")}update_status(){let t="";for(const{type:e,msg:s}of this.params.status_msg)t+=`<em type="${e}">${s}</em>\n`;t+='<em type="note">\n--- END OF MESSAGES ---</em>',this.dom.display.innerHTML=t}add_status(t,e="note"){this.params.status_msg.push({type:e,msg:t}),this.update_status()}_button_dom(t,e){const s=document.createElement("button");return s.className="action",s.innerText=t,s.addEventListener("click",e.bind(this)),s}_text_input_dom(t,e,s=80){const i=document.createElement("input");return i.className="action",i.type="text",i.value="",i.placeholder=t,i.maxLength=s,i.addEventListener("input",function(t){this.params[e]=t.target.value}.bind(this)),i}_number_input_dom(t,e,s=256,i=0){const o=document.createElement("input");return o.className="action",o.type="text",o.value=t,o.addEventListener("input",function(t){console.log(e);const s=t.target.value;try{const t=s.match(/\d+/)[0];this.params[e]=parseInt(isNaN(t)?i:t)}catch{this.params[e]=0}}.bind(this)),o}_display_dom(){const t=document.createElement("pre");return t.className="display_hide",t}_maps_dom(){const t=document.createElement("div");return t.className="maps_hide",t}}(n),a=new class{constructor(t,e){this.map=t,this.width=e,this.view_offset=[0,0],this.move_offset=[0,0],this.mouse_pos=[0,0],this.dom=document.createElement("canvas"),this.dom.width=this.map.cols*e,this.dom.height=this.map.rows*e,this.ctx=this.dom.getContext("2d"),this.ctx.font="10px monospace",this.tile_type=0,this.tile_selected=0,this.colors={bg:"#e8d8d0",fg:"#282010"},this.advice={sT:0,lines:[],dim:[0,0],pos:[0,0]},this.modes={inside:!1,mouse:!1,shift:!1,alt:!1},this.T=0,this.render()}event_attach(){window.onkeydown=this.keydown_event.bind(this),window.onkeyup=this.keyup_event.bind(this),window.onresize=()=>{this.viewport.call(this,this.dom.clientWidth,this.dom.clientHeight)},this.dom.onmousedown=this.mousedown_event.bind(this),this.dom.onmouseup=this.mouseup_event.bind(this),this.dom.onmousemove=this.mousemove_event.bind(this),this.dom.onmouseover=this.mouseenter_event.bind(this),this.dom.onmouseout=this.mouseleave_event.bind(this)}tile_select(t,e){const s=t-this.view_offset[0],i=e-this.view_offset[1],o=this.width;return this.map.pos(Math.floor(s/o),Math.floor(i/o))}keydown_event(t){switch(console.log(t.key),t.key){case"ArrowLeft":console.log("tile left"),this.tile_type-=this.tile_type>0?1:-255,this.show_tile_type_change();break;case"ArrowRight":console.log("tile right"),this.tile_type+=this.tile_type<255?1:-255,this.show_tile_type_change();break;case"=":case"+":this.zoom(1.1);break;case"-":this.zoom(.9);break;case"c":this.center();break;case"w":this.tile_type=128,this.show_tile_type_change();break;case"e":this.tile_type=0,this.show_tile_type_change();break;case"h":this.show_help();break;case"Shift":this.modes.shift=!0,this.dom.className="grab";break;case"Alt":this.modes.alt=!0}}keyup_event(t){switch(t.key){case"Shift":this.modes.shift=!1,this.dom.className="";break;case"Alt":this.modes.alt=!1}}mousedown_event(t){this.modes.mouse=!0,this.move_offset[0]=t.offsetX,this.move_offset[1]=t.offsetY;const e=this.tile_select(t.offsetX,t.offsetY);this.modes.shift||this.map.change(e,this.tile_type)}mouseup_event(){this.modes.mouse=!1}mousemove_event(t){this.mouse_pos[0]=t.offsetX,this.mouse_pos[1]=t.offsetY,this.advice.pos[0]=t.offsetX+10,this.advice.pos[1]=t.offsetY+10;const e=this.tile_select(t.offsetX,t.offsetY);e!==this.tile_selected&&(this.tile_selected=e,this.show_tile_type(),!this.modes.mouse||this.modes.shift||this.modes.alt||this.map.change(e,this.tile_type)),this.modes.mouse&&this.modes.shift&&(this.view_offset[0]+=t.movementX,this.view_offset[1]+=t.movementY)}mouseenter_event(){this.modes.inside=!0}mouseleave_event(){this.modes.inside=!1}zoom(t){const e=1-t;this.width*=t,this.view_offset[0]+=e*this.width*this.map.cols/2,this.view_offset[1]+=e*this.width*this.map.rows/2}center(){const t=this.dom.width/2,e=this.dom.height/2;this.view_offset[0]=Math.floor(t-this.width*this.map.cols/2),this.view_offset[1]=Math.floor(e-this.width*this.map.rows/2)}show_tile_type(){const e=this.tile_selected;if(-1===e)this.set_advice("POS: <out of map>",6e4);else{const s=this.tile_selected%this.map.cols,i=Math.floor(this.tile_selected/this.map.rows);this.set_advice(`POS: ${e}\nX: ${s} Y: ${i}\nTYPE: ${t.editor_find(this.map.at(e)).name}`,6e4)}}show_tile_type_change(){const e=this.tile_type,s=t.editor_find(e),i=void 0===s?"<empty slot>":s.name;this.set_advice(`USING TYPE: ${i}\n            ID: ${e}`,5e3)}show_help(){this.set_advice("HELP\n\n[left] - tile type decrease\n[right] - tile type increase\n[w] - select wall tiles\n[e] - select empty tile\n[+] - zoom in\n[-] - zoom out\n[c] - center view on the map\nhold mouse to draw\nhold mouse with [shift] to move",1e4)}set_advice(t,e){this.advice.lines=t.split("\n"),this.advice.dim[0]=6*Math.max(...this.advice.lines.map((t=>t.length)))+10,this.advice.dim[1]=10*this.advice.lines.length+10,this.advice.sT=this.T+e}draw_tiles(){const e=this.width,s=-this.view_offset[0],i=-this.view_offset[1],o=Math.max(Math.floor(s/this.width),0),n=Math.max(Math.floor(i/this.width),0),r=Math.min(Math.floor((s+this.dom.width)/this.width),this.map.cols),a=Math.min(Math.floor((i+this.dom.height)/this.width),this.map.rows);this.ctx.save();const h=this.view_offset[0],l=this.view_offset[1];for(let s=0;s<this.map.cols;s++)if(s>=o&&s<=r){const i=h+s*e;for(let o=0;o<this.map.rows;o++)if(o>=n&&o<=a){const n=this.map.at_coord(s,o);void 0!==n&&(this.ctx.fillStyle=t.editor_find(n).color,this.ctx.fillRect(i,l+o*e,e,e))}}this.ctx.restore()}draw_grid(){if(this.dom.width/this.width<200){const t=this.width,e=this.view_offset[0]%t,s=this.view_offset[1]%t,i=Math.floor(this.dom.width/t)+2,o=Math.floor(this.dom.height/t)+2,n=this.dom.width+2*t,r=this.dom.height+2*t;this.ctx.save();const a=Math.floor(2*this.width).toString(16).padStart(2,"0");this.ctx.strokeStyle=`#252015${a}`,this.ctx.translate(e-t,s-t);for(let e=0;e<=i;e++){const s=e*t;this.ctx.moveTo(s,0),this.ctx.lineTo(s,r)}for(let e=0;e<=o;e++){const s=e*t;this.ctx.moveTo(0,s),this.ctx.lineTo(n,s)}this.ctx.stroke(),this.ctx.restore()}}draw_symbols(){const t=this.view_offset[0],e=this.view_offset[1];if(this.ctx.save(),this.ctx.strokeStyle="#af4540",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(t-15,e),this.ctx.lineTo(t,e+15),this.ctx.lineTo(t+15,e),this.ctx.lineTo(t,e-15),this.ctx.closePath(),this.ctx.stroke(),this.ctx.restore(),this.modes.mouse){this.ctx.save();const t=this.mouse_pos[0]-this.move_offset[0],e=this.mouse_pos[1]-this.move_offset[1],s=Math.sqrt(t**2+e**2),i=Math.floor(s/20),o=t/i,n=e/i,r=o/2,a=n/2;this.ctx.translate(this.move_offset[0],this.move_offset[1]),this.ctx.beginPath();for(let t=0;t<i;t++)this.ctx.moveTo(0,0),this.ctx.lineTo(r,a),this.ctx.translate(o,n);this.ctx.stroke(),this.ctx.restore()}}draw_advice(){if(this.T<=this.advice.sT){this.ctx.save();const[t,e]=this.advice.pos,[s,i]=this.advice.dim;this.ctx.fillStyle=this.colors.bg,this.ctx.strokeStyle=this.colors.fg,this.ctx.fillRect(t,e,s,i),this.ctx.strokeRect(t,e,s,i);const o=t+5,n=e+12,r=this.advice.lines,a=this.advice.lines.length;this.ctx.fillStyle=this.colors.fg;for(let t=0;t<a;t++)this.ctx.fillText(r[t],o,n+10*t);this.ctx.restore()}}clear(){this.ctx.clearRect(0,0,this.dom.width,this.dom.height)}viewport(t,e){this.dom.width=t,this.dom.height=e}render(t=0){this.T=t,this.clear(),this.draw_tiles(),this.draw_grid(),this.draw_symbols(),this.draw_advice(),requestAnimationFrame(this.render.bind(this))}}(n,100);console.log(a),console.log(r);const h=document.getElementById("view");h.append(a.dom),a.viewport(h.clientWidth,h.clientHeight),a.center(),a.event_attach(h),document.getElementById("bar").append(...Object.values(r.dom))})()})();