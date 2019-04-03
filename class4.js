var list = new Array("cheese", "milk", "eggs", "bread", "ham", "green")
var list2 = ["cheese", "milk", "eggs", "bread"]

var shoppingList = this.document.getElementById("shopping-list")

shoppingList.innerHTML = list[0]
shoppingList.innerHTML = list[5] + " " + list[2] + " and " + list[4]
list[5] = "pizza"
list[6] = "pasta"
list[10] = "ice cream"
shoppingList.innerHTML = list

var shoppingListString = ""
for(var i in list) {
    if(i == list.length - 1) {
       shoppingListString += list[i]
       } else {
       shoppingListString += list[i] + ", "
       }
}
shoppingList.innerHTML = list[list.length - 1]

var sum = 0
var num = [12, 4, 5, 5, 28]
for(var i in num){
    sum = sum + num[i]
}
var average = sum / num.length
var averageMessage = "The average of "
for(var l in num) {
    if(l < num.length - 1){
       averageMessage += num[l] + ", "
    }else{
       averageMessage += " and " + num[num.length - 1] + " is " + average
    }
}
var averageParagraph = this.document.getElementById("average")
averageParagraph.innerHTML = averageMessage


var correctAnswers = ["B", "B", "D", "C", ]
var studentAnswers = ["B", "C", "D", "D"]
var correctCount = 0
var questionCount = correctAnswers.length
if(correctAnswers[0] == studentAnswers[0]) {
    correctCount += 1
}
if(correctAnswers[1] == studentAnswers[1]) {
    correctCount += 1
}
if(correctAnswers[2] == studentAnswers[2]) {
    correctCount += 1
}
if(correctAnswers[3] == studentAnswers[3]) {
    correctCount += 1
}
var score = correctCount/questionCount
var scoreParagraph = this.document.getElementById("score")
scoreParagraph.innerHTML = score * 100 + "%"

averageMessage = ""
for(var i=0; i<num.length; i++) {

}
