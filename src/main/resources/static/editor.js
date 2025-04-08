(()=>{"use strict";var t={56:(t,e,s)=>{t.exports=function(t){var e=s.nc;e&&t.setAttribute("nonce",e)}},72:t=>{var e=[];function s(t){for(var s=-1,o=0;o<e.length;o++)if(e[o].identifier===t){s=o;break}return s}function o(t,o){for(var n={},a=[],h=0;h<t.length;h++){var r=t[h],l=o.base?r[0]+o.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var m=s(d),p={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var u=i(p,o);o.byIndex=h,e.splice(h,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function i(t,e){var s=e.domAPI(e);return s.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;s.update(t=e)}else s.remove()}}t.exports=function(t,i){var n=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<n.length;a++){var h=s(n[a]);e[h].references--}for(var r=o(t,i),l=0;l<n.length;l++){var c=s(n[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}n=r}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},164:(t,e,s)=>{s.d(e,{A:()=>h});var o=s(601),i=s.n(o),n=s(314),a=s.n(n)()(i());a.push([t.id,'body {\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    font-family: monospace;\n    font-size: 10px;\n    overflow: hidden;\n}\n\n#bar {\n    height: 20px;\n    width: 100%;\n    background-color: #352020;\n    color: #c0b0a0;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: stretch;\n}\n\n#bar > button.action {\n    border: 0;\n    height: 100%;\n    background-color: #352020;\n    color: #c0b0a0;\n    cursor: pointer;\n}\n\n#bar > button.action:last-of-type {\n    border: 0;\n    height: 100%;\n    background-color: #352020;\n    color: #c0b0a0;\n    cursor: pointer;\n    margin-left: auto;\n}\n\n\n#bar > button.action:hover {\n    background-color: #c0b0a0;\n    color: #352020;\n}\n\n#bar > input[type=text].action {\n    border: 0;\n    border-bottom: solid 2px #c0b0a0;\n    color: #c0b0a0;\n    background: #00000000;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n#view {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n.display {\n    display: inline;\n    position: fixed;\n    font-weight: bold;\n    top: 20px;\n    right: 0;\n    width: 30%;\n    max-height: 50%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    background: #251a1a;\n    color: #c0b0a0;\n    padding-top: 10px;\n    padding-left: 10px;\n    padding-bottom: 10px;\n    margin: 0;\n}\n\n.display_hide {\n    display: none;\n}\n\n.maps {\n    display: inline;\n    position: fixed;\n    font-weight: bold;\n    top: 20px;\n    left: 0;\n    width: 30%;\n    max-height: 50%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    background: #251a1a;\n    color: #c0b0a0;\n    padding-top: 10px;\n    padding-left: 10px;\n    padding-bottom: 10px;\n    margin: 0;\n}\n\n.map_entry {\n    text-decoration: underline;\n    cursor: pointer;\n    background-color: #352020;\n    color: #c0b0a0;\n}\n\n.map_entry:hover {\n    background: #c0b0a0;\n    color: #352020;\n}\n\n.maps_hide {\n    display: none;\n}\n\ncanvas {\n    width: 100%;\n    height: 100%;\n}\n\ncanvas:hover {\n    cursor: crosshair;\n}\n\ncanvas.grab:hover {\n    cursor: move;\n}\n\npre {\n    white-space: break-spaces;\n    font-family: "Liberation Mono", monospace;\n}\n\npre > em[type="note"] {\n    font-style: normal;\n    font-weight: lighter;\n}\n\npre > em[type="error"] {\n    color: #cf1510;\n    font-weight: lighter;\n}\n\npre > em[type="warn"] {\n    color: #d56f10;\n    font-weight: lighter;\n}\n\npre > em > b {\n    color: inherit;\n    font-weight: bold;\n}',""]);const h=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s="",o=void 0!==e[5];return e[4]&&(s+="@supports (".concat(e[4],") {")),e[2]&&(s+="@media ".concat(e[2]," {")),o&&(s+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),s+=t(e),o&&(s+="}"),e[2]&&(s+="}"),e[4]&&(s+="}"),s})).join("")},e.i=function(t,s,o,i,n){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var h=0;h<this.length;h++){var r=this[h][0];null!=r&&(a[r]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);o&&a[c[0]]||(void 0!==n&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=n),s&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=s):c[2]=s),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},601:t=>{t.exports=function(t){return t[1]}},637:(t,e,s)=>{s.r(e),s.d(e,{default:()=>v});var o=s(72),i=s.n(o),n=s(825),a=s.n(n),h=s(659),r=s.n(h),l=s(56),c=s.n(l),d=s(540),m=s.n(d),p=s(113),u=s.n(p),f=s(164),_={};_.styleTagTransform=u(),_.setAttributes=c(),_.insert=r().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=m(),i()(f.A,_);const v=f.A&&f.A.locals?f.A.locals:void 0},659:t=>{var e={};t.exports=function(t,s){var o=function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(s)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(s){!function(t,e,s){var o="";s.supports&&(o+="@supports (".concat(s.supports,") {")),s.media&&(o+="@media ".concat(s.media," {"));var i=void 0!==s.layer;i&&(o+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),o+=s.css,i&&(o+="}"),s.media&&(o+="}"),s.supports&&(o+="}");var n=s.sourceMap;n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,s)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function s(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={id:o,exports:{}};return t[o](n,n.exports,s),n.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nc=void 0;const o={editor:{0:{name:"empty",color:"#d0c8c0"},1:{name:"p_start",color:"#e04040"},2:{name:"i_door_hori",color:"#c0a850"},3:{name:"i_door_vert",color:"#c0a850"},4:{name:"o_door_hori",color:"#608040"},5:{name:"o_door_vert",color:"#608040"},6:{name:"e_door_hori",color:"#606040"},7:{name:"e_door_vert",color:"#606040"},8:{name:"ceil_light",color:"#56c025"},9:{name:"flood_light",color:"#369025"},10:{name:"alarm_light",color:"#166025"},16:{name:"light_enemy",color:"#d98080"},24:{name:"small_treasure",color:"#2020b9"},32:{name:"ammobox",color:"#901020"},128:{name:"i_rock_wall",color:"#583030"},129:{name:"i_metal_wall",color:"#785050"},130:{name:"o_planks_wall",color:"#305830"},131:{name:"o_marble_wall",color:"#507850"},132:{name:"i_red_wall",color:"#986060"},133:{name:"i_chip_wall",color:"#983030"},134:{name:"i_pipe_wall",color:"#584848"},254:{name:"e_term_wall",color:"#404040"},255:{name:"e_exit_wall",color:"#606060"}},game:{128:"i_rock_wall",129:"i_metal_wall",130:"o_planks_wall",131:"o_marble_wall",132:"i_red_wall",133:"i_chip_wall",134:"i_pipe_wall"},editor_find(t){return this.editor[t]}};class i{constructor(t){this.base_url=t,this.method="POST",this.headers={"Content-Type":"application/json"}}async send(t,e,s=t=>{console.log(t)},o=t=>{console.error(t)}){console.log(JSON.stringify(e));try{const i=await fetch(this.base_url+t,{method:this.method,headers:this.headers,body:JSON.stringify(e)});i.ok?s(await i.json()):o(await i.text())}catch{o(err)}}}class n{constructor(t,e,s){this.name="",this.cols=e,this.rows=s,this.start=0,this.score=0,this.tiles=new Uint8Array(this.cols*this.rows)}encode(){return{name:this.name.replaceAll(/:;!@#\$%\^&\*\?<>/g," "),cols:this.cols,rows:this.rows,tiles:[...this.tiles]}}decode(t){this.name=t.name,this.cols=t.cols,this.rows=t.rows,this.tiles=new Uint8Array(t.tiles),this.start=this.tiles.findIndex((t=>1===t))}at(t){return this.tiles[t]}pos(t,e){return t<0||e<0||t>=this.cols||e>=this.rows?-1:e*this.cols+t}coord(t){return[t%this.cols,Math.floor(t/this.cols)]}at_coord(t,e){const s=this.pos(t,e);return-1===s?void 0:this.tiles[s]}adjacent(t){const e=this.cols;return[t-e,t-1,t+1,t+e]}neighbours(t){const e=this.cols;return[t-e-1,t-e,t-e+1,t-1,t+1,t+e-1,t+e,t+e+1]}resize(t,e){const s=this.tiles.slice(),o=Math.min(t,this.cols),i=Math.min(e,this.rows);this.tiles=new Uint8Array(t*e);for(let e=0;e<o;e++)for(let n=0;n<i;n++){const i=e+n*o,a=e+n*t;this.tiles[a]=s[i]}this.cols=t,this.rows=e}change(t,e){this.tiles[t]=e}from(t){this.name=t.name,this.rows=t.rows,this.cols=t.cols,this.tiles=t.tiles}walls(){const t=Array(256).fill(void 0),e=this.cols*this.rows;for(let s=0;s<e;s++){const e=this.tiles[s];try{t[e].push(s)}catch{t[e]=[s]}}return t}}class a{constructor(t=""){this.source=new i(t+"/maps/")}list(t=(t,e)=>{},e=t=>{}){this.source.send("list",{},(t=>{console.log(t),e(t)}),(e=>{t("<b>Listing maps failed - here's why:</b>\n"+e,"error")}))}push(t=(t,e)=>{},e){this.source.send("push",e.encode(),(e=>{t("<b>Saved '"+e.name+"' map successfully.</b>\n","note")}),(s=>{t("<b>Saving '"+e.name+"' map failed - here's why:</b>\n"+s,"error")}))}pullLatest(t=(t,e)=>{},e=t=>{}){this.source.send("pull",{},(s=>{const o=new n("",0,0);o.decode(s),console.log(o),e(o),t("<b>Loaded '"+o.name+"' map successfully.</b>\n","note")}),(e=>{t("<b>Loading latest map failed - here's why:</b>\n"+e,"error")}))}pullByName(t,e=(t,e)=>{},s=t=>{}){this.source.send("pull/"+t,{},(t=>{const o=new n("",0,0);o.decode(t),console.log(o),s(o),e("<b>Loaded '"+o.name+"' map successfully.</b>\n","note")}),(s=>{e("<b>Loading '"+t+"' map failed - here's why:</b>\n"+s,"error")}))}}s(637);const h=new n(null,10,10),r=new class{constructor(t){this.map=t,this.dom={load:this._button_dom("load",this.open_level_load),save:this._button_dom("save",this.level_save),test:this._button_dom("test",this.level_test),name:this._text_input_dom("map name","name"),resize:this._button_dom("resize",this.level_resize),cols:this._number_input_dom("10","cols"),rows:this._number_input_dom("10","rows"),status:this._button_dom("status ≡",this.show_status),display:this._display_dom(),maps:this._maps_dom()},this.params={name:null,status_msg:[{type:"note",msg:"<b>welcome to the editor</b>\n\nif you don't know something\nyou can press <b>[h]</b> for help.\n\nclick <b>status</b> to hide this display.\n"}],maps:[],init:!1,cols:10,rows:10},this.maps=new a(""),this.show_status()}open_level_load(){this.params.init=!1,this.show_maps()&&this.maps.list(this.add_status.bind(this),function(t){console.log("list"),this.params.maps=t,this.params.init=!0,this.update_maps()}.bind(this))}level_load(t){this.show_maps(),this.maps.pullByName(t,this.add_status.bind(this),function(t){console.log(t),this.map.from(t),console.log(this,this.map)}.bind(this))}level_save(){this.map.name=this.params.name,this.maps.push(this.add_status.bind(this),this.map)}level_test(){console.log(this.map),0===this.map.name.length?(this.add_status("saving before playing","warn"),this.map.name=this.params.name,this.maps.push(this.nav_game.bind(this),this.map)):this.nav_game()}nav_game(){window.location=`/game?map=${this.map.name}`}level_resize(){this.map.resize(this.params.cols,this.params.rows),console.log(this.map)}show_maps(){return"maps_hide"===this.dom.maps.className?(console.log("show"),this.update_maps(),this.dom.maps.className="maps",!0):(console.log("hide"),this.dom.maps.className="maps_hide",!1)}show_status(){"display_hide"===this.dom.display.className?(console.log("show"),this.update_status(),this.dom.display.className="display"):(console.log("hide"),this.dom.display.className="display_hide")}update_maps(){let t=[];if(this.params.init)for(const{name:e,updated:s}of this.params.maps){const o=new Date(s),i=document.createElement("pre");i.className="map_entry",i.onclick=t=>this.level_load.call(this,e),i.innerText=`${e} - updated ${o.toUTCString()}`,t.push(i)}else{const e=document.createElement("h3");e.innerText="loading...",t.push(e)}this.dom.maps.innerHTML="";for(const e of t)this.dom.maps.appendChild(e)}update_status(){let t="";for(const{type:e,msg:s}of this.params.status_msg)t+=`<em type="${e}">${s}</em>\n`;t+='<em type="note">\n--- END OF MESSAGES ---</em>',this.dom.display.innerHTML=t}add_status(t,e="note"){this.params.status_msg.push({type:e,msg:t}),this.update_status()}_button_dom(t,e){const s=document.createElement("button");return s.className="action",s.innerText=t,s.addEventListener("click",e.bind(this)),s}_text_input_dom(t,e,s=80){const o=document.createElement("input");return o.className="action",o.type="text",o.value="",o.placeholder=t,o.maxLength=s,o.addEventListener("input",function(t){this.params[e]=t.target.value}.bind(this)),o}_number_input_dom(t,e,s=256,o=0){const i=document.createElement("input");return i.className="action",i.type="text",i.value=t,i.addEventListener("input",function(t){console.log(e);const s=t.target.value;try{const t=s.match(/\d+/)[0];this.params[e]=parseInt(isNaN(t)?o:t)}catch{this.params[e]=0}}.bind(this)),i}_display_dom(){const t=document.createElement("pre");return t.className="display_hide",t}_maps_dom(){const t=document.createElement("div");return t.className="maps_hide",t}}(h),l=new class{constructor(t,e){this.map=t,this.width=e,this.view_offset=[0,0],this.move_offset=[0,0],this.mouse_pos=[0,0],this.dom=document.createElement("canvas"),this.dom.width=this.map.cols*e,this.dom.height=this.map.rows*e,this.ctx=this.dom.getContext("2d"),this.ctx.font="10px monospace",this.tile_type=0,this.tile_selected=0,this.colors={bg:"#e8d8d0",fg:"#282010"},this.advice={sT:0,lines:[],dim:[0,0],pos:[0,0]},this.modes={inside:!1,mouse:!1,shift:!1,alt:!1},this.T=0,this.render()}event_attach(){window.onkeydown=this.keydown_event.bind(this),window.onkeyup=this.keyup_event.bind(this),window.onresize=()=>{this.viewport.call(this,this.dom.clientWidth,this.dom.clientHeight)},this.dom.onmousedown=this.mousedown_event.bind(this),this.dom.onmouseup=this.mouseup_event.bind(this),this.dom.onmousemove=this.mousemove_event.bind(this),this.dom.onmouseover=this.mouseenter_event.bind(this),this.dom.onmouseout=this.mouseleave_event.bind(this)}tile_select(t,e){const s=t-this.view_offset[0],o=e-this.view_offset[1],i=this.width;return this.map.pos(Math.floor(s/i),Math.floor(o/i))}keydown_event(t){switch(console.log(t.key),t.key){case"ArrowLeft":console.log("tile left"),this.tile_type-=this.tile_type>0?1:-255,this.show_tile_type_change();break;case"ArrowRight":console.log("tile right"),this.tile_type+=this.tile_type<255?1:-255,this.show_tile_type_change();break;case"=":case"+":this.zoom(1.1);break;case"-":this.zoom(.9);break;case"c":this.center();break;case"w":this.tile_type=128,this.show_tile_type_change();break;case"e":this.tile_type=0,this.show_tile_type_change();break;case"h":this.show_help();break;case"Shift":this.modes.shift=!0,this.dom.className="grab";break;case"Alt":this.modes.alt=!0}}keyup_event(t){switch(t.key){case"Shift":this.modes.shift=!1,this.dom.className="";break;case"Alt":this.modes.alt=!1}}mousedown_event(t){this.modes.mouse=!0,this.move_offset[0]=t.offsetX,this.move_offset[1]=t.offsetY;const e=this.tile_select(t.offsetX,t.offsetY);this.modes.shift||this.map.change(e,this.tile_type)}mouseup_event(){this.modes.mouse=!1}mousemove_event(t){this.mouse_pos[0]=t.offsetX,this.mouse_pos[1]=t.offsetY,this.advice.pos[0]=t.offsetX+10,this.advice.pos[1]=t.offsetY+10;const e=this.tile_select(t.offsetX,t.offsetY);e!==this.tile_selected&&(this.tile_selected=e,this.show_tile_type(),!this.modes.mouse||this.modes.shift||this.modes.alt||this.map.change(e,this.tile_type)),this.modes.mouse&&this.modes.shift&&(this.view_offset[0]+=t.movementX,this.view_offset[1]+=t.movementY)}mouseenter_event(){this.modes.inside=!0}mouseleave_event(){this.modes.inside=!1}zoom(t){const e=1-t;this.width*=t,this.view_offset[0]+=e*this.width*this.map.cols/2,this.view_offset[1]+=e*this.width*this.map.rows/2}center(){const t=this.dom.width/2,e=this.dom.height/2;this.view_offset[0]=Math.floor(t-this.width*this.map.cols/2),this.view_offset[1]=Math.floor(e-this.width*this.map.rows/2)}show_tile_type(){const t=this.tile_selected;if(-1===t)this.set_advice("POS: <out of map>",6e4);else{const e=this.tile_selected%this.map.cols,s=Math.floor(this.tile_selected/this.map.rows);this.set_advice(`POS: ${t}\nX: ${e} Y: ${s}\nTYPE: ${o.editor_find(this.map.at(t)).name}`,6e4)}}show_tile_type_change(){const t=this.tile_type,e=o.editor_find(t),s=void 0===e?"<empty slot>":e.name;this.set_advice(`USING TYPE: ${s}\n            ID: ${t}`,5e3)}show_help(){this.set_advice("HELP\n\n[left] - tile type decrease\n[right] - tile type increase\n[w] - select wall tiles\n[e] - select empty tile\n[+] - zoom in\n[-] - zoom out\n[c] - center view on the map\nhold mouse to draw\nhold mouse with [shift] to move",1e4)}set_advice(t,e){this.advice.lines=t.split("\n"),this.advice.dim[0]=6*Math.max(...this.advice.lines.map((t=>t.length)))+10,this.advice.dim[1]=10*this.advice.lines.length+10,this.advice.sT=this.T+e}draw_tiles(){const t=this.width,e=-this.view_offset[0],s=-this.view_offset[1],i=Math.max(Math.floor(e/this.width),0),n=Math.max(Math.floor(s/this.width),0),a=Math.min(Math.floor((e+this.dom.width)/this.width),this.map.cols),h=Math.min(Math.floor((s+this.dom.height)/this.width),this.map.rows);this.ctx.save();const r=this.view_offset[0],l=this.view_offset[1];for(let e=0;e<this.map.cols;e++)if(e>=i&&e<=a){const s=r+e*t;for(let i=0;i<this.map.rows;i++)if(i>=n&&i<=h){const n=this.map.at_coord(e,i);void 0!==n&&(this.ctx.fillStyle=o.editor_find(n).color,this.ctx.fillRect(s,l+i*t,t,t))}}this.ctx.restore()}draw_grid(){if(this.dom.width/this.width<200){const t=this.width,e=this.view_offset[0]%t,s=this.view_offset[1]%t,o=Math.floor(this.dom.width/t)+2,i=Math.floor(this.dom.height/t)+2,n=this.dom.width+2*t,a=this.dom.height+2*t;this.ctx.save();const h=Math.floor(2*this.width).toString(16).padStart(2,"0");this.ctx.strokeStyle=`#252015${h}`,this.ctx.translate(e-t,s-t);for(let e=0;e<=o;e++){const s=e*t;this.ctx.moveTo(s,0),this.ctx.lineTo(s,a)}for(let e=0;e<=i;e++){const s=e*t;this.ctx.moveTo(0,s),this.ctx.lineTo(n,s)}this.ctx.stroke(),this.ctx.restore()}}draw_symbols(){const t=this.view_offset[0],e=this.view_offset[1];if(this.ctx.save(),this.ctx.strokeStyle="#af4540",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(t-15,e),this.ctx.lineTo(t,e+15),this.ctx.lineTo(t+15,e),this.ctx.lineTo(t,e-15),this.ctx.closePath(),this.ctx.stroke(),this.ctx.restore(),this.modes.mouse){this.ctx.save();const t=this.mouse_pos[0]-this.move_offset[0],e=this.mouse_pos[1]-this.move_offset[1],s=Math.sqrt(t**2+e**2),o=Math.floor(s/20),i=t/o,n=e/o,a=i/2,h=n/2;this.ctx.translate(this.move_offset[0],this.move_offset[1]),this.ctx.beginPath();for(let t=0;t<o;t++)this.ctx.moveTo(0,0),this.ctx.lineTo(a,h),this.ctx.translate(i,n);this.ctx.stroke(),this.ctx.restore()}}draw_advice(){if(this.T<=this.advice.sT){this.ctx.save();const[t,e]=this.advice.pos,[s,o]=this.advice.dim;this.ctx.fillStyle=this.colors.bg,this.ctx.strokeStyle=this.colors.fg,this.ctx.fillRect(t,e,s,o),this.ctx.strokeRect(t,e,s,o);const i=t+5,n=e+12,a=this.advice.lines,h=this.advice.lines.length;this.ctx.fillStyle=this.colors.fg;for(let t=0;t<h;t++)this.ctx.fillText(a[t],i,n+10*t);this.ctx.restore()}}clear(){this.ctx.clearRect(0,0,this.dom.width,this.dom.height)}viewport(t,e){this.dom.width=t,this.dom.height=e}render(t=0){this.T=t,this.clear(),this.draw_tiles(),this.draw_grid(),this.draw_symbols(),this.draw_advice(),requestAnimationFrame(this.render.bind(this))}}(h,100);console.log(l),console.log(r);const c=document.getElementById("view");c.append(l.dom),l.viewport(c.clientWidth,c.clientHeight),l.center(),l.event_attach(c),document.getElementById("bar").append(...Object.values(r.dom))})();