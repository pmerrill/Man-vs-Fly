
if (typeof gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions !== "undefined") {
  gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions = {};
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1= [];
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2= [];
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3= [];
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects4= [];

gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.conditionTrue_0 = {val:false};
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Min")).setNumber(Math.abs((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MinDistanceBetweenPositions")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3);


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Min")) == 0 ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length = k;}if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Min")).setNumber(100);
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Max")).setNumber(Math.abs((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxDistanceBetweenPositions")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3);


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Max")) == 0 ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length = k;}if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Max")).setNumber(200);
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Direction")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Direction")) || 0 : 0));
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionBias")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DirectionBias")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("DistanceSelected")).setNumber(gdjs.randomInRange((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Min"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Max")))));
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionOffsetRange")).setNumber(360 * (1 - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionBias")))) * 0.5);
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionOffsetSelected")).setNumber(gdjs.randomInRange(-(1) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionOffsetRange"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionOffsetRange")))));
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionSelected")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("Direction"))) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionOffsetSelected"))));
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getVariables().get("__TravelToRandomPositions").getChild("Xpos")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getVariables().get("__TravelToRandomPositions").getChild("DistanceSelected"))) * Math.cos(gdjs.toRad((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionSelected"))))));
}
}{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getVariables().get("__TravelToRandomPositions").getChild("Ypos")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getVariables().get("__TravelToRandomPositions").getChild("DistanceSelected"))) * Math.sin(gdjs.toRad((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getVariables().get("__TravelToRandomPositions").getChild("DirectionSelected"))))));
}
}}

}


};gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2);


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getY() == 0 ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length = k;}if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Pathfinding")).moveTo(runtimeScene, gdjs.randomInRange(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)), gdjs.randomInRange(gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2);


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getX() == 0 ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length = k;}if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Pathfinding")).moveTo(runtimeScene, gdjs.randomInRange(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)), gdjs.randomInRange(gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2);


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getX() >= gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length = k;}if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Pathfinding")).moveTo(runtimeScene, gdjs.randomInRange(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)), gdjs.randomInRange(gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2);


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getY() >= gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length = k;}if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Pathfinding")).moveTo(runtimeScene, gdjs.randomInRange(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)), gdjs.randomInRange(gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2);


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getY() <= 0 ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getX() <= 0 ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Pathfinding")).moveTo(runtimeScene, gdjs.randomInRange(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)), gdjs.randomInRange(gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getLayer()), 0)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1, gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2);


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getX() != 0 ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length = k;}if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Pathfinding")).moveTo(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getX()) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getVariables().get("__TravelToRandomPositions").getChild("Xpos"))), (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getY()) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2[i].getVariables().get("__TravelToRandomPositions").getChild("Ypos"))));
}
}}

}


{

/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1 */

gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[i].getY() != 0 ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1.length = k;}if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Pathfinding")).moveTo(runtimeScene, (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[i].getX()) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[i].getVariables().get("__TravelToRandomPositions").getChild("Xpos"))), (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[i].getY()) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[i].getVariables().get("__TravelToRandomPositions").getChild("Ypos"))));
}
}}

}


};gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList2(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1);

gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = false;
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Pathfinding")).getSpeed() == 0 ) {
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[k] = gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("isFlyKilled"), false);
}}
if (gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.func = function(runtimeScene, Object, Pathfinding, MinDistanceBetweenPositions, MaxDistanceBetweenPositions, Direction, DirectionBias, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Pathfinding": Pathfinding
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "MinDistanceBetweenPositions") return MinDistanceBetweenPositions;
if (argName === "MaxDistanceBetweenPositions") return MaxDistanceBetweenPositions;
if (argName === "Direction") return Direction;
if (argName === "DirectionBias") return DirectionBias;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects1.length = 0;
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects2.length = 0;
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects3.length = 0;
gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.GDObjectObjects4.length = 0;

gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.eventsList4(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.registeredGdjsCallbacks = [];