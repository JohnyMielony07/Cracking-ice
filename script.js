var appCache =  window.applicationCache;

appCache.onupdateready = function(e)
{
    appCache.swapCache();
    location.reload();
}