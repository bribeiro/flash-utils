// Created by Bruno Ribeiro
// www.coletivo.as | www.brunoribeiro.net
// ribeiro@coletivo.as

// remove a layer from all elements in your library

var deleteLayer = prompt("which layer do you wanna delete?");
var lib = fl.getDocumentDOM().library;
var mainTimeline = fl.getDocumentDOM().getTimeline();
var items = lib.items;
var item;

for(var i = 0; i < mainTimeline.layers.length; i ++) {
    if(mainTimeline.layers[i].name == deleteLayer)
    {
      mainTimeline.deleteLayer(i);
    } 
}


for(var i = 0; i < items.length; i++)
{
    item = items[i];
    if (item.itemType == 'movie clip')
    {
        lib.selectItem(item);
        lib.editItem();

        var timeline = item.timeline;      
        for(var j  = 0; j < timeline.layerCount; j++)
        {
            for(var k = 0; k < timeline.layers[j].frameCount; k++)
            {
              if(timeline.layers[j].name == deleteLayer)
                timeline.deleteLayer(j); 
            }
        }
    }
}



