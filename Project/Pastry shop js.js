var doc = new ActiveXObject("MSXML.DOMDocument");

var catalog = doc.createElement("catalog");
doc.appendChild(catalog);

var cakes = doc.createElement("cakes");
catalog.appendChild(cakes);
var cake1 = doc.createElement("cake");
cakes.appendChild(cake1);
cake1.setAttribute("id", "C1");

var name1 = doc.createElement("name");
cake1.appendChild(name1);
name1.appendChild(doc.createTextNode('Мираж'));

var category1 = doc.createElement("category"); 
cake1.appendChild(category1);
category1.setAttribute("type", "Шоколадова");

var price1 = doc.createElement("price");
cake1.appendChild(price1);
price1.setAttribute("currency", "Лев");
price1.appendChild(doc.createTextNode('28'));

var available1 = doc.createElement("available");
cake1.appendChild(available1);
available1.appendChild(doc.createTextNode('2'));

var piece1 = doc.createElement("piece");
cake1.appendChild(piece1);
piece1.appendChild(doc.createTextNode('16'));

var weight1 = doc.createElement("weight");
cake1.appendChild(weight1);
weight1.setAttribute("weight", "кг");
weight1.appendChild(doc.createTextNode('1.8'));

var products = doc.createElement("products");
cake1.appendChild(products);
var product1 = doc.createElement("product");
products.appendChild(product1);
product1.setAttribute("number", "P1");
product1.appendChild(doc.createTextNode('Захар'));
var product2 = doc.createElement("product");
products.appendChild(product2);
product2.setAttribute("number", "P7");
product2.appendChild(doc.createTextNode('Брашно'));
var product3 = doc.createElement("product");
products.appendChild(product3);
product3.setAttribute("number", "P14");
product3.appendChild(doc.createTextNode('Вода'));
var product4 = doc.createElement("product");
products.appendChild(product4);
product4.setAttribute("number", "P6");
product4.appendChild(doc.createTextNode('Прясно мляко'));
var product5 = doc.createElement("product");
products.appendChild(product5);
product5.setAttribute("number", "P36");
product5.appendChild(doc.createTextNode('Натурален шоколад'));

var expiryDate1 = doc.createElement("expiryDate");
cake1.appendChild(expiryDate1);
expiryDate1.setAttribute("date", "Дни");
expiryDate1.appendChild(doc.createTextNode('10'));

var storage1 = doc.createElement("storage");
cake1.appendChild(storage1);
storage1.appendChild(doc.createTextNode('В хладилник'));

var description1 = doc.createElement("description");
cake1.appendChild(description1);
description1.appendChild(doc.createTextNode('Шоколадова сметана с какаови платки, обвити в плътен течен шоколад.'));

var image1 = doc.createElement("image");
cake1.appendChild(image1);
image1.appendChild(doc.createTextNode('http://www.chochko.com/shop/стандартни/торта-мираж/'));


var cake2 = doc.createElement("cake");
cakes.appendChild(cake2);
cake2.setAttribute("id", "C4");

var name2 = doc.createElement("name");
cake2.appendChild(name2);
name2.appendChild(doc.createTextNode('Еклерова'));

var category2 = doc.createElement("category");
cake2.appendChild(category2); 
category2.setAttribute("type", "Млечна");

var price2 = doc.createElement("price");
cake2.appendChild(price2);
price2.setAttribute("currency", "Лев");
price2.appendChild(doc.createTextNode('32'));

var available2 = doc.createElement("available");
cake2.appendChild(available2);
available2.appendChild(doc.createTextNode('1'));

var piece2 = doc.createElement("piece");
cake2.appendChild(piece2);
piece2.appendChild(doc.createTextNode('16'));

var weight2 = doc.createElement("weight");
cake2.appendChild(weight2);
weight2.setAttribute("weight", "кг");
weight2.appendChild(doc.createTextNode('2.1'));

var products2 = doc.createElement("products");
cake2.appendChild(products2);
var product6 = doc.createElement("product");
products2.appendChild(product6);
product6.setAttribute("number", "P1");
product6.appendChild(doc.createTextNode('Захар'));
var product7 = doc.createElement("product");
products2.appendChild(product7);
product7.setAttribute("number", "P7");
product7.appendChild(doc.createTextNode('Брашно'));
var product8 = doc.createElement("product");
products2.appendChild(product8);
product8.setAttribute("number", "P14");
product8.appendChild(doc.createTextNode('Вода'));
var product9 = doc.createElement("product");
products2.appendChild(product9);
product9.setAttribute("number", "P6");
product9.appendChild(doc.createTextNode('Прясно мляко'));
var product10 = doc.createElement("product");
products2.appendChild(product10);
product10.setAttribute("number", "P61");
product10.appendChild(doc.createTextNode('Сметана'));
var product11 = doc.createElement("product");
products2.appendChild(product11);
product11.setAttribute("number", "P37");
product11.appendChild(doc.createTextNode('Млечен шоколад'));
var product12 = doc.createElement("product");
products2.appendChild(product12);
product12.setAttribute("number", "P107");
product12.appendChild(doc.createTextNode('Фъстъци'));

var expiryDate2 = doc.createElement("expiryDate");
cake2.appendChild(expiryDate2);
expiryDate2.setAttribute("date", "Дни");
expiryDate2.appendChild(doc.createTextNode('8'));

var storage2 = doc.createElement("storage");
cake2.appendChild(storage2);
storage2.appendChild(doc.createTextNode('В хладилник'));

var description2 = doc.createElement("description");
cake2.appendChild(description2);
description2.appendChild(doc.createTextNode('Ароматно изкушение от млечен крем с мини еклери и млечен шоколад, бели пандишпанови платки, украсена с бял шоколад и парченца фъстъци.'));

var image2 = doc.createElement("image");
cake2.appendChild(image2);
image2.appendChild(doc.createTextNode('http://www.chochko.com/shop/стандартни/торта-еклерова-2/'));




var candies = doc.createElement("candies");
catalog.appendChild(candies);

var candy1 = doc.createElement("candy");
candies.appendChild(candy1);

var name3 = doc.createElement("name");
candy1.appendChild(name3);
name3.appendChild(doc.createTextNode('Трюфел'));

var price3 = doc.createElement("price");
candy1.appendChild(price3);
price3.setAttribute("currency", "Лев");
price3.appendChild(doc.createTextNode('11.20'));

var expiryDate3 = doc.createElement("expiryDate");
candy1.appendChild(expiryDate3);
expiryDate3.setAttribute("date", "Дни");
expiryDate3.appendChild(doc.createTextNode('20'));

var candy2 = doc.createElement("candy");
candies.appendChild(candy2);

var name4 = doc.createElement("name");
candy2.appendChild(name4);
name4.appendChild(doc.createTextNode('Кокосови бонбони'));

var price4 = doc.createElement("price");
candy2.appendChild(price4);
price4.setAttribute("currency", "Лев");
price4.appendChild(doc.createTextNode('9.90'));

var expiryDate4 = doc.createElement("expiryDate");
candy2.appendChild(expiryDate4);
expiryDate4.setAttribute("date", "Дни");
expiryDate4.appendChild(doc.createTextNode('20'));



var cookies = doc.createElement("cookies");
catalog.appendChild(cookies);

var cookie1 = doc.createElement("cookie");
cookies.appendChild(cookie1);

var name5 = doc.createElement("name");
cookie1.appendChild(name5);
name5.appendChild(doc.createTextNode('Ореховки'));

var price5 = doc.createElement("price");
cookie1.appendChild(price5);
price5.setAttribute("currency", "Лев");
price5.appendChild(doc.createTextNode('1.10'));

var quantity1 = doc.createElement("quantity");
cookie1.appendChild(quantity1);
quantity1.setAttribute("quantity", "Брой");
quantity1.appendChild(doc.createTextNode('1'));

var products3 = doc.createElement("products");
cookie1.appendChild(products3);
var product13 = doc.createElement("product");
products3.appendChild(product13);
product13.setAttribute("number", "P1");
product13.appendChild(doc.createTextNode('Захар'));
var product14 = doc.createElement("product");
products3.appendChild(product14);
product14.setAttribute("number", "P7");
product14.appendChild(doc.createTextNode('Брашно'));
var product15 = doc.createElement("product");
products3.appendChild(product15);
product15.setAttribute("number", "P113");
product15.appendChild(doc.createTextNode('Орехи'));


var cookie2 = doc.createElement("cookie");
cookies.appendChild(cookie2);

var name6 = doc.createElement("name");
cookie2.appendChild(name6);
name6.appendChild(doc.createTextNode('Пълнозърнести бисквити'));

var price6 = doc.createElement("price");
cookie2.appendChild(price6);
price6.setAttribute("currency", "Лев");
price6.appendChild(doc.createTextNode('1.40'));

var quantity2 = doc.createElement("quantity");
cookie2.appendChild(quantity2);
quantity2.setAttribute("quantity", "Брой");
quantity2.appendChild(doc.createTextNode('1'));

var products4 = doc.createElement("products");
cookie2.appendChild(products4);
var product16 = doc.createElement("product");
products4.appendChild(product16);
product16.setAttribute("number", "P1");
product16.appendChild(doc.createTextNode('Захар'));
var product17 = doc.createElement("product");
products4.appendChild(product17);
product17.setAttribute("number", "P8");
product17.appendChild(doc.createTextNode('Пълнозърнесто брашно'));
var product18 = doc.createElement("product");
products4.appendChild(product18);
product18.setAttribute("number", "P114");
product18.appendChild(doc.createTextNode('Бадеми'));
var product19 = doc.createElement("product");
products4.appendChild(product19);
product19.setAttribute("number", "P129");
product19.appendChild(doc.createTextNode('Тиквени семки'));
var product20 = doc.createElement("product");
products4.appendChild(product20);
product20.setAttribute("number", "P147");
product20.appendChild(doc.createTextNode('Сусам'));
var product21 = doc.createElement("product");
products4.appendChild(product21);
product21.setAttribute("number", "P151");
product21.appendChild(doc.createTextNode('Ленено семе'));



var creams = doc.createElement("creams");
catalog.appendChild(creams);

var cream1 = doc.createElement("cream");
creams.appendChild(cream1);
var type1 = doc.createElement("type");
cream1.appendChild(type1);
type1.appendChild(doc.createTextNode('Шоколадов'));
var price7 = doc.createElement("price");
cream1.appendChild(price7);
price7.setAttribute("currency", "Лев");
price7.appendChild(doc.createTextNode('3'));
var quantity3 = doc.createElement("quantity");
cream1.appendChild(quantity3);
quantity3.setAttribute("quantity", "Брой");
quantity3.appendChild(doc.createTextNode('250'));

var cream2 = doc.createElement("cream");
creams.appendChild(cream2);
var type2 = doc.createElement("type");
cream2.appendChild(type2);
type2.appendChild(doc.createTextNode('Яйчен'));
var price8 = doc.createElement("price");
cream2.appendChild(price8);
price8.setAttribute("currency", "Лев");
price8.appendChild(doc.createTextNode('2.80'));
var quantity4 = doc.createElement("quantity");
cream2.appendChild(quantity4);
quantity4.setAttribute("quantity", "Брой");
quantity4.appendChild(doc.createTextNode('220'));

doc.save('generated.xml');