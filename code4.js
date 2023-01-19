gdjs.LeaderboardBackgroundCode = {};

gdjs.LeaderboardBackgroundCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardBackgroundCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardBackgroundCode.condition1IsTrue_0 = {val:false};


gdjs.LeaderboardBackgroundCode.eventsList0 = function(runtimeScene) {

{


gdjs.LeaderboardBackgroundCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardBackgroundCode.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}if (gdjs.LeaderboardBackgroundCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.LeaderboardBackgroundCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.LeaderboardBackgroundCode.eventsList0(runtimeScene);

return;

}

gdjs['LeaderboardBackgroundCode'] = gdjs.LeaderboardBackgroundCode;
