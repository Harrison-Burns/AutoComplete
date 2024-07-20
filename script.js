const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function searchHandler(e) {
	const searchVal = this.value;
	hideSuggestions();
	if (!searchVal) return false;
	fruit.forEach(eachFruit => {
		if (eachFruit.toUpperCase().indexOf(searchVal.toUpperCase()) !== -1){
			const newSuggestion = document.createElement('li');
			const upperCaseSearch = searchVal.toUpperCase();
			const similarCharIdx = eachFruit.toUpperCase().indexOf(upperCaseSearch);
			newSuggestion.innerHTML = `${eachFruit.substring(0,similarCharIdx)}<strong>${eachFruit.substring(similarCharIdx,similarCharIdx + searchVal.length)}</strong>${eachFruit.substring(similarCharIdx + searchVal.length)}`;
			newSuggestion.innerHTML += `<input type='hidden' value='${eachFruit}'>`;
			newSuggestion.addEventListener("click", function() {
				input.value = this.getElementsByTagName("input")[0].value;
				hideSuggestions();
			});
			suggestions.appendChild(newSuggestion);
		}
	});
}

function hideSuggestions(element) {
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	}
}

input.addEventListener('input', searchHandler);
document.addEventListener('click',e => {
	if (e !== input) {
		hideSuggestions();
	}
})