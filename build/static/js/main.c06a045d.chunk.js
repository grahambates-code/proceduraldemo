(this["webpackJsonpless-react"]=this["webpackJsonpless-react"]||[]).push([[0],{200:function(t,e){},302:function(t,e){},421:function(t,e,n){},425:function(t,e,n){},426:function(t,e,n){},430:function(t,e){},495:function(t,e){},496:function(t,e,n){},497:function(t,e){},503:function(t,e,n){},504:function(t,e,n){},505:function(t,e,n){},506:function(t,e,n){},625:function(t,e,n){"use strict";n.r(e);var i=n(9),r=n(8),o=n.n(r),a=n(235),s=n.n(a),c=n(65),d=n(51),l=n(253),u=(n(421),n(195)),p=n(408),h=n(655),f=n(257),v=n(654),g=n(45),b=n(52),m=n.n(b),j=n(169),x=n(386),y=n(105),O=n(70),P=n(56),w=n(64),_=n(157),S=n(88),L=n(89),C=n(653),E=n(384),k=n(151),A=n(380),T=n(138),F=(n(424),n(172)),M=(n(425),function(t){var e,n=Object(r.useRef)(null);Object(r.useRef)(!1);return Object(r.useEffect)((function(){F.a.init({container:n.current,datasource:{elevation:{apiKey:"1b045ec93f5b94db894037db8d297128e"},imagery:{urlFormat:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=cZQg2QaktSnI18BSAxZX",attribution:'<a href="https://www.maptiler.com/copyright/">Maptiler</a> <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}}})}),[]),Object(r.useEffect)((function(){if(t.card&&t.card.landscapecamera){var e={longitude:t.card.landscapecamera[0],latitude:t.card.landscapecamera[1],angle:20};F.a.displayLocation(e)}F.a.onUserInteraction=function(){console.log(t)},F.a.onLocationFocused=function(){console.log("Location focused")},setTimeout((function(){return F.a.orbitTarget()}),1e3)}),[null===(e=t.card)||void 0===e?void 0:e.landscapecamera]),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{className:"balloon",src:"/textures/balloon.png"}),Object(i.jsx)("div",{className:"map-mode-container",children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"mask-mode",children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{ref:n,className:"Procedural"})})})})})]})}),$=n(388),N=n.n($),z=(n(426),n(153)),I=n(315),B=n(316),R=n(26),G=n(128),D=n(252),W=n(87),U=n(300),V=n(60),Z=n(311),q=n(118);var J=function(t){Object(S.a)(n,t);var e=Object(L.a)(n);function n(t){return Object(P.a)(this,n),e.call(this,Object(V.a)(Object(V.a)({},t),{},{attributes:{positions:{size:3,padding:18,initialize:!0,type:t.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}}))}return Object(w.a)(n,[{key:"getGeometryFromBuffer",value:function(t){return this.normalize?Object(y.a)(Object(O.a)(n.prototype),"getGeometryFromBuffer",this).call(this,t):function(){return null}}},{key:"normalizeGeometry",value:function(t){return this.normalize?function(t,e,n,i){var r=t;if(Array.isArray(t[0])){var o=t.length*e;r=new Array(o);for(var a=0;a<t.length;a++)for(var s=0;s<e;s++)r[a*e+s]=t[a][s]||0}return n?Object(q.c)(r,{size:e,gridResolution:n}):i?Object(q.d)(r,{size:e}):r}(t,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):t}},{key:"get",value:function(t){return this.attributes[t]}},{key:"getGeometrySize",value:function(t){if(Array.isArray(t[0])){var e,n=0,i=Object(U.a)(t);try{for(i.s();!(e=i.n()).done;){var r=e.value;n+=this.getGeometrySize(r)}}catch(a){i.e(a)}finally{i.f()}return n}var o=this.getPathLength(t);return o<2?0:this.isClosed(t)?o<3?0:o+2:o}},{key:"updateGeometryAttributes",value:function(t,e){if(0!==e.geometrySize)if(t&&Array.isArray(t[0])){var n,i=Object(U.a)(t);try{for(i.s();!(n=i.n()).done;){var r=n.value,o=this.getGeometrySize(r);e.geometrySize=o,this.updateGeometryAttributes(r,e),e.vertexStart+=o}}catch(a){i.e(a)}finally{i.f()}}else this._updateSegmentTypes(t,e),this._updatePositions(t,e)}},{key:"_updateSegmentTypes",value:function(t,e){var n=this.attributes.segmentTypes,i=this.isClosed(t),r=e.vertexStart,o=e.geometrySize;n.fill(0,r,r+o),i?(n[r]=4,n[r+o-2]=4):(n[r]+=1,n[r+o-2]+=2),n[r+o-1]=4}},{key:"_updatePositions",value:function(t,e){var n=this.attributes.positions;if(n)for(var i=e.vertexStart,r=e.geometrySize,o=new Array(3),a=i,s=0;s<r;a++,s++)this.getPointOnPath(t,s,o),n[3*a]=o[0],n[3*a+1]=o[1],n[3*a+2]=o[2]}},{key:"getPathLength",value:function(t){return t.length/this.positionSize}},{key:"getPointOnPath",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=this.positionSize;e*i>=t.length&&(e+=1-t.length/i);var r=e*i;return n[0]=t[r],n[1]=t[r+1],n[2]=3===i&&t[r+2]||0,n}},{key:"isClosed",value:function(t){if(!this.normalize)return this.opts.loop;var e=this.positionSize,n=t.length-e;return t[0]===t[n]&&t[1]===t[n+1]&&(2===e||t[2]===t[n+2])}}]),n}(Z.a),K="#define SHADER_NAME path-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute float instanceTypes;\nattribute vec3 instanceStartPositions;\nattribute vec3 instanceEndPositions;\nattribute vec3 instanceLeftPositions;\nattribute vec3 instanceRightPositions;\nattribute vec3 instanceLeftPositions64Low;\nattribute vec3 instanceStartPositions64Low;\nattribute vec3 instanceEndPositions64Low;\nattribute vec3 instanceRightPositions64Low;\nattribute float instanceStrokeWidths;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nuniform float jointType;\nuniform float miterLimit;\nuniform bool billboard;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\n\nconst float EPSILON = 0.001;\nconst vec3 ZERO_OFFSET = vec3(0.0);\n\nfloat flipIfTrue(bool flag) {\n  return -(float(flag) * 2. - 1.);\n}\n\n// calculate line join positions\nvec3 lineJoin(\n  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,\n  vec2 width\n) {\n  bool isEnd = positions.x > 0.0;\n  // side of the segment - -1: left, 0: center, 1: right\n  float sideOfPath = positions.y;\n  float isJoint = float(sideOfPath == 0.0);\n\n  vec3 deltaA3 = (currPoint - prevPoint);\n  vec3 deltaB3 = (nextPoint - currPoint);\n\n  mat3 rotationMatrix;\n  bool needsRotation = !billboard && project_needs_rotation(currPoint, rotationMatrix);\n  if (needsRotation) {\n    deltaA3 = deltaA3 * rotationMatrix;\n    deltaB3 = deltaB3 * rotationMatrix;\n  }\n  vec2 deltaA = deltaA3.xy / width;\n  vec2 deltaB = deltaB3.xy / width;\n\n  float lenA = length(deltaA);\n  float lenB = length(deltaB);\n\n  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);\n  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);\n\n  vec2 perpA = vec2(-dirA.y, dirA.x);\n  vec2 perpB = vec2(-dirB.y, dirB.x);\n\n  // tangent of the corner\n  vec2 tangent = dirA + dirB;\n  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;\n  // direction of the corner\n  vec2 miterVec = vec2(-tangent.y, tangent.x);\n  // direction of the segment\n  vec2 dir = isEnd ? dirA : dirB;\n  // direction of the extrusion\n  vec2 perp = isEnd ? perpA : perpB;\n  // length of the segment\n  float L = isEnd ? lenA : lenB;\n\n  // A = angle of the corner\n  float sinHalfA = abs(dot(miterVec, perp));\n  float cosHalfA = abs(dot(dirA, miterVec));\n\n  // -1: right, 1: left\n  float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);\n\n  // relative position to the corner:\n  // -1: inside (smaller side of the angle)\n  // 0: center\n  // 1: outside (bigger side of the angle)\n  float cornerPosition = sideOfPath * turnDirection;\n\n  float miterSize = 1.0 / max(sinHalfA, EPSILON);\n  // trim if inside corner extends further than the line segment\n  miterSize = mix(\n    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),\n    miterSize,\n    step(0.0, cornerPosition)\n  );\n\n  vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))\n    * (sideOfPath + isJoint * turnDirection);\n\n  // special treatment for start cap and end cap\n  bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));\n  bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));\n  bool isCap = isStartCap || isEndCap;\n\n  // extend out a triangle to envelope the round cap\n  if (isCap) {\n    offsetVec = mix(perp * sideOfPath, dir * jointType * 4.0 * flipIfTrue(isStartCap), isJoint);\n  }\n\n  // Generate variables for fragment shader\n  vPathLength = L;\n  vCornerOffset = offsetVec;\n  vMiterLength = dot(vCornerOffset, miterVec * turnDirection);\n  vMiterLength = isCap ? isJoint : vMiterLength;\n\n  vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);\n  vPathPosition = vec2(\n    dot(offsetFromStartOfPath, perp),\n    dot(offsetFromStartOfPath, dir)\n  );\n  geometry.uv = vPathPosition;\n\n  float isValid = step(instanceTypes, 3.5);\n  vec3 offset = vec3(offsetVec * width * isValid, 0.0);\n  DECKGL_FILTER_SIZE(offset, geometry);\n\n  if (needsRotation) {\n    offset = rotationMatrix * offset;\n  }\n  return currPoint + offset;\n}\n\n// In clipspace extrusion, if a line extends behind the camera, clip it to avoid visual artifacts\nvoid clipLine(inout vec4 position, vec4 refPosition) {\n  if (position.w < EPSILON) {\n    float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);\n    position = refPosition + (position - refPosition) * r;\n  }\n}\n\nvoid main() {\n  geometry.worldPosition = instanceStartPositions;\n  geometry.worldPositionAlt = instanceEndPositions;\n  geometry.pickingColor = instancePickingColors;\n\n  vec2 widthPixels = vec2(clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),\n    widthMinPixels, widthMaxPixels) / 2.0);\n\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);\n\n  float isEnd = positions.x;\n\n  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);\n  vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);\n\n  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);\n  vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);\n\n  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);\n  vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);\n\n  if (billboard) {\n    // Extrude in clipspace\n    vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);\n    vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);\n    vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);\n\n    clipLine(prevPositionScreen, currPositionScreen);\n    clipLine(nextPositionScreen, currPositionScreen);\n    clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));\n\n    vec2 width = project_pixel_size_to_clipspace(widthPixels);\n\n    vec3 pos = lineJoin(\n      prevPositionScreen.xyz / prevPositionScreen.w,\n      currPositionScreen.xyz / currPositionScreen.w,\n      nextPositionScreen.xyz / nextPositionScreen.w,\n      width\n    );\n\n    gl_Position = vec4(pos * currPositionScreen.w, currPositionScreen.w);\n  } else {\n    // Extrude in commonspace\n    prevPosition = project_position(prevPosition, prevPosition64Low);\n    currPosition = project_position(currPosition, currPosition64Low);\n    nextPosition = project_position(nextPosition, nextPosition64Low);\n\n    vec2 width = project_pixel_size(widthPixels);\n\n    vec4 pos = vec4(\n      lineJoin(prevPosition, currPosition, nextPosition, width),\n      1.0);\n    geometry.position = pos;\n    gl_Position = project_common_position_to_clipspace(pos);\n  }\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n",H="#define SHADER_NAME path-layer-fragment-shader\n\nprecision highp float;\n\nuniform float jointType;\nuniform float miterLimit;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\n/*\n * vPathPosition represents the relative coordinates of the current fragment on the path segment.\n * vPathPosition.x - position along the width of the path, between [-1, 1]. 0 is the center line.\n * vPathPosition.y - position along the length of the path, between [0, L / width].\n */\nvarying vec2 vPathPosition;\nvarying float vPathLength;\n\nvoid main(void) {\n  geometry.uv = vPathPosition;\n\n  if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {\n    // if joint is rounded, test distance from the corner\n    if (jointType > 0.0 && length(vCornerOffset) > 1.0) {\n      discard;\n    }\n    // trim miter\n    if (jointType == 0.0 && vMiterLength > miterLimit + 1.0) {\n      discard;\n    }\n  }\n  gl_FragColor = vColor;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",X=[0,0,0,255],Y={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},rounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:function(t){return t.path}},getColor:{type:"accessor",value:X},getWidth:{type:"accessor",value:1}},Q={enter:function(t,e){return e.length?e.subarray(e.length-t.length):t}},tt=function(t){Object(S.a)(n,t);var e=Object(L.a)(n);function n(){return Object(P.a)(this,n),e.apply(this,arguments)}return Object(w.a)(n,[{key:"getShaders",value:function(){return Object(y.a)(Object(O.a)(n.prototype),"getShaders",this).call(this,{vs:K,fs:H,modules:[I.a,B.a]})}},{key:"initializeState",value:function(){var t=this;this.getAttributeManager().addInstanced({positions:{size:3,vertexOffset:1,type:G.default.DOUBLE,fp64:this.use64bitPositions(),transition:Q,accessor:"getPath",update:this.calculatePositions,noAlloc:true,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:G.default.UNSIGNED_BYTE,update:this.calculateSegmentTypes,noAlloc:true},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:Q,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:G.default.UNSIGNED_BYTE,normalized:!0,accessor:"getColor",transition:Q,defaultValue:X},instancePickingColors:{size:3,type:G.default.UNSIGNED_BYTE,accessor:function(e,n){var i=n.index,r=n.target;return t.encodePickingColor(e&&e.__source?e.__source.index:i,r)}}}),this.setState({pathTesselator:new J({fp64:this.use64bitPositions()})}),this.props.getDashArray&&!this.props.extensions.length&&R.a.removed("getDashArray","PathStyleExtension")()}},{key:"updateState",value:function(t){var e=t.oldProps,i=t.props,r=t.changeFlags;Object(y.a)(Object(O.a)(n.prototype),"updateState",this).call(this,{props:i,oldProps:e,changeFlags:r});var o=this.getAttributeManager();if(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getPath)){var a=this.state.pathTesselator,s=i.data.attributes||{};a.updateGeometry({data:i.data,geometryBuffer:s.getPath,buffers:s,normalize:!i._pathType,loop:"loop"===i._pathType,getGeometry:i.getPath,positionFormat:i.positionFormat,wrapLongitude:i.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:r.dataChanged}),this.setState({numInstances:a.instanceCount,startIndices:a.vertexStarts}),r.dataChanged||o.invalidateAll()}if(r.extensionsChanged){var c=this.context.gl;this.state.model&&this.state.model.delete(),this.setState({model:this._getModel(c)}),o.invalidateAll()}}},{key:"getPickingInfo",value:function(t){var e=Object(y.a)(Object(O.a)(n.prototype),"getPickingInfo",this).call(this,t),i=e.index,r=this.props.data;return r[0]&&r[0].__source&&(e.object=r.find((function(t){return t.__source.index===i}))),e}},{key:"draw",value:function(t){var e=t.uniforms,n=this.context.viewport,i=this.props,r=i.rounded,o=i.billboard,a=i.miterLimit,s=i.widthUnits,c=i.widthScale,d=i.widthMinPixels,l=i.widthMaxPixels,u="pixels"===s?n.metersPerPixel:1;this.state.model.setUniforms(Object.assign({},e,{jointType:Number(r),billboard:o,widthScale:c*u,miterLimit:a,widthMinPixels:d,widthMaxPixels:l})).draw()}},{key:"_getModel",value:function(t){return new D.a(t,Object.assign({},this.getShaders(),{id:this.props.id,geometry:new W.a({drawMode:G.default.TRIANGLES,attributes:{indices:new Uint16Array([0,1,2,1,4,2,1,3,4,3,5,4]),positions:{value:new Float32Array([0,0,0,-1,0,1,1,-1,1,1,1,0]),size:2}}}),isInstanced:!0}))}},{key:"calculatePositions",value:function(t){var e=this.state.pathTesselator;t.startIndices=e.vertexStarts,t.value=e.get("positions")}},{key:"calculateSegmentTypes",value:function(t){var e=this.state.pathTesselator;t.startIndices=e.vertexStarts,t.value=e.get("segmentTypes")}},{key:"wrapLongitude",get:function(){return!1}}]),n}(z.a);tt.layerName="PathLayer",tt.defaultProps=Y;var et="DECKGL_FILTER_COLOR",nt=K.split(et),it="\n\t\tattribute float instanceLengths;\n\t\tattribute float instanceNextLengths;\n\t\tvarying float vLength;\n\t"+nt[0]+"\n\t\tvLength = instanceLengths + (instanceNextLengths - instanceLengths) * vPathPosition.y / vPathLength;\n\t"+et+nt[1],rt=H.split(et),ot="\n\t\tvarying float vLength;\n\t"+rt[0]+"\n\t\tfloat a = 0.0;\n\t\tfor (int i = 1; i < 4; i++) {\n\t\t\tfloat w = 0.2 / float(i);\n\t\t\tfloat s = sin( 12345.6 * vLength / (8.7 - float(i)) + float(i) );\n\t\t\tfloat d = abs( (1.0 - 2.0 * w) * s - vPathPosition.x );\n\t\t\ta = max( a, smoothstep(w, w - 0.05, d) );\n\t\t}\n\t\tgl_FragColor.a = a;\n\t"+et+rt[1],at=function(t){Object(S.a)(n,t);var e=Object(L.a)(n);function n(t,i,r,o,a){var s;return Object(P.a)(this,n),t.getLengths=function(t){var e=0,n=s.props.getPath(t).map((function(t,n,i){return e+=n?Math.sqrt(Math.pow(t[0]-i[n-1][0],2)+Math.pow(t[1]-i[n-1][1],2)):0}));return console.log(n),n},s=e.call(this,t,i,r,o,a)}return Object(w.a)(n,[{key:"getShaders",value:function(){return z.a.prototype.getShaders.call(this,{vs:it,fs:ot,modules:[I.a,B.a]})}},{key:"initializeState",value:function(t){Object(y.a)(Object(O.a)(n.prototype),"initializeState",this).call(this,t),this.getAttributeManager().addInstanced({lengths:{size:1,accessor:"getLengths",shaderAttributes:{instanceLengths:{vertexOffset:0},instanceNextLengths:{vertexOffset:1}}}})}}]),n}(tt),st=n(303),ct={type:"FeatureCollection",features:[]},dt={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-2.951202392578125,54.48659397984652],[-2.8176498413085938,54.48659397984652],[-2.8176498413085938,54.52825442998894],[-2.951202392578125,54.52825442998894],[-2.951202392578125,54.48659397984652]]]}}]},lt=function(t){Object(S.a)(n,t);var e=Object(L.a)(n);function n(t){var i;Object(P.a)(this,n),(i=e.call(this,t)).search=N.a.debounce((function(t){return t()}),300),i.state={myBox:dt,data:t.card&&t.card.annotations?t.card.annotations:ct,viewState:t.card&&t.card.camera?t.card.camera:{longitude:1,latitude:1,zoom:1}};Object(_.a)(i);return i}return Object(w.a)(n,[{key:"render",value:function(){var t=this,e=this.state.myBox.features[0].geometry.coordinates[0],n=[new T.a({id:"TileLayer",data:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",tileSize:256,onClick:function(e){t.props.updateLandscape({variables:{card_id:t.props.card.id,landscapecamera:e.coordinate}})},renderSubLayers:function(t){var e=t.tile.bbox,n=e.west,i=e.south,r=e.east,o=e.north;return new A.a(t,{data:null,desaturate:1,opacity:.7,transparentColor:[0,0,0,0],image:t.data,bounds:[n,i,r,o]})},pickable:!0}),new E.a({id:"geojson-layer",data:this.props.trip.geojson,pickable:!0,stroked:!1,getElevation:1,lineWidthScale:20,lineWidthMinPixels:4,lineWidthMaxPixels:8,getLineColor:[255,238,0,255],getRadius:100,getLineWidth:1,_subLayerProps:{"line-strings":{type:at}}}),new st.EditableGeoJsonLayer({id:"mask-geojson-layer-linestring",data:this.state.myBox,opacity:1,mode:st.TransformMode,selectedFeatureIndexes:[0],_subLayerProps:{geojson:{getFillColor:function(t){return[255,255,255,0]},getLineColor:function(t){return[255,255,255,0]}}},onEdit:function(e){e.editType;var n=e.updatedData;t.setState({myBox:n})}}),new A.a({opacity:1,id:"mask-arrow-layer",bounds:[e[0],e[3],e[2],e[1]],image:"/textures/tape2.png"})],r=this,o=function(t){Object(S.a)(n,t);var e=Object(L.a)(n);function n(t){return Object(P.a)(this,n),e.call(this,t)}return Object(w.a)(n,[{key:"handleEvent",value:function(t){var e=this;Object(y.a)(Object(O.a)(n.prototype),"handleEvent",this).call(this,t),"panend"!==t.type&&"wheel"!==t.type||r.search((function(){return r.props.updateCard({variables:{card_id:r.props.card.id,camera:e.controllerState._viewportProps}})}))}}]),n}(k.b);return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"Deck",children:Object(i.jsx)(C.a,{viewState:this.props.viewState,controller:{type:o,touchRotate:!1,dragRotate:!1,scrollZoom:!0,doubleClickZoom:!1},_animate:!1,height:"100%",width:"100%",ref:function(e){t.deckGL=e},onViewStateChange:function(e){e.viewId;var n=e.viewState;t.props.setViewState(n)},layers:n})}),Object(i.jsx)(M,{card:this.props.card})]})}}]),n}(r.Component),ut=(n(496),function(t){t.width,t.height;var e=t.children;return Object(i.jsx)("div",{className:"overlay",children:e})}),pt=n(406),ht=n(399);function ft(t){var e=t.trip,n=t.updateTripGeojson,o=Object(r.useCallback)((function(t){if(t[0].name.endsWith(".gpx")){var i=new FileReader;i.onload=function(t){var i=t.target.result,r=(new DOMParser).parseFromString(i,"application/xml");n({variables:{id:e.id,geojson:Object(ht.gpx)(r)}})},i.readAsText(t[0])}else alert("You must upload GPX files")}),[]),a=Object(pt.a)({onDrop:o}),s=a.getRootProps,c=a.getInputProps,d=a.isDragActive;return Object(i.jsxs)("div",Object(V.a)(Object(V.a)({},s()),{},{children:[Object(i.jsx)("input",Object(V.a)({},c())),d?Object(i.jsx)("p",{children:"Drop here ..."}):Object(i.jsx)("button",{children:"Add GPS"})]}))}function vt(){var t=Object(d.a)(["\n\nmutation MyMutation($id : Int, $geojson : jsonb) {\n\n  update_trip(where: {id: {_eq: $id}}, _set: {geojson: $geojson}) {\n    returning {\n      id\n    }\n  }\n}\n"]);return vt=function(){return t},t}var gt=m()(vt()),bt=function(t){t.trip;var e=t.children;return Object(i.jsx)(g.b,{onError:function(){return alert("Could not save trip")},mutation:gt,children:function(t,n){var o=n.loading,a=n.error;return Object(i.jsx)(r.Fragment,{children:e(t,o,a)})}})},mt=(n(503),function(t){var e=t.trip;return Object(i.jsx)("div",{className:"Front",children:Object(i.jsxs)(ut,{width:450,height:600,children:[Object(i.jsx)("h1",{children:"Lake District 2021"}),Object(i.jsx)(bt,{children:function(t,n){n.loading,n.error;return Object(i.jsx)(ft,{trip:e,updateTripGeojson:t})}}),Object(i.jsx)("img",{style:{width:"300px",height:"auto"},src:"/textures/title.png"})]})})}),jt=(n(504),n(407));function xt(){var t=Object(d.a)(["\n\nmutation( $card_id : Int,  $text : String){\n                update_cards(where: {id: {_eq: $card_id}}, _set: {text: $text}) {\n                    returning {\n                                id\n                              }\n                    }\n                }\n"]);return xt=function(){return t},t}function yt(){var t=Object(d.a)(["\n\nmutation( $card_id : Int,  $title : String){\n                update_cards(where: {id: {_eq: $card_id}}, _set: {title: $title}) {\n                    returning {\n                                id\n                              }\n                    }\n                }\n"]);return yt=function(){return t},t}var Ot=m()(yt()),Pt=m()(xt()),wt=function(t){var e=t.card,n=(t.i,Object(r.useState)(170)),o=Object(c.a)(n,2),a=o[0];o[1];return Object(i.jsx)("div",{className:"Title",children:Object(i.jsxs)(ut,{width:350,height:a,children:[Object(i.jsx)(g.b,{onError:function(){return alert("Could not save title")},mutation:Ot,children:function(t,n){n.loading,n.error;return Object(i.jsx)("h1",{onBlur:function(n){return t({variables:{title:n.currentTarget.textContent,card_id:e.id}})},contentEditable:!0,suppressContentEditableWarning:!0,children:e.title})}}),Object(i.jsx)(g.b,{onError:function(){return alert("Could not save text")},mutation:Pt,children:function(t,n){n.loading,n.error;return Object(i.jsx)(jt.a,{onChange:function(n){t({variables:{text:n.currentTarget.value,card_id:e.id}})},defaultValue:e.text})}})]})})};function _t(){var t=Object(d.a)(["\n\nmutation( $card_id : Int,  $landscapecamera : jsonb){\n                update_cards(where: {id: {_eq: $card_id}}, _set: {landscapecamera: $landscapecamera}) {\n                    returning {\n                                camera\n                                id\n                              }\n                    }\n                }\n"]);return _t=function(){return t},t}function St(){var t=Object(d.a)(["\n\nmutation( $card_id : Int,  $annotations : jsonb){\n                update_cards(where: {id: {_eq: $card_id}}, _set: {annotations: $annotations}) {\n                    returning {\n                                camera\n                                id\n                              }\n                    }\n                }\n"]);return St=function(){return t},t}function Lt(){var t=Object(d.a)(["\n\nmutation( $card_id : Int,  $map : jsonb){\n                update_cards(where: {id: {_eq: $card_id}}, _set: {map: $map}) {\n                    returning {\n                                camera\n                                id\n                              }\n                    }\n                }\n"]);return Lt=function(){return t},t}function Ct(){var t=Object(d.a)(["\n\nmutation( $card_id : Int,  $camera : jsonb){\n                update_cards(where: {id: {_eq: $card_id}}, _set: {camera: $camera}) {\n                    returning {\n                                camera\n                                id\n                              }\n                    }\n                }\n"]);return Ct=function(){return t},t}var Et=m()(Ct()),kt=m()(Lt()),At=m()(St()),Tt=m()(_t()),Ft=function(t){var e=t.refetch,n=t.children;return Object(i.jsx)("div",{children:Object(i.jsx)(g.b,{onError:function(){return alert("Could not save map")},mutation:kt,children:function(t,o){o.loading,o.error;return Object(i.jsx)(g.b,{onError:function(){return alert("Could not save camera")},mutation:Et,children:function(o,a){a.loading,a.error;return Object(i.jsx)(r.Fragment,{children:Object(i.jsx)(g.b,{onError:function(){return alert("Could not save camera")},mutation:At,children:function(a,s){s.loading,s.error;return Object(i.jsx)(r.Fragment,{children:Object(i.jsx)(g.b,{onError:function(){return alert("Could not save landscaape")},mutation:Tt,onCompleted:function(){return e()},children:function(e,s){var c=s.loading,d=s.error;return Object(i.jsx)(r.Fragment,{children:n(o,t,a,e,c,d)})}})})}})})}})}})})};n(505);l.a.registerPlugin(u.a);var Mt=function(t){var e=Object(r.useState)(!1),n=Object(c.a)(e,2),o=n[0],a=n[1],s=Object(r.useState)(t.card.camera),d=Object(c.a)(s,2),l=d[0],p=d[1],h=Object(r.useRef)();return Object(r.useLayoutEffect)((function(){var t=u.a.create({trigger:h.current,start:function(){return"top bottom"},end:function(){return"bottom top"},onEnter:function(){a(!0)},onEnterBack:function(){a(!0)},onLeave:function(){a(!1)},onLeaveBack:function(){a(!1)},scrub:1});return function(){t.kill()}})),Object(i.jsx)("div",{className:"sketch-card",ref:h,children:Object(i.jsx)("div",{className:"rendering-card-content",children:Object(i.jsx)(Ft,{refetch:t.refetch,children:function(e,n,r,a,s,c){return Object(i.jsx)("div",{className:"Sketch",children:o?Object(i.jsx)(j.b,{viewState:l,setViewState:p,node:t.portalNode2,updateLandscape:a,updateCard:e,trip:t.trip,card:t.card}):null})}})})})},$t=(n(506),n(61)),Nt=(n(507),n(305)),zt=n.n(Nt),It=n(404),Bt=n(112),Rt=function(t,e){var n=Bt.Util.withSnakeCaseKeys(e);return Bt.Cloudinary.new().url(t,n)};function Gt(){return(Gt=Object(It.a)(zt.a.mark((function t(e,n){var i,r;return zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i={cloudName:"db8uwhsbg",format:"json",type:"list",version:Math.ceil((new Date).getTime()/1e3)},r=Rt(e.toString(),i),fetch(r).then((function(t){return t.text()})).then((function(t){return t?n(JSON.parse(t).resources.map((function(t){return t.public_id}))):[]})).catch((function(t){return console.log(t)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Dt(){var t=Object(d.a)(["\n   mutation insert_card_asset($objects: [card_asset_insert_input!]! ) {\n        insert_card_asset(objects: $objects) {\n            returning {\n                id\n            }\n        }\n    }\n"]);return Dt=function(){return t},t}var Wt=m()(Dt());var Ut=function(t){var e=t.card,n=t.refetch,o=Object(r.useState)([]),a=Object(c.a)(o,2),s=a[0],d=a[1],l=function(t,n){!function(t,e){var n=Bt.Util.withSnakeCaseKeys(t);window.cloudinary.openUploadWidget(n,e)}({cloudName:"db8uwhsbg",tags:[t,"beatroute"],uploadPreset:"ml_default"},(function(t,i){t?console.log(t):"success"===i.event&&(n({variables:{objects:[i].map((function(t){return{card_id:e.id,type:"PHOTO",data:t}}))}}),d([].concat(Object($t.a)(s),[i])))}))};return Object(r.useEffect)((function(){!function(t,e){Gt.apply(this,arguments)}("image",d)}),[]),Object(i.jsx)("div",{children:Object(i.jsx)(g.b,{onError:function(){return alert({message:"Could not add photo"})},onCompleted:function(){n()},mutation:Wt,children:function(t,e){e.loading,e.error;return Object(i.jsx)(r.Fragment,{children:Object(i.jsx)("button",{onClick:function(){return l("image",t)},children:"Upload Image"})})}})})};function Vt(t){var e=t.card,n=t.refetch,r=function(t){return t%2===0?4*(Math.random()-1.5):8*Math.random()};return console.log(e),Object(i.jsxs)("div",{className:"mask-mode-container",children:[Array(1).fill(1).map((function(t,n){return Object(i.jsx)("div",{className:"frame",style:{transform:"rotate(".concat(r(n),"deg)")},children:Object(i.jsx)("div",{className:"mask-mode",children:Object(i.jsxs)("div",{style:{width:"100%"},children:[0===e.assets.length&&Object(i.jsx)("img",{src:"/textures/blank_polaroid_black.png",alt:""}),1===e.assets.length&&Object(i.jsx)("img",{src:e.assets[0].data.info.url,alt:""})]})})},n)})),Object(i.jsx)("div",{className:"Add",children:Object(i.jsx)(Ut,{card:e,refetch:n})})]})}function Zt(){var t=Object(d.a)(['\n\nmutation MyMutation($trip_id : Int) {\n  insert_cards(objects: {trip_id: $trip_id, type: "Front"}) {\n    returning {\n      id\n    }\n  }\n}\n']);return Zt=function(){return t},t}var qt=m()(Zt()),Jt=function(t){var e=t.trip,n=t.refetch;return Object(i.jsx)("div",{children:Object(i.jsx)(g.b,{onError:function(){return alert("Could not add front card")},onCompleted:function(){return n()},mutation:qt,variables:{trip_id:e.id},children:function(t,e){e.loading,e.error;return Object(i.jsx)("wired-button",{elevation:"2",onClick:t,children:"Add Front"})}})})};function Kt(){var t=Object(d.a)(['\n\nmutation MyMutation($trip_id : Int) {\n  insert_cards(objects: {trip_id: $trip_id, type: "Title"}) {\n    returning {\n      id\n    }\n  }\n}\n']);return Kt=function(){return t},t}var Ht=m()(Kt()),Xt=function(t){var e=t.trip,n=t.refetch;return Object(i.jsx)("div",{children:Object(i.jsx)(g.b,{onError:function(){return alert("Could not add title card")},onCompleted:function(){return n()},mutation:Ht,variables:{trip_id:e.id},children:function(t,e){e.loading,e.error;return Object(i.jsx)("wired-button",{elevation:"2",onClick:t,children:"Add Title"})}})})};function Yt(){var t=Object(d.a)(['\n\nmutation MyMutation($content : jsonb, $trip_id : Int) {\n  insert_cards(objects: {trip_id: $trip_id, type: "PhotosOnMap", content : $content}) {\n    returning {\n      id\n    }\n  }\n}\n']);return Yt=function(){return t},t}var Qt=m()(Yt()),te={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[0,0],[4,0],[4,4],[0,4],[0,0]]]},properties:{type:"map"}},{type:"Feature",geometry:{type:"Point",coordinates:[-1.845703125,2.0210651187669897]},properties:{type:"photo"}}]},ee=function(t){var e=t.trip,n=t.refetch;return Object(i.jsx)("div",{children:Object(i.jsx)(g.b,{onError:function(){return alert("Could not add title card")},onCompleted:function(){return n()},mutation:Qt,variables:{content:te,trip_id:e.id},children:function(t,e){e.loading,e.error;return Object(i.jsx)("wired-button",{elevation:"2",onClick:t,children:"Add Photos On Map"})}})})};function ne(){var t=Object(d.a)(['\n\nmutation ($content : jsonb, $camera : jsonb, $polaroid_camera : jsonb, $trip_id : Int) {\n\n  insert_cards(objects: [\n                {trip_id: $trip_id, type: "Title", content : $content, camera : $camera},\n                {trip_id: $trip_id, type: "Sketch", content : $content, camera : $camera},\n                {trip_id: $trip_id, type: "Landscape", content : $content, camera : $polaroid_camera},\n                {trip_id: $trip_id, type: "Polaroid", content : $content, camera : $polaroid_camera},\n              \n                ]) {\n    returning {\n      id\n    }\n  }\n}\n\n\n\n']);return ne=function(){return t},t}var ie=m()(ne()),re={zoom:3.0129167754311057,pitch:0,width:500,height:600,bearing:0,maxZoom:20,minZoom:0,altitude:1.5,latitude:8.256043799900645,maxBearing:0,minBearing:0,longitude:2.6226391365730866},oe={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[0,0],[4,0],[4,4],[0,4],[0,0]]]},properties:{type:"map"}},{type:"Feature",geometry:{type:"Point",coordinates:[-1.845703125,2.0210651187669897]},properties:{type:"photo"}}]},ae={zoom:2.0340441946918117,target:[21.82497956377069,41.576120620825634,0],maxZoom:20,minZoom:0,orbitAxis:"Z",rotationX:0,maxRotationX:90,minRotationX:-90,rotationOrbit:0},se=function(t){var e=t.trip,n=t.refetch;return Object(i.jsx)("div",{children:Object(i.jsx)(g.b,{onError:function(){return alert("Could not add sketch card")},onCompleted:function(){return n()},mutation:ie,variables:{content:oe,camera:re,trip_id:e.id,polaroid_camera:ae},children:function(t,n){n.loading,n.error;return Object(i.jsxs)("wired-button",{elevation:"2",onClick:t,children:["Add Sketch and photos ",e.name]})}})})},ce=function(t){var e=t.trip,n=t.refetch,o=Object(r.useState)(!1),a=Object(c.a)(o,2),s=a[0],d=a[1];return Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("wired-button",{elevation:"2",onClick:function(){d(!0)},children:"Add Content"}),s&&Object(i.jsxs)("div",{children:[Object(i.jsx)(Jt,{trip:e,refetch:n}),Object(i.jsx)("br",{}),Object(i.jsx)(Xt,{trip:e,refetch:n}),Object(i.jsx)("br",{}),Object(i.jsx)(ee,{trip:e,refetch:n}),Object(i.jsx)("br",{}),Object(i.jsx)(se,{trip:e,refetch:n})]})]})};function de(){var t=Object(d.a)(['\n               {\n                owners(where: {id: {_eq: "cyclefriendly"}}) {\n                  id\n                  \n                  trips(where: {url: {_eq: "lakes2021"}}) {\n                    id\n                    name\n                    url\n                    geojson\n                    cards(order_by: {id: asc}) {\n                      id\n                      html\n                      type\n                      map\n                      title\n                      text\n                      camera\n                      content\n                      annotations\n                      landscapecamera\n                      assets {\n                        data\n                      }\n                    }\n                  }\n                }\n              }\n\n']);return de=function(){return t},t}var le=m()(de());l.a.registerPlugin(u.a);var ue=new h.a({uri:"https://beatroute2019.herokuapp.com/v1/graphql"}),pe=new f.a({link:ue,cache:new v.a}),he=function(){var t=o.a.useMemo((function(){return j.c()}),[]),e=o.a.useMemo((function(){return j.c()}),[]),n=Object(r.useState)(0),a=Object(c.a)(n,2),s=a[0],d=a[1],l=!0;return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(g.a,{client:pe,children:Object(i.jsx)(g.c,{query:le,children:function(n){var o=n.loading,a=(n.error,n.data),c=n.refetch;if(o||!a)return null;var u=a.owners[0].trips[0],h=a.owners[0].trips[0].cards,f=s<h.length;return Object(x.coordEach)(u.geojson,(function(t){t.length>2&&t.pop()})),Object(i.jsx)(r.Fragment,{children:Object(i.jsx)(p.a,{bounds:!0,children:function(n){var r=n.measureRef,o=n.contentRect.bounds.width;return Object(i.jsxs)("main",{className:"App-main",children:[Object(i.jsx)(j.a,{node:e,children:Object(i.jsx)(lt,{trip:u,width:o,updateCard:function(){return alert("not implemented")}})}),h.map((function(n,r){return"Front"===n.type?Object(i.jsxs)("div",{className:"App-section",children:[Object(i.jsx)("code",{children:n.id}),Object(i.jsx)(mt,{trip:u,card:n,index:r},r+""+n.id)]},r):"Title"===n.type?Object(i.jsxs)("div",{className:"App-section",children:[Object(i.jsx)("code",{children:n.id}),Object(i.jsx)(wt,{card:n,i:r},r+""+n.id)]},r):"Sketch"===n.type?Object(i.jsxs)("div",{className:"App-section",children:[Object(i.jsx)("code",{children:JSON.stringify(n.id)}),Object(i.jsx)(Mt,{trip:u,portalNode:t,portalNode2:e,width:o<500?o:500,admin:l,stillLoading:f,incrementLoadedCount:function(){return d(s+1)},index:r,card:n,refetch:c},r+""+n.id)]},r):"Polaroid"===n.type?Object(i.jsxs)("div",{className:"App-section",children:[Object(i.jsx)("code",{children:n.id}),Object(i.jsx)(Vt,{width:o<500?o:500,admin:l,stillLoading:f,incrementLoadedCount:function(){return d(s+1)},index:r,card:n,refetch:c},r+""+n.id)]},r):null})),Object(i.jsx)("div",{className:"App-section",style:{height:"100%"},children:Object(i.jsx)(ce,{trip:u,refetch:c})}),Object(i.jsxs)("div",{ref:r,children:["My width is ",o]})]})}})})}})})})},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var ge=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,659)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),o(t),a(t)}))};s.a.render(Object(i.jsx)(he,{}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");fe?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):ve(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ve(e,t)}))}}(),ge()}},[[625,1,2]]]);
//# sourceMappingURL=main.c06a045d.chunk.js.map