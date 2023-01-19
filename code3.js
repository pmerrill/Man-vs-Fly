gdjs.WinnerCode = {};
gdjs.WinnerCode.GDkeepPlayingObjects1_1final = [];

gdjs.WinnerCode.GDSkyObjects1= [];
gdjs.WinnerCode.GDSkyObjects2= [];
gdjs.WinnerCode.GDMountainsObjects1= [];
gdjs.WinnerCode.GDMountainsObjects2= [];
gdjs.WinnerCode.GDBackgroundObjects1= [];
gdjs.WinnerCode.GDBackgroundObjects2= [];
gdjs.WinnerCode.GDWinnerObjects1= [];
gdjs.WinnerCode.GDWinnerObjects2= [];
gdjs.WinnerCode.GDFlyObjects1= [];
gdjs.WinnerCode.GDFlyObjects2= [];
gdjs.WinnerCode.GDcurrentScoreObjects1= [];
gdjs.WinnerCode.GDcurrentScoreObjects2= [];
gdjs.WinnerCode.GDkeepPlayingObjects1= [];
gdjs.WinnerCode.GDkeepPlayingObjects2= [];
gdjs.WinnerCode.GDButtonObjects1= [];
gdjs.WinnerCode.GDButtonObjects2= [];
gdjs.WinnerCode.GDLeaderboardObjects1= [];
gdjs.WinnerCode.GDLeaderboardObjects2= [];
gdjs.WinnerCode.GDuserHighScoreObjects1= [];
gdjs.WinnerCode.GDuserHighScoreObjects2= [];

gdjs.WinnerCode.conditionTrue_0 = {val:false};
gdjs.WinnerCode.condition0IsTrue_0 = {val:false};
gdjs.WinnerCode.condition1IsTrue_0 = {val:false};
gdjs.WinnerCode.condition2IsTrue_0 = {val:false};
gdjs.WinnerCode.condition3IsTrue_0 = {val:false};
gdjs.WinnerCode.conditionTrue_1 = {val:false};
gdjs.WinnerCode.condition0IsTrue_1 = {val:false};
gdjs.WinnerCode.condition1IsTrue_1 = {val:false};
gdjs.WinnerCode.condition2IsTrue_1 = {val:false};
gdjs.WinnerCode.condition3IsTrue_1 = {val:false};


gdjs.WinnerCode.mapOfGDgdjs_46WinnerCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.WinnerCode.GDButtonObjects1});
gdjs.WinnerCode.mapOfGDgdjs_46WinnerCode_46GDkeepPlayingObjects2Objects = Hashtable.newFrom({"keepPlaying": gdjs.WinnerCode.GDkeepPlayingObjects2});
gdjs.WinnerCode.mapOfGDgdjs_46WinnerCode_46GDLeaderboardObjects1Objects = Hashtable.newFrom({"Leaderboard": gdjs.WinnerCode.GDLeaderboardObjects1});
gdjs.WinnerCode.eventsList0 = function(runtimeScene) {

{


gdjs.WinnerCode.condition0IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WinnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.WinnerCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("currentScore"), gdjs.WinnerCode.GDcurrentScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("userHighScore"), gdjs.WinnerCode.GDuserHighScoreObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "751052bbd3de6938713ebbe8782cc3f6feba91f9e3caf27272335ac4e549c0cd_Complete_02.aac", 1, false, 50, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{for(var i = 0, len = gdjs.WinnerCode.GDcurrentScoreObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDcurrentScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.WinnerCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 3, 3, 2, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.WinnerCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDuserHighScoreObjects1[i].hide();
}
}{gdjs.evtTools.storage.readNumberFromJSONFile("highScore", "highScore", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.WinnerCode.GDButtonObjects1);
gdjs.WinnerCode.GDkeepPlayingObjects1.length = 0;


gdjs.WinnerCode.condition0IsTrue_0.val = false;
gdjs.WinnerCode.condition1IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinnerCode.mapOfGDgdjs_46WinnerCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinnerCode.condition0IsTrue_0.val ) {
{
{gdjs.WinnerCode.conditionTrue_1 = gdjs.WinnerCode.condition1IsTrue_0;
gdjs.WinnerCode.GDkeepPlayingObjects1_1final.length = 0;gdjs.WinnerCode.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("keepPlaying"), gdjs.WinnerCode.GDkeepPlayingObjects2);
gdjs.WinnerCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinnerCode.mapOfGDgdjs_46WinnerCode_46GDkeepPlayingObjects2Objects, runtimeScene, true, false);
if( gdjs.WinnerCode.condition0IsTrue_1.val ) {
    gdjs.WinnerCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.WinnerCode.GDkeepPlayingObjects2.length;j<jLen;++j) {
        if ( gdjs.WinnerCode.GDkeepPlayingObjects1_1final.indexOf(gdjs.WinnerCode.GDkeepPlayingObjects2[j]) === -1 )
            gdjs.WinnerCode.GDkeepPlayingObjects1_1final.push(gdjs.WinnerCode.GDkeepPlayingObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.WinnerCode.GDkeepPlayingObjects1_1final, gdjs.WinnerCode.GDkeepPlayingObjects1);
}
}
}}
if (gdjs.WinnerCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.WinnerCode.GDLeaderboardObjects1);

gdjs.WinnerCode.condition0IsTrue_0.val = false;
gdjs.WinnerCode.condition1IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinnerCode.mapOfGDgdjs_46WinnerCode_46GDLeaderboardObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinnerCode.condition0IsTrue_0.val ) {
{
{gdjs.WinnerCode.conditionTrue_1 = gdjs.WinnerCode.condition1IsTrue_0;
gdjs.WinnerCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15467068);
}
}}
if (gdjs.WinnerCode.condition1IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "e89a9251-06fe-446c-81de-0218ab93f592", true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LeaderboardBackground");
}}

}


{



}


{


gdjs.WinnerCode.condition0IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false);
}if (gdjs.WinnerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}}

}


{



}


{


gdjs.WinnerCode.condition0IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}if (gdjs.WinnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("userHighScore"), gdjs.WinnerCode.GDuserHighScoreObjects1);
{for(var i = 0, len = gdjs.WinnerCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDuserHighScoreObjects1[i].hide();
}
}}

}


{


gdjs.WinnerCode.condition0IsTrue_0.val = false;
gdjs.WinnerCode.condition1IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
}if ( gdjs.WinnerCode.condition0IsTrue_0.val ) {
{
{gdjs.WinnerCode.conditionTrue_1 = gdjs.WinnerCode.condition1IsTrue_0;
gdjs.WinnerCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15470188);
}
}}
if (gdjs.WinnerCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("userHighScore"), gdjs.WinnerCode.GDuserHighScoreObjects1);
{for(var i = 0, len = gdjs.WinnerCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDuserHighScoreObjects1[i].setString("Your High Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.WinnerCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDuserHighScoreObjects1[i].hide(false);
}
}}

}


{


gdjs.WinnerCode.condition0IsTrue_0.val = false;
gdjs.WinnerCode.condition1IsTrue_0.val = false;
gdjs.WinnerCode.condition2IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.WinnerCode.condition0IsTrue_0.val ) {
{
gdjs.WinnerCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
}if ( gdjs.WinnerCode.condition1IsTrue_0.val ) {
{
{gdjs.WinnerCode.conditionTrue_1 = gdjs.WinnerCode.condition2IsTrue_0;
gdjs.WinnerCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15472292);
}
}}
}
if (gdjs.WinnerCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("userHighScore"), gdjs.WinnerCode.GDuserHighScoreObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("highScore", "highScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.WinnerCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDuserHighScoreObjects1[i].setString("Your High Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.WinnerCode.GDuserHighScoreObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDuserHighScoreObjects1[i].hide(false);
}
}}

}


};

gdjs.WinnerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinnerCode.GDSkyObjects1.length = 0;
gdjs.WinnerCode.GDSkyObjects2.length = 0;
gdjs.WinnerCode.GDMountainsObjects1.length = 0;
gdjs.WinnerCode.GDMountainsObjects2.length = 0;
gdjs.WinnerCode.GDBackgroundObjects1.length = 0;
gdjs.WinnerCode.GDBackgroundObjects2.length = 0;
gdjs.WinnerCode.GDWinnerObjects1.length = 0;
gdjs.WinnerCode.GDWinnerObjects2.length = 0;
gdjs.WinnerCode.GDFlyObjects1.length = 0;
gdjs.WinnerCode.GDFlyObjects2.length = 0;
gdjs.WinnerCode.GDcurrentScoreObjects1.length = 0;
gdjs.WinnerCode.GDcurrentScoreObjects2.length = 0;
gdjs.WinnerCode.GDkeepPlayingObjects1.length = 0;
gdjs.WinnerCode.GDkeepPlayingObjects2.length = 0;
gdjs.WinnerCode.GDButtonObjects1.length = 0;
gdjs.WinnerCode.GDButtonObjects2.length = 0;
gdjs.WinnerCode.GDLeaderboardObjects1.length = 0;
gdjs.WinnerCode.GDLeaderboardObjects2.length = 0;
gdjs.WinnerCode.GDuserHighScoreObjects1.length = 0;
gdjs.WinnerCode.GDuserHighScoreObjects2.length = 0;

gdjs.WinnerCode.eventsList0(runtimeScene);

return;

}

gdjs['WinnerCode'] = gdjs.WinnerCode;
