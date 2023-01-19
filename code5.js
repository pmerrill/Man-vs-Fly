gdjs.CreditsCode = {};
gdjs.CreditsCode.GDBackButtonTextObjects1_1final = [];

gdjs.CreditsCode.GDSkyObjects1= [];
gdjs.CreditsCode.GDSkyObjects2= [];
gdjs.CreditsCode.GDMountainsObjects1= [];
gdjs.CreditsCode.GDMountainsObjects2= [];
gdjs.CreditsCode.GDBackgroundObjects1= [];
gdjs.CreditsCode.GDBackgroundObjects2= [];
gdjs.CreditsCode.GDBackStoryObjects1= [];
gdjs.CreditsCode.GDBackStoryObjects2= [];
gdjs.CreditsCode.GDDeveloperObjects1= [];
gdjs.CreditsCode.GDDeveloperObjects2= [];
gdjs.CreditsCode.GDCreditsObjects1= [];
gdjs.CreditsCode.GDCreditsObjects2= [];
gdjs.CreditsCode.GDmtcbandObjects1= [];
gdjs.CreditsCode.GDmtcbandObjects2= [];
gdjs.CreditsCode.GDBackButtonObjects1= [];
gdjs.CreditsCode.GDBackButtonObjects2= [];
gdjs.CreditsCode.GDBackButtonTextObjects1= [];
gdjs.CreditsCode.GDBackButtonTextObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};
gdjs.CreditsCode.condition3IsTrue_0 = {val:false};
gdjs.CreditsCode.conditionTrue_1 = {val:false};
gdjs.CreditsCode.condition0IsTrue_1 = {val:false};
gdjs.CreditsCode.condition1IsTrue_1 = {val:false};
gdjs.CreditsCode.condition2IsTrue_1 = {val:false};
gdjs.CreditsCode.condition3IsTrue_1 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDDeveloperObjects1Objects = Hashtable.newFrom({"Developer": gdjs.CreditsCode.GDDeveloperObjects1});
gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDmtcbandObjects1Objects = Hashtable.newFrom({"mtcband": gdjs.CreditsCode.GDmtcbandObjects1});
gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.CreditsCode.GDBackButtonObjects1});
gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackButtonTextObjects2Objects = Hashtable.newFrom({"BackButtonText": gdjs.CreditsCode.GDBackButtonTextObjects2});
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.CreditsCode.GDSkyObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDSkyObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDSkyObjects1[i].setOpacity(190);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Developer"), gdjs.CreditsCode.GDDeveloperObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDDeveloperObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition1IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13392332);
}
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://petemerrill.com", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mtcband"), gdjs.CreditsCode.GDmtcbandObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDmtcbandObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition1IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14309788);
}
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://freesound.org/people/mtcband/sounds/128805/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.CreditsCode.GDBackButtonObjects1);
gdjs.CreditsCode.GDBackButtonTextObjects1.length = 0;


gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition1IsTrue_0;
gdjs.CreditsCode.GDBackButtonTextObjects1_1final.length = 0;gdjs.CreditsCode.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("BackButtonText"), gdjs.CreditsCode.GDBackButtonTextObjects2);
gdjs.CreditsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackButtonTextObjects2Objects, runtimeScene, true, false);
if( gdjs.CreditsCode.condition0IsTrue_1.val ) {
    gdjs.CreditsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.CreditsCode.GDBackButtonTextObjects2.length;j<jLen;++j) {
        if ( gdjs.CreditsCode.GDBackButtonTextObjects1_1final.indexOf(gdjs.CreditsCode.GDBackButtonTextObjects2[j]) === -1 )
            gdjs.CreditsCode.GDBackButtonTextObjects1_1final.push(gdjs.CreditsCode.GDBackButtonTextObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CreditsCode.GDBackButtonTextObjects1_1final, gdjs.CreditsCode.GDBackButtonTextObjects1);
}
}
}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition2IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11965924);
}
}}
}
if (gdjs.CreditsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDSkyObjects1.length = 0;
gdjs.CreditsCode.GDSkyObjects2.length = 0;
gdjs.CreditsCode.GDMountainsObjects1.length = 0;
gdjs.CreditsCode.GDMountainsObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDBackStoryObjects1.length = 0;
gdjs.CreditsCode.GDBackStoryObjects2.length = 0;
gdjs.CreditsCode.GDDeveloperObjects1.length = 0;
gdjs.CreditsCode.GDDeveloperObjects2.length = 0;
gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;
gdjs.CreditsCode.GDmtcbandObjects1.length = 0;
gdjs.CreditsCode.GDmtcbandObjects2.length = 0;
gdjs.CreditsCode.GDBackButtonObjects1.length = 0;
gdjs.CreditsCode.GDBackButtonObjects2.length = 0;
gdjs.CreditsCode.GDBackButtonTextObjects1.length = 0;
gdjs.CreditsCode.GDBackButtonTextObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);

return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
