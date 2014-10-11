function zIndexChanger(recipeSelect){
	if (recipeSelect=='first-recipe'){
		document.getElementById('home').style.zIndex=0;
		document.getElementById('first-recipe').style.zIndex=1;
		document.getElementById('second-recipe').style.zIndex=0;
		document.getElementById('third-recipe').style.zIndex=0;
	}
	if (recipeSelect=='second-recipe'){
		document.getElementById('home').style.zIndex=0;
		document.getElementById('first-recipe').style.zIndex=0;
		document.getElementById('second-recipe').style.zIndex=1;
		document.getElementById('third-recipe').style.zIndex=0;
	}
	if (recipeSelect=='third-recipe'){
		document.getElementById('home').style.zIndex=0;
		document.getElementById('first-recipe').style.zIndex=0;
		document.getElementById('second-recipe').style.zIndex=0;
		document.getElementById('third-recipe').style.zIndex=1;
	}
	if (recipeSelect=='home'){
		document.getElementById('home').style.zIndex=1;
		document.getElementById('first-recipe').style.zIndex=0;
		document.getElementById('second-recipe').style.zIndex=0;
		document.getElementById('third-recipe').style.zIndex=0;
	}

}