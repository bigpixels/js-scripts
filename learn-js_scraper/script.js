"use strict";

function showThemeList(part, chapter) {
    let allParts = document.getElementsByClassName('frontpage-content__part');
    let selectedPart = allParts[part - 1]; //часть, которую ввел пользователь
    let partParentElement = selectedPart.parentElement; //переместиться на родительский элемент выбранной части
    let allChapters = partParentElement.querySelectorAll('.list__item');//в этом родителе искать все главы
    let selectedChapter = allChapters[chapter - 1];
    console.log('выбранная часть: ' + selectedPart.outerText + '\nвыбранная глава: ' + selectedChapter.outerText);
}

//дальше идет черновик

// //показать часть учебника
//     function showParts(elementIndex) {
//         var allParts = document.getElementsByClassName('frontpage-content__part');
//         var partsMassive = [allParts[elementIndex - 1].outerText];
//         return partsMassive;
//     }
// //конец блока

// //показать главу
//     function showChapter(elementIndex) {
//         var allChapters = document.getElementsByClassName('list__link');
//         var chapterMassive = [allChapters[elementIndex - 1].outerText];
//         return chapterMassive;
//     }
// //конец блока

// //показать темы главы
//     function showThemes(elementIndex) {
//         var allThemes = document.getElementsByClassName('list__link');
//         var themesMassive = [allChapters[elementIndex - 1].outerText];
//         return themes;
//     }
// //конец блока

// function show_Part_Chapter(PartElement, ChapterElement) {
//     var allParts = document.getElementsByClassName('frontpage-content__part');
//     var part = [allParts[PartElement - 1].outerText];
//     var allChapters = part.querySelector('list__title');
//     var chapter = [allChapters[ChapterElement - 1].outerText];
// }

// //показать часть и главу
// function show_Part_Chapter(PartElement, ChapterElement) {
//     var allParts = document.getElementsByClassName('frontpage-content__part');
//     var allChapters = document.getElementsByClassName('list__title');
//     var part = [allParts[PartElement - 1]];
//     var chapter = [allChapters[ChapterElement - 1]];
//     if (part [allParts[PartElement - 1].outerText] === "ЧАСТЬ 2") {
//        var result = part[0].querySelectorAll('list__title');
//     }
//     return result;
// }
// //конец блока

// //показать часть и главу, и её темы
// function showPartTheme_Massive(PartElement, ThemeElement) {
//     var allParts = document.getElementsByClassName('frontpage-content__part');
//     var allThemes = document.getElementsByClassName('list__title');
//     var showPartTheme_Massive = [allParts[PartElement - 1].outerText, allThemes[ThemeElement - 1].outerText];
//     if (showPartTheme_Massive [0] === "ЧАСТь 1") {
        
//     }
//     // document.getElementsByClassName(elementIndex).nextElementSibling
//     // return showPartTheme_Massive;
//     return showPartTheme_Massive;
// }
// //конец блока

// //показать все темы (использовать nextElementSibling в зависимости от того, что вернул showChapterSText). Искать соседа у chapterMassive, взять его ссылку.
//     var allSubThemes = document.getElementsByClassName('list-sub__link');;
//     allSubThemes = Array.prototype.slice.call(allSubThemes); // теперь allSubThemes - массив
//     for (i = 0; i <= allSubThemes.length; i++) {
//         var subThemesMassive = [allSubThemes[i]];
//     }
//     var allSubThemesText = subThemesMassive.map(function (element, index, subThemesMassive) {
//         return element.outerText;
//     });


//     for (var i = 0; i < allSubThemes.length; i++) {
//         if (allSubThemes[i].matches('a[href$="zip"]')) {
//           alert( "Ссылка на архив: " + allSubThemes[i].href );
//         }
//       }   
// //конец блока

// var allTag_a = document.querySelectorAll('a');
// var themesMassive_2 = [allTag_a[29], allTag_a[34], allTag_a[57], ];

// themesMassive_2.forEach(function (element, index, themesMassive) {
//     console.log(element.outerText);
// })

// function showOuterText (themesMassive) {
//     return themesMassive[].outerText;
// }

// var themeList = allTag_a.filter(function (element, index, nodeListMassive) {
//     return element[29,34];
// });

// var themeList = allTag_a.forEach(function (element, index, allTag_a) {
//     console.log(element);
// });

// var themeMassive = [];

// function showThemesList (number) {
//     
// }

// function showChapters(partElement) {
//     var allParts = document.getElementsByClassName('frontpage-content__part');
//     var part = [allParts[partElement - 1].outerText];
//     var allChapters = part.querySelectorAll('list__title');
//     return allChapters;
// }