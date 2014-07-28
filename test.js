var googlePlayStore = require(__dirname + '/index.js');


var bundleId = 'com.buscaalimento.android';
var str = "dieta e saude,dieta proteina,vida e saude,dieta detox,dieta gratis,emagrecer com saude,dieta da sopa,dieta dos pontos,dieta e emagrecer,dieta liquida,dieta saudavel,dietas rapidas,emagrecer dieta,dieta,dieta da melancia,dieta do tipo sanguineo,dieta dos 3 dias,dieta dos 4 dias,dieta livre,dieta perder peso,emagrecer rapido,emagrecimento,me ajude a emagrecer,dicas para emagrecer com saúde,dieta da usp,dieta facil e rapido para emagrecer,tecnonutri,emagrecer de vez,medida certa,dietas para perder peso,programa para emagrecer,dicas para emagrecer,emagrecer rapido em casa,alimentação para emagrecer,dicas para emagrecer rapido,nutricionista online,nutricionista,dieta dukan,como perder peso,dicas perder peso,perder peso,myfitnesspal";


/*
googlePlayStore.getAppData('com.aviary.android.feather', function(err, app) {
	console.log(JSON.stringify(app))
});
*/

var res = str.split(",");
var result;
for (i = 0; i < res.length; i++) {
  googlePlayStore.getAppPositionByKeyword(bundleId, res[i], function(err, app) {

    console.log(JSON.stringify(app.packageId)+';'+JSON.stringify(app.keyword)+';'+JSON.stringify(app.keywordPosition));
  });
  
};

