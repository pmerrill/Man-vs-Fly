gdjs.GameOverCode = {};
gdjs.GameOverCode.GDtryAgainObjects1_1final = [];

gdjs.GameOverCode.GDgameOverObjects1= [];
gdjs.GameOverCode.GDgameOverObjects2= [];
gdjs.GameOverCode.GDSkyObjects1= [];
gdjs.GameOverCode.GDSkyObjects2= [];
gdjs.GameOverCode.GDMountainsObjects1= [];
gdjs.GameOverCode.GDMountainsObjects2= [];
gdjs.GameOverCode.GDBackgroundObjects1= [];
gdjs.GameOverCode.GDBackgroundObjects2= [];
gdjs.GameOverCode.GDHeroObjects1= [];
gdjs.GameOverCode.GDHeroObjects2= [];
gdjs.GameOverCode.GDFlyObjects1= [];
gdjs.GameOverCode.GDFlyObjects2= [];
gdjs.GameOverCode.GDtryAgainObjects1= [];
gdjs.GameOverCode.GDtryAgainObjects2= [];
gdjs.GameOverCode.GDButtonObjects1= [];
gdjs.GameOverCode.GDButtonObjects2= [];
gdjs.GameOverCode.GDLeaderboardObjects1= [];
gdjs.GameOverCode.GDLeaderboardObjects2= [];
gdjs.GameOverCode.GDcurrentScoreObjects1= [];
gdjs.GameOverCode.GDcurrentScoreObjects2= [];
gdjs.GameOverCode.GDuserHighScoreObjects1= [];
gdjs.GameOverCode.GDuserHighScoreObjects2= [];
gdjs.GameOverCode.GDleaderboardInstructionsObjects1= [];
gdjs.GameOverCode.GDleaderboardInstructionsObjects2= [];
gdjs.GameOverCode.GDuserNameEntryObjects1= [];
gdjs.GameOverCode.GDuserNameEntryObjects2= [];
gdjs.GameOverCode.GDsaveUserNameObjects1= [];
gdjs.GameOverCode.GDsaveUserNameObjects2= [];
gdjs.GameOverCode.GDleaderboardSaveTextObjects1= [];
gdjs.GameOverCode.GDleaderboardSaveTextObjects2= [];
gdjs.GameOverCode.GDusernameTextObjects1= [];
gdjs.GameOverCode.GDusernameTextObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.condition3IsTrue_0 = {val:false};
gdjs.GameOverCode.condition4IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};
gdjs.GameOverCode.condition3IsTrue_1 = {val:false};
gdjs.GameOverCode.condition4IsTrue_1 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.GameOverCode.GDButtonObjects1});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDtryAgainObjects2Objects = Hashtable.newFrom({"tryAgain": gdjs.GameOverCode.GDtryAgainObjects2});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDFlyObjects1Objects = Hashtable.newFrom({"Fly": gdjs.GameOverCode.GDFlyObjects1});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDLeaderboardObjects1Objects = Hashtable.newFrom({"Leaderboard": gdjs.GameOverCode.GDLeaderboardObjects1});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDsaveUserNameObjects1Objects = Hashtable.newFrom({"saveUserName": gdjs.GameOverCode.GDsaveUserNameObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("currentScore"), gdjs.GameOverCode.GDcurrentScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("leaderboardInstructions"), gdjs.GameOverCode.GDleaderboardInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("leaderboardSaveText"), gdjs.GameOverCode.GDleaderboardSaveTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("saveUserName"), gdjs.GameOverCode.GDsaveUserNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("userHighScore"), gdjs.GameOverCode.GDuserHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("userNameEntry"), gdjs.GameOverCode.GDuserNameEntryObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "95fe7f6a064b3e17dce2774ad92cee83f877d2d6dda1cd16d79b876ca572911c_Death.aac", 1, false, 50, 1);
}{for(var i = 0, len = gdjs.GameOverCode.GDcurrentScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDcurrentScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardInstructionsObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardInstructionsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDuserNameEntryObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserNameEntryObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDsaveUserNameObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDsaveUserNameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserHighScoreObjects1[i].hide();
}
}{gdjs.evtTools.storage.readNumberFromJSONFile("highScore", "highScore", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readStringFromJSONFile("username", "username", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameOverCode.GDButtonObjects1);
gdjs.GameOverCode.GDtryAgainObjects1.length = 0;


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.GDtryAgainObjects1_1final.length = 0;gdjs.GameOverCode.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("tryAgain"), gdjs.GameOverCode.GDtryAgainObjects2);
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDtryAgainObjects2Objects, runtimeScene, true, false);
if( gdjs.GameOverCode.condition0IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameOverCode.GDtryAgainObjects2.length;j<jLen;++j) {
        if ( gdjs.GameOverCode.GDtryAgainObjects1_1final.indexOf(gdjs.GameOverCode.GDtryAgainObjects2[j]) === -1 )
            gdjs.GameOverCode.GDtryAgainObjects1_1final.push(gdjs.GameOverCode.GDtryAgainObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameOverCode.GDtryAgainObjects1_1final, gdjs.GameOverCode.GDtryAgainObjects1);
}
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.GameOverCode.GDFlyObjects1);
{gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.func(runtimeScene, gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDFlyObjects1Objects, "Pathfinding", 100, 200, 360, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.GameOverCode.GDFlyObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDFlyObjects1[i].getX() < 0 ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDFlyObjects1[k] = gdjs.GameOverCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDFlyObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDFlyObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFlyObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFlyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.randomInRange(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0)), gdjs.randomInRange(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.GameOverCode.GDFlyObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDFlyObjects1[i].getX() > gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDFlyObjects1[k] = gdjs.GameOverCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDFlyObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDFlyObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFlyObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFlyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.randomInRange(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0)), gdjs.randomInRange(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.GameOverCode.GDFlyObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDFlyObjects1[i].getY() < 0 ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDFlyObjects1[k] = gdjs.GameOverCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDFlyObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDFlyObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFlyObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFlyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.randomInRange(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0)), gdjs.randomInRange(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.GameOverCode.GDFlyObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDFlyObjects1[i].getX() > gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDFlyObjects1[k] = gdjs.GameOverCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDFlyObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDFlyObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFlyObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFlyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.randomInRange(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0)), gdjs.randomInRange(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GameOverCode.GDLeaderboardObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDLeaderboardObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15396156);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "e89a9251-06fe-446c-81de-0218ab93f592", true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LeaderboardBackground");
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15397340);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("leaderboardInstructions"), gdjs.GameOverCode.GDleaderboardInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("saveUserName"), gdjs.GameOverCode.GDsaveUserNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("userNameEntry"), gdjs.GameOverCode.GDuserNameEntryObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardInstructionsObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardInstructionsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDuserNameEntryObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserNameEntryObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDsaveUserNameObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDsaveUserNameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDsaveUserNameObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDsaveUserNameObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 2, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDuserNameEntryObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserNameEntryObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 2, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("saveUserName"), gdjs.GameOverCode.GDsaveUserNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("userNameEntry"), gdjs.GameOverCode.GDuserNameEntryObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
gdjs.GameOverCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDuserNameEntryObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDuserNameEntryObjects1[i].getString() != "" ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDuserNameEntryObjects1[k] = gdjs.GameOverCode.GDuserNameEntryObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDuserNameEntryObjects1.length = k;}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDuserNameEntryObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDuserNameEntryObjects1[i].getString() != "0" ) {
        gdjs.GameOverCode.condition1IsTrue_0.val = true;
        gdjs.GameOverCode.GDuserNameEntryObjects1[k] = gdjs.GameOverCode.GDuserNameEntryObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDuserNameEntryObjects1.length = k;}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
gdjs.GameOverCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDsaveUserNameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition2IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition3IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15399620);
}
}}
}
}
if (gdjs.GameOverCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDuserNameEntryObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setString((( gdjs.GameOverCode.GDuserNameEntryObjects1.length === 0 ) ? "" :gdjs.GameOverCode.GDuserNameEntryObjects1[0].getString()));
}{gdjs.evtTools.storage.writeStringInJSONFile("username", "username", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15400804);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("leaderboardInstructions"), gdjs.GameOverCode.GDleaderboardInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("saveUserName"), gdjs.GameOverCode.GDsaveUserNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("userNameEntry"), gdjs.GameOverCode.GDuserNameEntryObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardInstructionsObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardInstructionsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDuserNameEntryObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserNameEntryObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDsaveUserNameObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDsaveUserNameObjects1[i].hide();
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15402116);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "e89a9251-06fe-446c-81de-0218ab93f592", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.isSaving("e89a9251-06fe-446c-81de-0218ab93f592");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15403476);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("leaderboardSaveText"), gdjs.GameOverCode.GDleaderboardSaveTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i].setString("Saving score...");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("leaderboardSaveText"), gdjs.GameOverCode.GDleaderboardSaveTextObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isSaving("e89a9251-06fe-446c-81de-0218ab93f592"));
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i].getString() == "Saving score..." ) {
        gdjs.GameOverCode.condition1IsTrue_0.val = true;
        gdjs.GameOverCode.GDleaderboardSaveTextObjects1[k] = gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length = k;}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14962556);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDleaderboardSaveTextObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i].hide();
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.hasBeenSaved("e89a9251-06fe-446c-81de-0218ab93f592");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15404676);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.GameOverCode.GDLeaderboardObjects1);
gdjs.copyArray(runtimeScene.getObjects("leaderboardSaveText"), gdjs.GameOverCode.GDleaderboardSaveTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i].setString("Score was saved!");
}
}{for(var i = 0, len = gdjs.GameOverCode.GDLeaderboardObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDLeaderboardObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 2, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
gdjs.GameOverCode.condition3IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.hasSavingErrored("e89a9251-06fe-446c-81de-0218ab93f592");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
gdjs.GameOverCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.GameOverCode.condition2IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition3IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8138628);
}
}}
}
}
if (gdjs.GameOverCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("leaderboardSaveText"), gdjs.GameOverCode.GDleaderboardSaveTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDleaderboardSaveTextObjects1[i].setString("Your score couldn't be saved.");
}
}}

}


{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}}

}


{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("userHighScore"), gdjs.GameOverCode.GDuserHighScoreObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserHighScoreObjects1[i].hide();
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15409372);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("userHighScore"), gdjs.GameOverCode.GDuserHighScoreObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserHighScoreObjects1[i].setString("Your High Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserHighScoreObjects1[i].hide(false);
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15410012);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("userHighScore"), gdjs.GameOverCode.GDuserHighScoreObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("highScore", "highScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.GameOverCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserHighScoreObjects1[i].setString("Your High Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDuserHighScoreObjects1[i].hide(false);
}
}}

}


{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) != "";
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) != "0";
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15412436);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("usernameText"), gdjs.GameOverCode.GDusernameTextObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.GameOverCode.GDusernameTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDusernameTextObjects1[i].setString("Username: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDgameOverObjects1.length = 0;
gdjs.GameOverCode.GDgameOverObjects2.length = 0;
gdjs.GameOverCode.GDSkyObjects1.length = 0;
gdjs.GameOverCode.GDSkyObjects2.length = 0;
gdjs.GameOverCode.GDMountainsObjects1.length = 0;
gdjs.GameOverCode.GDMountainsObjects2.length = 0;
gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDHeroObjects1.length = 0;
gdjs.GameOverCode.GDHeroObjects2.length = 0;
gdjs.GameOverCode.GDFlyObjects1.length = 0;
gdjs.GameOverCode.GDFlyObjects2.length = 0;
gdjs.GameOverCode.GDtryAgainObjects1.length = 0;
gdjs.GameOverCode.GDtryAgainObjects2.length = 0;
gdjs.GameOverCode.GDButtonObjects1.length = 0;
gdjs.GameOverCode.GDButtonObjects2.length = 0;
gdjs.GameOverCode.GDLeaderboardObjects1.length = 0;
gdjs.GameOverCode.GDLeaderboardObjects2.length = 0;
gdjs.GameOverCode.GDcurrentScoreObjects1.length = 0;
gdjs.GameOverCode.GDcurrentScoreObjects2.length = 0;
gdjs.GameOverCode.GDuserHighScoreObjects1.length = 0;
gdjs.GameOverCode.GDuserHighScoreObjects2.length = 0;
gdjs.GameOverCode.GDleaderboardInstructionsObjects1.length = 0;
gdjs.GameOverCode.GDleaderboardInstructionsObjects2.length = 0;
gdjs.GameOverCode.GDuserNameEntryObjects1.length = 0;
gdjs.GameOverCode.GDuserNameEntryObjects2.length = 0;
gdjs.GameOverCode.GDsaveUserNameObjects1.length = 0;
gdjs.GameOverCode.GDsaveUserNameObjects2.length = 0;
gdjs.GameOverCode.GDleaderboardSaveTextObjects1.length = 0;
gdjs.GameOverCode.GDleaderboardSaveTextObjects2.length = 0;
gdjs.GameOverCode.GDusernameTextObjects1.length = 0;
gdjs.GameOverCode.GDusernameTextObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
