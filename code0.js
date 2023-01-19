gdjs.MenuCode = {};
gdjs.MenuCode.GDPlayButtonObjects1_1final = [];

gdjs.MenuCode.GDSkyObjects1= [];
gdjs.MenuCode.GDSkyObjects2= [];
gdjs.MenuCode.GDSkyObjects3= [];
gdjs.MenuCode.GDMountainsObjects1= [];
gdjs.MenuCode.GDMountainsObjects2= [];
gdjs.MenuCode.GDMountainsObjects3= [];
gdjs.MenuCode.GDSandObjects1= [];
gdjs.MenuCode.GDSandObjects2= [];
gdjs.MenuCode.GDSandObjects3= [];
gdjs.MenuCode.GDCactus1Objects1= [];
gdjs.MenuCode.GDCactus1Objects2= [];
gdjs.MenuCode.GDCactus1Objects3= [];
gdjs.MenuCode.GDCactus2Objects1= [];
gdjs.MenuCode.GDCactus2Objects2= [];
gdjs.MenuCode.GDCactus2Objects3= [];
gdjs.MenuCode.GDCactus3Objects1= [];
gdjs.MenuCode.GDCactus3Objects2= [];
gdjs.MenuCode.GDCactus3Objects3= [];
gdjs.MenuCode.GDSignObjects1= [];
gdjs.MenuCode.GDSignObjects2= [];
gdjs.MenuCode.GDSignObjects3= [];
gdjs.MenuCode.GDRock1Objects1= [];
gdjs.MenuCode.GDRock1Objects2= [];
gdjs.MenuCode.GDRock1Objects3= [];
gdjs.MenuCode.GDRock2Objects1= [];
gdjs.MenuCode.GDRock2Objects2= [];
gdjs.MenuCode.GDRock2Objects3= [];
gdjs.MenuCode.GDTree1Objects1= [];
gdjs.MenuCode.GDTree1Objects2= [];
gdjs.MenuCode.GDTree1Objects3= [];
gdjs.MenuCode.GDTumbleweedObjects1= [];
gdjs.MenuCode.GDTumbleweedObjects2= [];
gdjs.MenuCode.GDTumbleweedObjects3= [];
gdjs.MenuCode.GDNameBackgroundObjects1= [];
gdjs.MenuCode.GDNameBackgroundObjects2= [];
gdjs.MenuCode.GDNameBackgroundObjects3= [];
gdjs.MenuCode.GDNameTopMiddleObjects1= [];
gdjs.MenuCode.GDNameTopMiddleObjects2= [];
gdjs.MenuCode.GDNameTopMiddleObjects3= [];
gdjs.MenuCode.GDNameTopRightObjects1= [];
gdjs.MenuCode.GDNameTopRightObjects2= [];
gdjs.MenuCode.GDNameTopRightObjects3= [];
gdjs.MenuCode.GDNameTopLeftObjects1= [];
gdjs.MenuCode.GDNameTopLeftObjects2= [];
gdjs.MenuCode.GDNameTopLeftObjects3= [];
gdjs.MenuCode.GDNameSideLeftObjects1= [];
gdjs.MenuCode.GDNameSideLeftObjects2= [];
gdjs.MenuCode.GDNameSideLeftObjects3= [];
gdjs.MenuCode.GDNameBottomLeftObjects1= [];
gdjs.MenuCode.GDNameBottomLeftObjects2= [];
gdjs.MenuCode.GDNameBottomLeftObjects3= [];
gdjs.MenuCode.GDNameBottomMiddleObjects1= [];
gdjs.MenuCode.GDNameBottomMiddleObjects2= [];
gdjs.MenuCode.GDNameBottomMiddleObjects3= [];
gdjs.MenuCode.GDNameSideRightObjects1= [];
gdjs.MenuCode.GDNameSideRightObjects2= [];
gdjs.MenuCode.GDNameSideRightObjects3= [];
gdjs.MenuCode.GDNameBottomRightObjects1= [];
gdjs.MenuCode.GDNameBottomRightObjects2= [];
gdjs.MenuCode.GDNameBottomRightObjects3= [];
gdjs.MenuCode.GDNameTextObjects1= [];
gdjs.MenuCode.GDNameTextObjects2= [];
gdjs.MenuCode.GDNameTextObjects3= [];
gdjs.MenuCode.GDPlayTextObjects1= [];
gdjs.MenuCode.GDPlayTextObjects2= [];
gdjs.MenuCode.GDPlayTextObjects3= [];
gdjs.MenuCode.GDPlayButtonObjects1= [];
gdjs.MenuCode.GDPlayButtonObjects2= [];
gdjs.MenuCode.GDPlayButtonObjects3= [];
gdjs.MenuCode.GDFlyObjects1= [];
gdjs.MenuCode.GDFlyObjects2= [];
gdjs.MenuCode.GDFlyObjects3= [];
gdjs.MenuCode.GDExplosionObjects1= [];
gdjs.MenuCode.GDExplosionObjects2= [];
gdjs.MenuCode.GDExplosionObjects3= [];
gdjs.MenuCode.GDGrave1Objects1= [];
gdjs.MenuCode.GDGrave1Objects2= [];
gdjs.MenuCode.GDGrave1Objects3= [];
gdjs.MenuCode.GDSkull1Objects1= [];
gdjs.MenuCode.GDSkull1Objects2= [];
gdjs.MenuCode.GDSkull1Objects3= [];
gdjs.MenuCode.GDGrass1Objects1= [];
gdjs.MenuCode.GDGrass1Objects2= [];
gdjs.MenuCode.GDGrass1Objects3= [];
gdjs.MenuCode.GDHorseObjects1= [];
gdjs.MenuCode.GDHorseObjects2= [];
gdjs.MenuCode.GDHorseObjects3= [];
gdjs.MenuCode.GDLeaderboardButtonObjects1= [];
gdjs.MenuCode.GDLeaderboardButtonObjects2= [];
gdjs.MenuCode.GDLeaderboardButtonObjects3= [];
gdjs.MenuCode.GDCreditsButtonObjects1= [];
gdjs.MenuCode.GDCreditsButtonObjects2= [];
gdjs.MenuCode.GDCreditsButtonObjects3= [];
gdjs.MenuCode.GDSoundObjects1= [];
gdjs.MenuCode.GDSoundObjects2= [];
gdjs.MenuCode.GDSoundObjects3= [];
gdjs.MenuCode.GDSmallRockObjects1= [];
gdjs.MenuCode.GDSmallRockObjects2= [];
gdjs.MenuCode.GDSmallRockObjects3= [];
gdjs.MenuCode.GDnoTouchScreenTextObjects1= [];
gdjs.MenuCode.GDnoTouchScreenTextObjects2= [];
gdjs.MenuCode.GDnoTouchScreenTextObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.asyncCallback13158812 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Horse"), gdjs.MenuCode.GDHorseObjects3);

{for(var i = 0, len = gdjs.MenuCode.GDHorseObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDHorseObjects3[i].setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.MenuCode.GDHorseObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDHorseObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, 695, 1260);
}
}}
gdjs.MenuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.MenuCode.GDHorseObjects2) asyncObjectsList.addObject("Horse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback13158812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback11633476 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Horse"), gdjs.MenuCode.GDHorseObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDHorseObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHorseObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(9), (runtimeScene) => (gdjs.MenuCode.asyncCallback11633476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboardButtonObjects1Objects = Hashtable.newFrom({"LeaderboardButton": gdjs.MenuCode.GDLeaderboardButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditsButtonObjects1Objects = Hashtable.newFrom({"CreditsButton": gdjs.MenuCode.GDCreditsButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayTextObjects1Objects = Hashtable.newFrom({"PlayText": gdjs.MenuCode.GDPlayTextObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.MenuCode.GDPlayButtonObjects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.MenuCode.GDExplosionObjects1});
gdjs.MenuCode.asyncCallback13375124 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback13375124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MenuCode.GDSoundObjects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Horse"), gdjs.MenuCode.GDHorseObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.MenuCode.GDPlayTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects1);
gdjs.copyArray(runtimeScene.getObjects("noTouchScreenText"), gdjs.MenuCode.GDnoTouchScreenTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDnoTouchScreenTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDnoTouchScreenTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDHorseObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHorseObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects1[i].setOpacity(175);
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "463e976679ba602e13f1c07686d1ad5d082abacbf97e057d12e6b4347694b8f8_Sun Up Gunned Down.aac");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "463e976679ba602e13f1c07686d1ad5d082abacbf97e057d12e6b4347694b8f8_Sun Up Gunned Down.aac", 1, false, 40, 1);
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "157cf1b7fe2ed3652a7921d84e5f9d8bcbb24a2c443578827d09a27c7fe93502_MetalV1_Walk_01.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "751052bbd3de6938713ebbe8782cc3f6feba91f9e3caf27272335ac4e549c0cd_Complete_02.aac");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "128805__mtcband__chord-9.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "95fe7f6a064b3e17dce2774ad92cee83f877d2d6dda1cd16d79b876ca572911c_Death.aac");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "68d16e38f82501c538c69cacf2f2491b4ff15cb34fa3ad08ce8e9445b4f1812a_Explosion 1.aac");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "2dca7ae297502e65ef62e9675c685f2e025e88055965af7291c508e0ceec8593_Desert Ambience.aac");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "265701b04cb41976c67820a196c0b3cbc2f98351032b9e710b853da1a5b7ff02_Gun 2.aac");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Tumbleweed"), gdjs.MenuCode.GDTumbleweedObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDTumbleweedObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTumbleweedObjects1[i].addForce(-(75), 0, 0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTumbleweedObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTumbleweedObjects1[i].rotate(-(100), runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.MenuCode.GDFlyObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFlyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, 486, 225);
}
}}

}


{


{

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardButton"), gdjs.MenuCode.GDLeaderboardButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11936196);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "e89a9251-06fe-446c-81de-0218ab93f592", true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LeaderboardBackground");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.MenuCode.GDCreditsButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCreditsButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14292220);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.MenuCode.GDPlayTextObjects1);
gdjs.MenuCode.GDPlayButtonObjects1.length = 0;


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.GDPlayButtonObjects1_1final.length = 0;gdjs.MenuCode.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects2);
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, false);
if( gdjs.MenuCode.condition0IsTrue_1.val ) {
    gdjs.MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.MenuCode.GDPlayButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.MenuCode.GDPlayButtonObjects1_1final.indexOf(gdjs.MenuCode.GDPlayButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDPlayButtonObjects1_1final.push(gdjs.MenuCode.GDPlayButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDPlayButtonObjects1_1final, gdjs.MenuCode.GDPlayButtonObjects1);
}
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14219140);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.MenuCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.MenuCode.GDPlayTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tumbleweed"), gdjs.MenuCode.GDTumbleweedObjects1);
gdjs.MenuCode.GDExplosionObjects1.length = 0;

{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDTumbleweedObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTumbleweedObjects1[i].clearForces();
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "68d16e38f82501c538c69cacf2f2491b4ff15cb34fa3ad08ce8e9445b4f1812a_Explosion 1.aac", 1, false, 40, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExplosionObjects1Objects, (( gdjs.MenuCode.GDFlyObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDFlyObjects1[0].getPointX("")), (( gdjs.MenuCode.GDFlyObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDFlyObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.MenuCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFlyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MenuCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExplosionObjects1[i].setAnimationName("Exploding");
}
}{for(var i = 0, len = gdjs.MenuCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExplosionObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayTextObjects1[i].hide();
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14256996);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9));
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects1[i].setAnimationName("Off");
}
}{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects1[i].playAnimation();
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects1[i].setAnimationName("On");
}
}{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects1[i].playAnimation();
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 40);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14204924);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayText"), gdjs.MenuCode.GDPlayTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("noTouchScreenText"), gdjs.MenuCode.GDnoTouchScreenTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDPlayTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDnoTouchScreenTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDnoTouchScreenTextObjects1[i].hide(false);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDSkyObjects1.length = 0;
gdjs.MenuCode.GDSkyObjects2.length = 0;
gdjs.MenuCode.GDSkyObjects3.length = 0;
gdjs.MenuCode.GDMountainsObjects1.length = 0;
gdjs.MenuCode.GDMountainsObjects2.length = 0;
gdjs.MenuCode.GDMountainsObjects3.length = 0;
gdjs.MenuCode.GDSandObjects1.length = 0;
gdjs.MenuCode.GDSandObjects2.length = 0;
gdjs.MenuCode.GDSandObjects3.length = 0;
gdjs.MenuCode.GDCactus1Objects1.length = 0;
gdjs.MenuCode.GDCactus1Objects2.length = 0;
gdjs.MenuCode.GDCactus1Objects3.length = 0;
gdjs.MenuCode.GDCactus2Objects1.length = 0;
gdjs.MenuCode.GDCactus2Objects2.length = 0;
gdjs.MenuCode.GDCactus2Objects3.length = 0;
gdjs.MenuCode.GDCactus3Objects1.length = 0;
gdjs.MenuCode.GDCactus3Objects2.length = 0;
gdjs.MenuCode.GDCactus3Objects3.length = 0;
gdjs.MenuCode.GDSignObjects1.length = 0;
gdjs.MenuCode.GDSignObjects2.length = 0;
gdjs.MenuCode.GDSignObjects3.length = 0;
gdjs.MenuCode.GDRock1Objects1.length = 0;
gdjs.MenuCode.GDRock1Objects2.length = 0;
gdjs.MenuCode.GDRock1Objects3.length = 0;
gdjs.MenuCode.GDRock2Objects1.length = 0;
gdjs.MenuCode.GDRock2Objects2.length = 0;
gdjs.MenuCode.GDRock2Objects3.length = 0;
gdjs.MenuCode.GDTree1Objects1.length = 0;
gdjs.MenuCode.GDTree1Objects2.length = 0;
gdjs.MenuCode.GDTree1Objects3.length = 0;
gdjs.MenuCode.GDTumbleweedObjects1.length = 0;
gdjs.MenuCode.GDTumbleweedObjects2.length = 0;
gdjs.MenuCode.GDTumbleweedObjects3.length = 0;
gdjs.MenuCode.GDNameBackgroundObjects1.length = 0;
gdjs.MenuCode.GDNameBackgroundObjects2.length = 0;
gdjs.MenuCode.GDNameBackgroundObjects3.length = 0;
gdjs.MenuCode.GDNameTopMiddleObjects1.length = 0;
gdjs.MenuCode.GDNameTopMiddleObjects2.length = 0;
gdjs.MenuCode.GDNameTopMiddleObjects3.length = 0;
gdjs.MenuCode.GDNameTopRightObjects1.length = 0;
gdjs.MenuCode.GDNameTopRightObjects2.length = 0;
gdjs.MenuCode.GDNameTopRightObjects3.length = 0;
gdjs.MenuCode.GDNameTopLeftObjects1.length = 0;
gdjs.MenuCode.GDNameTopLeftObjects2.length = 0;
gdjs.MenuCode.GDNameTopLeftObjects3.length = 0;
gdjs.MenuCode.GDNameSideLeftObjects1.length = 0;
gdjs.MenuCode.GDNameSideLeftObjects2.length = 0;
gdjs.MenuCode.GDNameSideLeftObjects3.length = 0;
gdjs.MenuCode.GDNameBottomLeftObjects1.length = 0;
gdjs.MenuCode.GDNameBottomLeftObjects2.length = 0;
gdjs.MenuCode.GDNameBottomLeftObjects3.length = 0;
gdjs.MenuCode.GDNameBottomMiddleObjects1.length = 0;
gdjs.MenuCode.GDNameBottomMiddleObjects2.length = 0;
gdjs.MenuCode.GDNameBottomMiddleObjects3.length = 0;
gdjs.MenuCode.GDNameSideRightObjects1.length = 0;
gdjs.MenuCode.GDNameSideRightObjects2.length = 0;
gdjs.MenuCode.GDNameSideRightObjects3.length = 0;
gdjs.MenuCode.GDNameBottomRightObjects1.length = 0;
gdjs.MenuCode.GDNameBottomRightObjects2.length = 0;
gdjs.MenuCode.GDNameBottomRightObjects3.length = 0;
gdjs.MenuCode.GDNameTextObjects1.length = 0;
gdjs.MenuCode.GDNameTextObjects2.length = 0;
gdjs.MenuCode.GDNameTextObjects3.length = 0;
gdjs.MenuCode.GDPlayTextObjects1.length = 0;
gdjs.MenuCode.GDPlayTextObjects2.length = 0;
gdjs.MenuCode.GDPlayTextObjects3.length = 0;
gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MenuCode.GDFlyObjects1.length = 0;
gdjs.MenuCode.GDFlyObjects2.length = 0;
gdjs.MenuCode.GDFlyObjects3.length = 0;
gdjs.MenuCode.GDExplosionObjects1.length = 0;
gdjs.MenuCode.GDExplosionObjects2.length = 0;
gdjs.MenuCode.GDExplosionObjects3.length = 0;
gdjs.MenuCode.GDGrave1Objects1.length = 0;
gdjs.MenuCode.GDGrave1Objects2.length = 0;
gdjs.MenuCode.GDGrave1Objects3.length = 0;
gdjs.MenuCode.GDSkull1Objects1.length = 0;
gdjs.MenuCode.GDSkull1Objects2.length = 0;
gdjs.MenuCode.GDSkull1Objects3.length = 0;
gdjs.MenuCode.GDGrass1Objects1.length = 0;
gdjs.MenuCode.GDGrass1Objects2.length = 0;
gdjs.MenuCode.GDGrass1Objects3.length = 0;
gdjs.MenuCode.GDHorseObjects1.length = 0;
gdjs.MenuCode.GDHorseObjects2.length = 0;
gdjs.MenuCode.GDHorseObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardButtonObjects3.length = 0;
gdjs.MenuCode.GDCreditsButtonObjects1.length = 0;
gdjs.MenuCode.GDCreditsButtonObjects2.length = 0;
gdjs.MenuCode.GDCreditsButtonObjects3.length = 0;
gdjs.MenuCode.GDSoundObjects1.length = 0;
gdjs.MenuCode.GDSoundObjects2.length = 0;
gdjs.MenuCode.GDSoundObjects3.length = 0;
gdjs.MenuCode.GDSmallRockObjects1.length = 0;
gdjs.MenuCode.GDSmallRockObjects2.length = 0;
gdjs.MenuCode.GDSmallRockObjects3.length = 0;
gdjs.MenuCode.GDnoTouchScreenTextObjects1.length = 0;
gdjs.MenuCode.GDnoTouchScreenTextObjects2.length = 0;
gdjs.MenuCode.GDnoTouchScreenTextObjects3.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
