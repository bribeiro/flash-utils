// Created by Bruno Ribeiro
// www.coletivo.as | www.brunoribeiro.net
// ribeiro@coletivo.as

// copy layer's name to the instance name


var timeline = fl.getDocumentDOM().getTimeline();
var layers = timeline.layers;


for(var i = 0; i<layers.length; i++)
{
  var frames = layers[i].frames;
  for(var j=0; j<frames.length; j++){
      for(var k = 0; k < frames[j].elements.length; k ++)
      {
        var newName = layers[i].name.split("/").join("")
        newName = newName.split(" ").join(""); 
        newName = newName.split("-").join("_"); 
        newName = newName.split(".").join("_"); 
        fl.trace("changed name of "+frames[j].elements[k].name+" to "+ newName);
        frames[j].elements[k].name = newName;
      }
  }
}
