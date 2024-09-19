// Decode decodes an array of bytes into an object.
//  - fPort contains the LoRaWAN fPort number
//  - bytes is an array of bytes, e.g. [225, 230, 255, 0]
//  - variables contains the device variables e.g. {"calibration": "3.5"} (both the key / value are of type string)
// The function must return an object, e.g. {"temperature": 22.5}
function Decode(fPort, bytes) {
  
  var decoded = {
    status: null,
    version: null,
    freeHeap: null,
    measurements: []
  };

  //read version (1 byte)
  decoded.version = "v"+toInt(bytes,0,1);

  //read global status (1 byte)
  decoded.status = bytes[1];

  index = 2;

  //read heap
  if(isBitSet(bytes[1],0x80)){
    decoded.freeHeap = toInt(bytes,index,4);
    index+=4;
  }

  while(index < bytes.length){
    size = bytes[index];
    index++;
    decoded.measurements.push(readMeasurement(bytes,index));
    index+=size;  
  }

  return decoded;
}

function readMeasurement(bytesValues,startIndex){
  localIndex = startIndex;
  measurement = {
    status: bytesValues[startIndex],
    temperature: null,
    permittivity: null,
    waterContent: null,
    counts: null,
    address: null,
    firmwareVersion: null,
  };
  localIndex++;

  //read temperature
  if(isBitSet(bytesValues[startIndex],0x80)){
    if(isBitSet(bytesValues[startIndex],0x01)){
      measurement.temperature = toInt(bytesValues,localIndex,2)/-100;
    }else{
      measurement.temperature = toInt(bytesValues,localIndex,2)/100;
    }
    localIndex+=2;
  }

  //read permittivity
  if(isBitSet(bytesValues[startIndex],0x40)){
    measurement.permittivity = toInt(bytesValues,localIndex,2)/100;
    localIndex+=2;
  }
  //read water content
  if(isBitSet(bytesValues[startIndex],0x20)){
    measurement.waterContent = toInt(bytesValues,localIndex,2)/100;
    localIndex+=2;
  }
  //read counts
  if(isBitSet(bytesValues[startIndex],0x10)){
    measurement.counts = toInt(bytesValues,localIndex,2);
    localIndex+=2;
  }
  //read address
  if(isBitSet(bytesValues[startIndex],0x08)){
    var str = "";
    for(i = 0; i < 6; i++){
      str+=String.fromCharCode(bytesValues[localIndex+i]);
    }
    measurement.address = str;
    localIndex+=6;
  }
  //read firmware version
  if(isBitSet(bytesValues[startIndex],0x04)){
    var str = "";
    for(i = 0; i < 8; i++){
      if(bytesValues[localIndex+i]!=0){
        str+=String.fromCharCode(bytesValues[localIndex+i]);
      }
    }
    measurement.firmwareVersion = str;
    localIndex+=8;
  }
  return measurement;

}

function toInt(bytesValue,startIndex,numBytes){
	var intValue = 0;
  	for(i = numBytes-1; i >= 0; i--){
      intValue = intValue<<8; //intValue*256
      intValue = intValue + bytesValue[startIndex+i];
    }
  	return intValue;
}


function isBitSet(byteValue,mask){
	if((byteValue & mask) == 0x00){
    	return false;
    }else{
    	return true;
    }
}
